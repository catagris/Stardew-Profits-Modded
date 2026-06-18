#!/usr/bin/env python3
"""
Scaffold a Content Patcher crop mod into js/mods/<mod>.js + icons.

Reads the mod's CP JSON (Data/Crops + Data/Objects); names from i18n, crop type
from object Category, seed vendors from the shop data, icons from the produce
sprite sheets. Output is a starting point you then hand-edit (see file header).

Usage: python tools/ingest_cp.py sve|eastscarp
"""
import json5, json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MODS = {
    "sve": {
        "id": "sve", "name": "Stardew Valley Expanded",
        "url": "https://www.nexusmods.com/stardewvalley/mods/3753",
        "src": "_modsources/sve", "crops": "Crops.json", "objects": "Objects.json",
        "pack": "Stardew Valley Expanded/[CP] Stardew Valley Expanded",
        "i18n": "i18n/default.json", "assets": "assets",
        "wiki": "https://stardewvalleyexpanded.wiki.gg/wiki/",
        "strip_prefixes": ["FlashShifter.StardewValleyExpandedCP_"], "keyns": "sve_",
        "shop_glob": "Shops/**/*.json", "vendor_from": "filename",
        "vendor_names": {"ZoeyVendor": "Zoey", "Pierre": "Pierre", "Joja": "Joja",
                         "DesertTrader": "Desert Trader"},
        "forage": "Forage",
        "out": "js/mods/sve.js",
    },
    "eastscarp": {
        "id": "eastScarp", "name": "East Scarp",
        "url": "https://www.nexusmods.com/stardewvalley/mods/5787",
        "src": "_modsources/eastscarp", "crops": "Crops.json", "objects": "ESObjects.json",
        "pack": "East Scarp REMASTERED/East Scarp Core",
        "i18n": "i18n/default.json", "assets": "assets",
        "wiki": "https://eastscarp.wiki.gg/wiki/",
        "strip_prefixes": ["Lemurkat.EastScarp_", "EastScarp_"], "keyns": "eastscarp_",
        "shop_glob": "Shops.json", "vendor_from": "shopid",
        "vendor_names": {"JessieSeedShop": "Jessie", "AideenFlowerShop": "Aideen"},
        "forage": "Forage",
        "out": "js/mods/eastscarp.js",
    },
}

SEASON_KEYS = ["spring", "summer", "fall", "winter", "greenhouse"]
# Stardew object categories -> our crop-type handling
CAT_FRUIT, CAT_VEG, CAT_FLOWER, CAT_FORAGE = -79, -75, -80, -81


def cp_entries(path, target, modid=None):
    txt = open(path, encoding="utf-8-sig").read()
    if modid:
        txt = txt.replace("{{ModID}}", modid)  # resolve the CP built-in token
    j = json5.loads(txt)
    out = {}
    for ch in j.get("Changes", []):
        if target in str(ch.get("Target", "")):
            out.update(ch.get("Entries") or {})
    return out


_WIKI_SMALL = {"of", "the", "and", "a", "an", "in", "on", "to", "with", "for"}


def wikiize(name):
    """Guess a wiki page title from a name (drop trailing 'Flower'/'Seeds',
    lowercase connector words). Best-effort -- fix exceptions by hand."""
    s = re.sub(r"\s+(Flower|Seeds?)$", "", name).strip()
    words = s.split()
    out = [w if i == 0 or w.lower() not in _WIKI_SMALL else w.lower()
           for i, w in enumerate(words)]
    return "_".join(out)


