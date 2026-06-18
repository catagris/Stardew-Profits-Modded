/*
 * ModRegistry — the mod-system core.
 *
 * Mod data files (js/mods/*.js) call ModRegistry.register({...}) at load time.
 * rebuildData() recomputes the global `crops` object and the `seasons[].crops`
 * arrays as (vanilla baseline) + (every enabled mod). With zero mods registered
 * it is a no-op that reproduces vanilla exactly.
 *
 * Load order (index.html):
 *   predictions.js -> modRegistry.js -> crops.js (vanilla)
 *     -> js/mods/*.js (each calls register) -> data.js (builds vanilla seasons)
 *     -> main.js (calls rebuildData on startup)
 *
 * A mod definition:
 *   {
 *     id: "cornucopia-crops",          // stable key, used in URL-hash persistence
 *     name: "Cornucopia - More Crops", // UI label
 *     url:  "https://...",             // UI link (Nexus/wiki)
 *     defaultEnabled: false,
 *     crops:   { cropKey: { ...crop def in our schema... }, ... },
 *     seasons: { spring:[cropKey,...], summer:[...], fall:[...], winter:[...], greenhouse:[...] }
 *   }
 *
 * See design.md sections 3, 3a, 3b.
 */
var ModRegistry = (function () {
	// seasons[] index -> mod-def season key (matches data.js season order)
	var SEASON_KEYS = ["spring", "summer", "fall", "winter", "greenhouse"];

	var mods = [];                 // registered mod defs, in registration order
	var enabled = {};              // id -> bool
	var injectedKeys = [];         // crop keys we added to global `crops` (removed on each rebuild)
	var vanillaSeasonCrops = null; // snapshot of vanilla seasons[i].crops, captured lazily

	function register(def) {
		if (!def || !def.id) {
			console.warn("ModRegistry.register: mod definition missing 'id'", def);
			return;
		}
		if (enabled.hasOwnProperty(def.id)) {
			console.warn("ModRegistry.register: duplicate mod id '" + def.id + "' — ignoring later one");
			return def;
		}
		mods.push(def);
		enabled[def.id] = !!def.defaultEnabled;
		return def;
	}

	function getMods() { return mods.slice(); }
	function isEnabled(id) { return !!enabled[id]; }
	function setEnabled(id, on) { if (enabled.hasOwnProperty(id)) enabled[id] = !!on; }
	function getEnabledIds() {
		return mods.filter(function (m) { return enabled[m.id]; }).map(function (m) { return m.id; });
	}

	// Replace the enabled set wholesale (used by URL-hash persistence on load).
	// Unknown ids are ignored; mods not listed are disabled.
	function setEnabledIds(ids) {
		var want = {};
		(ids || []).forEach(function (id) { want[id] = true; });
		mods.forEach(function (m) { enabled[m.id] = !!want[m.id]; });
	}

	function enabledMods() {
		return mods.filter(function (m) { return enabled[m.id]; });
	}

	/*
	 * Rebuild global `crops` and `seasons[].crops` from vanilla + enabled mods.
	 * Idempotent for a given enabled set; safe to call on every mod toggle.
	 * Mutates the existing `crops` object and `seasons` entries in place so all
	 * existing references stay valid.
	 */
	function rebuildData() {
		if (typeof crops === "undefined" || typeof seasons === "undefined") {
			console.warn("ModRegistry.rebuildData: crops/seasons not loaded yet");
			return;
		}

		// Capture vanilla season membership exactly once, before any injection.
		if (vanillaSeasonCrops === null) {
			vanillaSeasonCrops = seasons.map(function (s) { return s.crops.slice(); });
		}

		// 1. Remove crop defs injected by the previous rebuild.
		injectedKeys.forEach(function (k) { delete crops[k]; });
		injectedKeys = [];

		// 2. Inject enabled mods' crop defs into the global crops object.
		enabledMods().forEach(function (mod) {
			var mc = mod.crops || {};
			Object.keys(mc).forEach(function (k) {
				crops[k] = mc[k];
				injectedKeys.push(k);
			});
		});

		// 3. Rebuild each season's crop list: vanilla baseline + enabled mod crops.
		for (var i = 0; i < seasons.length; i++) {
			var list = vanillaSeasonCrops[i].slice();
			var sk = SEASON_KEYS[i];
			enabledMods().forEach(function (mod) {
				var keys = (mod.seasons && mod.seasons[sk]) || [];
				keys.forEach(function (key) {
					if (crops[key]) list.push(crops[key]);
					else console.warn("ModRegistry: mod '" + mod.id + "' season '" + sk +
						"' references unknown crop '" + key + "'");
				});
			});
			seasons[i].crops = list;
		}
	}

	return {
		register: register,
		getMods: getMods,
		isEnabled: isEnabled,
		setEnabled: setEnabled,
		getEnabledIds: getEnabledIds,
		setEnabledIds: setEnabledIds,
		rebuildData: rebuildData,
		SEASON_KEYS: SEASON_KEYS
	};
})();
