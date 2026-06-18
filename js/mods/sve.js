/*
 * Stardew Valley Expanded crops for Stardew-Profits-Modded.
 *
 * Initially scaffolded by tools/ingest_cp.py from the Stardew Valley Expanded CP pack.
 * THIS FILE IS NOW THE CANONICAL, HAND-EDITED source of truth -- edit values here
 * directly (price, growth, seasons, url/wiki link, vendor). Re-running the tool
 * OVERWRITES this file, so only do that to re-scaffold from scratch.
 */
ModRegistry.register({
  "id": "sve",
  "name": "Stardew Valley Expanded",
  "url": "https://www.nexusmods.com/stardewvalley/mods/3753",
  "defaultEnabled": false,
  "crops": {
    "sve_ancientfiber": {
      "name": "Ancient Fiber",
      "url": "https://stardewvalleyexpanded.wiki.gg/wiki/Ancient_Fiber",
      "img": "sve_ancientfiber.png",
      "seeds": {
        "sell": 0,
        "pierre": 0,
        "joja": 0,
        "special": 0,
        "specialLoc": "Forage",
        "specialUrl": "https://stardewvalleyexpanded.wiki.gg/wiki/Ancient_Fiber"
      },
      "growth": {
        "initial": 12,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 145,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "sve_monstermushroom": {
      "name": "Monster Mushroom",
      "url": "https://stardewvalleyexpanded.wiki.gg/wiki/Monster_Mushroom",
      "img": "sve_monstermushroom.png",
      "seeds": {
        "sell": 0,
        "pierre": 0,
        "joja": 0,
        "special": 0,
        "specialLoc": "Forage",
        "specialUrl": "https://stardewvalleyexpanded.wiki.gg/wiki/Monster_Mushroom"
      },
      "growth": {
        "initial": 13,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 850,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "sve_jojaberry": {
      "name": "Joja Berry",
      "url": "https://stardewvalleyexpanded.wiki.gg/wiki/Joja_Berry",
      "img": "sve_jojaberry.png",
      "seeds": {
        "sell": 1000,
        "pierre": 0,
        "joja": 0,
        "special": 1000,
        "specialLoc": "Zoey",
        "specialUrl": "https://stardewvalleyexpanded.wiki.gg/wiki/Joja_Berry"
      },
      "growth": {
        "initial": 25,
        "regrow": 4
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 650,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "sve_jojaveggie": {
      "name": "Joja Veggie",
      "url": "https://stardewvalleyexpanded.wiki.gg/wiki/Joja_Veggie",
      "img": "sve_jojaveggie.png",
      "seeds": {
        "sell": 200,
        "pierre": 0,
        "joja": 0,
        "special": 200,
        "specialLoc": "Zoey",
        "specialUrl": "https://stardewvalleyexpanded.wiki.gg/wiki/Joja_Veggie"
      },
      "growth": {
        "initial": 13,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 1140,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "sve_monsterfruit": {
      "name": "Monster Fruit",
      "url": "https://stardewvalleyexpanded.wiki.gg/wiki/Monster_Fruit",
      "img": "sve_monsterfruit.png",
      "seeds": {
        "sell": 0,
        "pierre": 0,
        "joja": 0,
        "special": 0,
        "specialLoc": "Forage",
        "specialUrl": "https://stardewvalleyexpanded.wiki.gg/wiki/Monster_Fruit"
      },
      "growth": {
        "initial": 25,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 1525,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "sve_salalberry": {
      "name": "Salal Berry",
      "url": "https://stardewvalleyexpanded.wiki.gg/wiki/Salal_Berry",
      "img": "sve_salalberry.png",
      "seeds": {
        "sell": 0,
        "pierre": 0,
        "joja": 0,
        "special": 0,
        "specialLoc": "Forage",
        "specialUrl": "https://stardewvalleyexpanded.wiki.gg/wiki/Salal_Berry"
      },
      "growth": {
        "initial": 13,
        "regrow": 4
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 75,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "sve_voidroot": {
      "name": "Void Root",
      "url": "https://stardewvalleyexpanded.wiki.gg/wiki/Void_Root",
      "img": "sve_voidroot.png",
      "seeds": {
        "sell": 0,
        "pierre": 0,
        "joja": 0,
        "special": 0,
        "specialLoc": "Forage",
        "specialUrl": "https://stardewvalleyexpanded.wiki.gg/wiki/Void_Root"
      },
      "growth": {
        "initial": 8,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 235,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "sve_slimeberry": {
      "name": "Slime Berry",
      "url": "https://stardewvalleyexpanded.wiki.gg/wiki/Slime_Berry",
      "img": "sve_slimeberry.png",
      "seeds": {
        "sell": 0,
        "pierre": 0,
        "joja": 0,
        "special": 0,
        "specialLoc": "Forage",
        "specialUrl": "https://stardewvalleyexpanded.wiki.gg/wiki/Slime_Berry"
      },
      "growth": {
        "initial": 13,
        "regrow": 4
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 65,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "sve_cucumber": {
      "name": "Cucumber",
      "url": "https://stardewvalleyexpanded.wiki.gg/wiki/Cucumber",
      "img": "sve_cucumber.png",
      "seeds": {
        "sell": 75,
        "pierre": 75,
        "joja": 75,
        "special": 0,
        "specialLoc": "",
        "specialUrl": "https://stardewvalleyexpanded.wiki.gg/wiki/Cucumber"
      },
      "growth": {
        "initial": 12,
        "regrow": 2
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 35,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "sve_butternutsquash": {
      "name": "Butternut Squash",
      "url": "https://stardewvalleyexpanded.wiki.gg/wiki/Butternut_Squash",
      "img": "sve_butternutsquash.png",
      "seeds": {
        "sell": 30,
        "pierre": 30,
        "joja": 30,
        "special": 0,
        "specialLoc": "",
        "specialUrl": "https://stardewvalleyexpanded.wiki.gg/wiki/Butternut_Squash"
      },
      "growth": {
        "initial": 12,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 200,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "sve_sweetpotato": {
      "name": "Sweet Potato",
      "url": "https://stardewvalleyexpanded.wiki.gg/wiki/Sweet_Potato",
      "img": "sve_sweetpotato.png",
      "seeds": {
        "sell": 45,
        "pierre": 45,
        "joja": 45,
        "special": 0,
        "specialLoc": "",
        "specialUrl": "https://stardewvalleyexpanded.wiki.gg/wiki/Sweet_Potato"
      },
      "growth": {
        "initial": 12,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 280,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "sve_goldcarrot": {
      "name": "Gold Carrot",
      "url": "https://stardewvalleyexpanded.wiki.gg/wiki/Gold_Carrot",
      "img": "sve_goldcarrot.png",
      "seeds": {
        "sell": 300,
        "pierre": 0,
        "joja": 0,
        "special": 300,
        "specialLoc": "Desert Trader",
        "specialUrl": "https://stardewvalleyexpanded.wiki.gg/wiki/Gold_Carrot"
      },
      "growth": {
        "initial": 6,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 1000,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    }
  },
  "seasons": {
    "spring": [
      "sve_jojaberry",
      "sve_jojaveggie",
      "sve_salalberry",
      "sve_slimeberry",
      "sve_cucumber",
      "sve_goldcarrot"
    ],
    "summer": [
      "sve_ancientfiber",
      "sve_jojaberry",
      "sve_jojaveggie",
      "sve_monsterfruit",
      "sve_salalberry",
      "sve_butternutsquash",
      "sve_goldcarrot"
    ],
    "fall": [
      "sve_monstermushroom",
      "sve_jojaberry",
      "sve_jojaveggie",
      "sve_sweetpotato",
      "sve_goldcarrot"
    ],
    "winter": [
      "sve_voidroot"
    ],
    "greenhouse": [
      "sve_ancientfiber",
      "sve_monstermushroom",
      "sve_jojaberry",
      "sve_jojaveggie",
      "sve_monsterfruit",
      "sve_salalberry",
      "sve_voidroot",
      "sve_slimeberry",
      "sve_cucumber",
      "sve_butternutsquash",
      "sve_sweetpotato",
      "sve_goldcarrot"
    ]
  }
});