def resolve_vendors(cfg, src, modid):
    """Map seed id -> set of vendor labels from the shop data.
    'Pierre'/'Joja' map to those fields; anything else becomes specialLoc."""
    import glob
    vmap = {}
    pat = cfg.get("shop_glob")
    if not pat:
        return vmap
    names = cfg.get("vendor_names", {})

    def walk_items(o):
        if isinstance(o, dict):
            if "ItemId" in o:
                yield o
            for v in o.values():
                yield from walk_items(v)
        elif isinstance(o, list):
            for v in o:
                yield from walk_items(v)

    def add(iid, label):
        iid = re.sub(r"^\(O\)", "", str(iid or ""))
        if iid:
            vmap.setdefault(iid, set()).add(label)

    for f in glob.glob(os.path.join(src, pat), recursive=True):
        try:
            txt = open(f, encoding="utf-8-sig").read().replace("{{ModID}}", modid)
            jj = json5.loads(txt)
        except Exception:
            continue
        if cfg.get("vendor_from") == "filename":
            base = os.path.splitext(os.path.basename(f))[0]
            label = names.get(base, base)
            for it in walk_items(jj):
                add(it.get("ItemId"), label)
        else:  # shopid: vendor name from the enclosing shop entry id
            for ch in jj.get("Changes", []):
                for shop_id, shop in (ch.get("Entries") or {}).items():
                    if not isinstance(shop, dict):
                        continue
                    short = shop_id.split("_")[-1]
                    label = names.get(short, short)
                    for it in shop.get("Items", []) or []:
                        if isinstance(it, dict):
                            add(it.get("ItemId"), label)
    return vmap


def artisan_for(cat):
    if cat == CAT_FRUIT:
        return {"jarType": "Jelly", "kegType": "Wine", "ages": True, "dehydratorType": "Dried Fruit"}
    if cat == CAT_VEG:
        return {"jarType": "Pickles", "kegType": "Juice", "ages": False}
    return {}  # flowers / forage: raw only


