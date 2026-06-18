# tools/ — mod ingest scaffolding

`ingest_cp.py` turns a Content Patcher crop mod into a `js/mods/<mod>.js` data file
plus extracted 48×48 crop icons in `img/`.

## It's a jumping-off point, not the source of truth

The generated `js/mods/<mod>.js` is a **starting scaffold you then hand-edit**. Once
it exists, that file is the canonical, hand-maintained data — fix prices, growth,
seasons, names, vendors, and wiki links (`url`) directly in the JSON.

**Re-running the tool overwrites the file**, wiping your edits. So only re-run to
re-scaffold from scratch (e.g. a mod update), then re-apply changes. The tool gets
you ~90% there; it can't reliably resolve everything (wiki page titles are
hand-authored and inconsistent, some prices/seasons/vendors need a human eye).

See `design.md` §6b for the full data-ownership rationale.

## Requirements

```
pip install json5 Pillow
```

## Run it for an existing mod

```
python tools/ingest_cp.py sve
python tools/ingest_cp.py eastscarp
```

Prints crop/icon counts, season counts, and any warnings (skipped entries, missing
sprites).

## Add a new mod

1. **Stage the mod's JSON.** Copy the relevant files out of the unzipped CP pack into
   `_modsources/<mod>/` — at minimum its `Crops.json`, `Objects.json`, `manifest.json`,
   and any shop files. (Keeps ingest reading a small, stable set; the full pack stays
   wherever you unzipped it for sprites.)

2. **Add a config entry** to the `MODS` dict in `ingest_cp.py`:

   | key | what it is |
   | --- | --- |
   | `id` | registry id — **letters only** (URL-hash serializer constraint) |
   | `name` | display name (Mods checkbox label) |
   | `url` | Nexus page (mod-level link) |
   | `src` | `_modsources/<mod>` (where the staged JSON lives) |
   | `crops` / `objects` | the Data/Crops and Data/Objects filenames in `src` |
   | `pack` | path to the unzipped CP pack (for `i18n/` + `assets/`) |
   | `i18n` | `i18n/default.json` (name resolution) |
   | `assets` | `assets` (sprite-sheet search root) |
   | `wiki` | wiki base, e.g. `https://<mod>.wiki.gg/wiki/` (or omit) |
   | `strip_prefixes` | id namespace prefixes to strip, longest first |
   | `keyns` | crop-key namespace, e.g. `mymod_` (avoids collisions) |
   | `shop_glob` | glob for shop files under `src` (seed vendor lookup) |
   | `vendor_from` | `filename` (one shop per file) or `shopid` (shop entry id) |
   | `vendor_names` | raw shop name → friendly label (`Pierre`/`Joja` map to those fields) |
   | `forage` | label for seeds sold nowhere (e.g. `Forage`) |
   | `out` | output path, e.g. `js/mods/mymod.js` |

3. **Run** `python tools/ingest_cp.py <mod>`.

4. **Wire it in** — add one line to `index.html`, after `crops.js`, before `data.js`:

   ```html
   <script src="js/mods/mymod.js"> </script>
   ```

5. **Hand-edit** `js/mods/mymod.js` — verify prices/growth/seasons, fix wiki links,
   tidy vendors. From here the file is yours; don't re-run unless re-scaffolding.

## What it resolves automatically

- Names via i18n; growth = sum(`DaysInPhase`), regrow = `RegrowDays`; seasons.
- Crop type from object `Category` → jar/keg/aging (fruit→Wine, veg→Juice, flower→raw).
- Seed vendors from shop data (Pierre/Joja vs special vendors vs forage).
- Icons cropped from the produce sprite sheets.
- Best-effort wiki page titles (`wikiize`) — **expect to fix exceptions by hand**.