def main():
    if len(sys.argv) < 2 or sys.argv[1] not in MODS:
        print("usage: python tools/ingest_cp.py sve|eastscarp"); sys.exit(1)
    cfg = MODS[sys.argv[1]]
    src = os.path.join(ROOT, cfg["src"])
    packdir = os.path.join(ROOT, cfg["pack"])

    mani = json5.load(open(os.path.join(src, "manifest.json"), encoding="utf-8-sig"))
    modid = mani.get("UniqueID")
    crops = cp_entries(os.path.join(src, cfg["crops"]), "Crops", modid)
    objects = cp_entries(os.path.join(src, cfg["objects"]), "Objects", modid)
    i18n_path = os.path.join(packdir, cfg["i18n"])
    i18n = json5.load(open(i18n_path, encoding="utf-8-sig")) if os.path.exists(i18n_path) else {}

    def resolve_name(tok, fallback):
        if isinstance(tok, str) and tok.startswith("{{i18n:"):
            return i18n.get(tok[7:-2].strip(), fallback)
        return tok or fallback

    def strip_ns(s):
        for p in cfg["strip_prefixes"]:
            if s.startswith(p):
                return s[len(p):]
        return s

    vendors = resolve_vendors(cfg, src, modid)

    # fallback lookup for harvest ids that don't match an object key exactly
    def norm(s): return re.sub(r"[^a-z0-9]", "", (s or "").lower())
    obj_by_norm = {norm(strip_ns(k)): k for k in objects}

    # index pack PNGs by basename
    png_index = {}
    assets_root = os.path.join(packdir, cfg["assets"])
    for dp, _, files in os.walk(assets_root):
        for f in files:
            if f.lower().endswith(".png"):
                png_index.setdefault(os.path.splitext(f)[0].lower(), os.path.join(dp, f))

    def key_for(produce_id):
        return cfg["keyns"] + norm(strip_ns(produce_id))

    out_crops, season_lists, warnings, sprites = {}, {k: [] for k in SEASON_KEYS}, [], {}

    for seed_id, ce in crops.items():
        if not isinstance(ce, dict):
            continue  # skip non-crop entries (deletions / placeholders)
        hid = ce.get("HarvestItemId")
        po = objects.get(hid)
        if po is None and hid:
            po = objects.get(obj_by_norm.get(norm(strip_ns(hid)), ""))
        if po is None:
            warnings.append(f"{seed_id}: produce object '{hid}' not found - skipped")
            continue

        key = key_for(hid)
        name = resolve_name(po.get("DisplayName"), key.split("_", 1)[-1].replace("_", " ").title())
        cat = po.get("Category")
        price = int(po.get("Price", 0) or 0)
        regrow = ce.get("RegrowDays", 0)
        regrow = regrow if isinstance(regrow, int) and regrow > 0 else 0
        growth = sum(ce.get("DaysInPhase", [])) or 0

        seed_obj = objects.get(seed_id, {})
        seed_price = int(seed_obj.get("Price", 0) or 0)

        vset = vendors.get(seed_id, set())
        is_pierre = "Pierre" in vset
        is_joja = "Joja" in vset
        specials = sorted(v for v in vset if v not in ("Pierre", "Joja"))
        if specials:
            special_loc = specials[0]
        elif not vset:
            special_loc = cfg.get("forage", cfg["name"])  # sold nowhere -> foraged
        else:
            special_loc = ""  # Pierre/Joja only

        produce = {"extra": 0, "extraPerc": 0, "price": price}
        produce.update(artisan_for(cat))

        wiki = cfg.get("wiki")
        crop_url = (wiki + wikiize(name)) if wiki else cfg["url"]

        out_crops[key] = {
            "name": name,
            "url": crop_url,
            "img": key + ".png",
            "seeds": {
                "sell": seed_price,
                "pierre": seed_price if is_pierre else 0,
                "joja": seed_price if is_joja else 0,
                "special": seed_price if special_loc else 0,
                "specialLoc": special_loc,
                "specialUrl": crop_url,
            },
            "growth": {"initial": growth, "regrow": regrow},
            "produce": produce,
        }

        seasons = [s.lower() for s in ce.get("Seasons", []) if s.lower() in season_lists]
        for s in seasons:
            season_lists[s].append(key)
        season_lists["greenhouse"].append(key)

        # record sprite source
        tex = po.get("Texture") or ""
        base = re.split(r"[\\/]", tex)[-1].lower()
        sprites[key] = (png_index.get(base), po.get("SpriteIndex", 0), base)

    # write JS
    emit = {
        "id": cfg["id"], "name": cfg["name"], "url": cfg["url"], "defaultEnabled": False,
        "crops": out_crops, "seasons": season_lists,
    }
    js = ("/*\n"
          " * " + cfg["name"] + " crops for Stardew-Profits-Modded.\n"
          " *\n"
          " * Initially scaffolded by tools/ingest_cp.py from the " + cfg["name"] + " CP pack.\n"
          " * THIS FILE IS NOW THE CANONICAL, HAND-EDITED source of truth -- edit values here\n"
          " * directly (price, growth, seasons, url/wiki link, vendor). Re-running the tool\n"
          " * OVERWRITES this file, so only do that to re-scaffold from scratch.\n"
          " */\n")
    js += "ModRegistry.register(" + json.dumps(emit, indent=2, ensure_ascii=False) + ");\n"
    out_path = os.path.join(ROOT, cfg["out"])
    open(out_path, "w", encoding="utf-8").write(js)

    # extract icons
    from PIL import Image
    cache, extracted, missing = {}, 0, []
    for key, (path, idx, base) in sprites.items():
        if not path:
            missing.append(key + " (tex=" + base + ")"); continue
        if path not in cache:
            cache[path] = Image.open(path).convert("RGBA")
        im = cache[path]
        cols = max(im.width // 16, 1)
        idx = idx or 0
        x, y = (idx % cols) * 16, (idx // cols) * 16
        if x + 16 <= im.width and y + 16 <= im.height:
            tile = im.crop((x, y, x + 16, y + 16))
        else:
            tile = im.crop((0, 0, min(16, im.width), min(16, im.height)))
        tile.resize((48, 48), Image.NEAREST).save(os.path.join(ROOT, "img", key + ".png"))
        extracted += 1

    print(f"[{cfg['id']}] crops: {len(out_crops)}  icons: {extracted}  missing sprite: {len(missing)}")
    print("  season counts: " + ", ".join(f"{k}={len(v)}" for k, v in season_lists.items()))
    print(f"  wrote {cfg['out']}")
    for m in missing:
        print("  MISSING SPRITE:", m)
    for w in warnings:
        print("  WARN:", w)


if __name__ == "__main__":
    main()
