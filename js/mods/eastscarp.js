/*
 * East Scarp crops for Stardew-Profits-Modded.
 *
 * Initially scaffolded by tools/ingest_cp.py from the East Scarp CP pack.
 * THIS FILE IS NOW THE CANONICAL, HAND-EDITED source of truth -- edit values here
 * directly (price, growth, seasons, url/wiki link, vendor). Re-running the tool
 * OVERWRITES this file, so only do that to re-scaffold from scratch.
 */
ModRegistry.register({
  "id": "eastScarp",
  "name": "East Scarp",
  "url": "https://www.nexusmods.com/stardewvalley/mods/5787",
  "defaultEnabled": false,
  "crops": {
    "eastscarp_azurechrysanthemum": {
      "name": "Azure Chrysanthemum",
      "url": "https://eastscarp.wiki.gg/wiki/Azure_Chrysanthemum",
      "img": "eastscarp_azurechrysanthemum.png",
      "seeds": {
        "sell": 125,
        "pierre": 0,
        "joja": 0,
        "special": 125,
        "specialLoc": "Aideen",
        "specialUrl": "https://eastscarp.wiki.gg/wiki/Azure_Chrysanthemum"
      },
      "growth": {
        "initial": 10,
        "regrow": 13
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 250
      }
    },
    "eastscarp_birdofparadise": {
      "name": "Bird Of Paradise Flower",
      "url": "https://eastscarp.wiki.gg/wiki/Bird_of_Paradise_Flower",
      "img": "eastscarp_birdofparadise.png",
      "seeds": {
        "sell": 125,
        "pierre": 0,
        "joja": 0,
        "special": 125,
        "specialLoc": "Aideen",
        "specialUrl": "https://eastscarp.wiki.gg/wiki/Bird_of_Paradise_Flower"
      },
      "growth": {
        "initial": 12,
        "regrow": 8
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 200
      }
    },
    "eastscarp_serruria": {
      "name": "Serruria Flower",
      "url": "https://eastscarp.wiki.gg/wiki/Serruria",
      "img": "eastscarp_serruria.png",
      "seeds": {
        "sell": 125,
        "pierre": 0,
        "joja": 0,
        "special": 125,
        "specialLoc": "Aideen",
        "specialUrl": "https://eastscarp.wiki.gg/wiki/Serruria"
      },
      "growth": {
        "initial": 14,
        "regrow": 14
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 300
      }
    },
    "eastscarp_puckerwort": {
      "name": "Puckerwort",
      "url": "https://eastscarp.wiki.gg/wiki/Puckerwort",
      "img": "eastscarp_puckerwort.png",
      "seeds": {
        "sell": 20,
        "pierre": 0,
        "joja": 0,
        "special": 20,
        "specialLoc": "Jessie",
        "specialUrl": "https://eastscarp.wiki.gg/wiki/Puckerwort"
      },
      "growth": {
        "initial": 5,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 50,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "eastscarp_bitebackmelon": {
      "name": "Biteback Melon",
      "url": "https://eastscarp.wiki.gg/wiki/Biteback_Melon",
      "img": "eastscarp_bitebackmelon.png",
      "seeds": {
        "sell": 70,
        "pierre": 0,
        "joja": 0,
        "special": 70,
        "specialLoc": "Jessie",
        "specialUrl": "https://eastscarp.wiki.gg/wiki/Biteback_Melon"
      },
      "growth": {
        "initial": 9,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 120,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "eastscarp_cuccaroot": {
      "name": "Cuccaroot",
      "url": "https://eastscarp.wiki.gg/wiki/Cuccaroot",
      "img": "eastscarp_cuccaroot.png",
      "seeds": {
        "sell": 30,
        "pierre": 0,
        "joja": 0,
        "special": 30,
        "specialLoc": "Jessie",
        "specialUrl": "https://eastscarp.wiki.gg/wiki/Cuccaroot"
      },
      "growth": {
        "initial": 8,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 75,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "eastscarp_frostberry": {
      "name": "Frost Berry",
      "url": "https://eastscarp.wiki.gg/wiki/Frost_Berry",
      "img": "eastscarp_frostberry.png",
      "seeds": {
        "sell": 75,
        "pierre": 0,
        "joja": 0,
        "special": 75,
        "specialLoc": "Jessie",
        "specialUrl": "https://eastscarp.wiki.gg/wiki/Frost_Berry"
      },
      "growth": {
        "initial": 7,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 50,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "eastscarp_gigglefit": {
      "name": "Giggle Ficus Root",
      "url": "https://eastscarp.wiki.gg/wiki/Giggle_Ficus",
      "img": "eastscarp_gigglefit.png",
      "seeds": {
        "sell": 80,
        "pierre": 0,
        "joja": 0,
        "special": 80,
        "specialLoc": "Forage",
        "specialUrl": "https://eastscarp.wiki.gg/wiki/Giggle_Ficus"
      },
      "growth": {
        "initial": 8,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 175,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "eastscarp_buttertuff": {
      "name": "ButterTuff",
      "url": "https://eastscarp.wiki.gg/wiki/Buttertuff",
      "img": "eastscarp_buttertuff.png",
      "seeds": {
        "sell": 40,
        "pierre": 0,
        "joja": 0,
        "special": 40,
        "specialLoc": "Jessie",
        "specialUrl": "https://eastscarp.wiki.gg/wiki/Buttertuff"
      },
      "growth": {
        "initial": 6,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 75,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "eastscarp_fairycap": {
      "name": "Fairy Cap",
      "url": "https://eastscarp.wiki.gg/wiki/Fairy_Cap",
      "img": "eastscarp_fairycap.png",
      "seeds": {
        "sell": 60,
        "pierre": 0,
        "joja": 0,
        "special": 60,
        "specialLoc": "Jessie",
        "specialUrl": "https://eastscarp.wiki.gg/wiki/Fairy_Cap"
      },
      "growth": {
        "initial": 8,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 90,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "eastscarp_paneeki": {
      "name": "Paneeki",
      "url": "https://eastscarp.wiki.gg/wiki/Paneeki",
      "img": "eastscarp_paneeki.png",
      "seeds": {
        "sell": 100,
        "pierre": 0,
        "joja": 0,
        "special": 100,
        "specialLoc": "Jessie",
        "specialUrl": "https://eastscarp.wiki.gg/wiki/Paneeki"
      },
      "growth": {
        "initial": 7,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 170,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "eastscarp_zinfazufruit": {
      "name": "Zinfazufruit",
      "url": "https://eastscarp.wiki.gg/wiki/Zinfazu",
      "img": "eastscarp_zinfazufruit.png",
      "seeds": {
        "sell": 200,
        "pierre": 0,
        "joja": 0,
        "special": 200,
        "specialLoc": "Jessie",
        "specialUrl": "https://eastscarp.wiki.gg/wiki/Zinfazu"
      },
      "growth": {
        "initial": 10,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 400,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "eastscarp_yohofruit": {
      "name": "Yoho Fruit",
      "url": "https://eastscarp.wiki.gg/wiki/Yoho_Fruit",
      "img": "eastscarp_yohofruit.png",
      "seeds": {
        "sell": 20,
        "pierre": 0,
        "joja": 0,
        "special": 20,
        "specialLoc": "Jessie",
        "specialUrl": "https://eastscarp.wiki.gg/wiki/Yoho_Fruit"
      },
      "growth": {
        "initial": 5,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 45,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "eastscarp_deepcavefruit": {
      "name": "Deep Cave Fruit",
      "url": "https://eastscarp.wiki.gg/wiki/Deep_Cave_Fruit",
      "img": "eastscarp_deepcavefruit.png",
      "seeds": {
        "sell": 100,
        "pierre": 0,
        "joja": 0,
        "special": 100,
        "specialLoc": "Jessie",
        "specialUrl": "https://eastscarp.wiki.gg/wiki/Deep_Cave_Fruit"
      },
      "growth": {
        "initial": 15,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 175,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "eastscarp_caveflower": {
      "name": "Cave Flower",
      "url": "https://eastscarp.wiki.gg/wiki/Cave_Flower",
      "img": "eastscarp_caveflower.png",
      "seeds": {
        "sell": 80,
        "pierre": 0,
        "joja": 0,
        "special": 80,
        "specialLoc": "Aideen",
        "specialUrl": "https://eastscarp.wiki.gg/wiki/Cave_Flower"
      },
      "growth": {
        "initial": 11,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 150
      }
    },
    "eastscarp_firepepper": {
      "name": "Fire Pepper",
      "url": "https://eastscarp.wiki.gg/wiki/Fire_Pepper",
      "img": "eastscarp_firepepper.png",
      "seeds": {
        "sell": 175,
        "pierre": 0,
        "joja": 0,
        "special": 175,
        "specialLoc": "Jessie",
        "specialUrl": "https://eastscarp.wiki.gg/wiki/Fire_Pepper"
      },
      "growth": {
        "initial": 10,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 175,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "eastscarp_chocofruit": {
      "name": "Chocofruit",
      "url": "https://eastscarp.wiki.gg/wiki/Chocofruit",
      "img": "eastscarp_chocofruit.png",
      "seeds": {
        "sell": 50,
        "pierre": 0,
        "joja": 0,
        "special": 50,
        "specialLoc": "Jessie",
        "specialUrl": "https://eastscarp.wiki.gg/wiki/Chocofruit"
      },
      "growth": {
        "initial": 6,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 70,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "eastscarp_buttonfruit": {
      "name": "Buttonberry",
      "url": "https://eastscarp.wiki.gg/wiki/Buttonberry",
      "img": "eastscarp_buttonfruit.png",
      "seeds": {
        "sell": 60,
        "pierre": 0,
        "joja": 0,
        "special": 60,
        "specialLoc": "Forage",
        "specialUrl": "https://eastscarp.wiki.gg/wiki/Buttonberry"
      },
      "growth": {
        "initial": 8,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 50,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    }
  },
  "seasons": {
    "spring": [
      "eastscarp_azurechrysanthemum",
      "eastscarp_birdofparadise",
      "eastscarp_serruria",
      "eastscarp_bitebackmelon",
      "eastscarp_buttertuff",
      "eastscarp_yohofruit",
      "eastscarp_deepcavefruit",
      "eastscarp_firepepper"
    ],
    "summer": [
      "eastscarp_azurechrysanthemum",
      "eastscarp_birdofparadise",
      "eastscarp_serruria",
      "eastscarp_puckerwort",
      "eastscarp_buttertuff",
      "eastscarp_zinfazufruit",
      "eastscarp_yohofruit",
      "eastscarp_deepcavefruit",
      "eastscarp_buttonfruit"
    ],
    "fall": [
      "eastscarp_azurechrysanthemum",
      "eastscarp_cuccaroot",
      "eastscarp_gigglefit",
      "eastscarp_fairycap",
      "eastscarp_paneeki",
      "eastscarp_deepcavefruit",
      "eastscarp_caveflower",
      "eastscarp_chocofruit"
    ],
    "winter": [
      "eastscarp_serruria",
      "eastscarp_frostberry",
      "eastscarp_gigglefit",
      "eastscarp_paneeki",
      "eastscarp_deepcavefruit",
      "eastscarp_caveflower",
      "eastscarp_chocofruit"
    ],
    "greenhouse": [
      "eastscarp_azurechrysanthemum",
      "eastscarp_birdofparadise",
      "eastscarp_serruria",
      "eastscarp_puckerwort",
      "eastscarp_bitebackmelon",
      "eastscarp_cuccaroot",
      "eastscarp_frostberry",
      "eastscarp_gigglefit",
      "eastscarp_buttertuff",
      "eastscarp_fairycap",
      "eastscarp_paneeki",
      "eastscarp_zinfazufruit",
      "eastscarp_yohofruit",
      "eastscarp_deepcavefruit",
      "eastscarp_caveflower",
      "eastscarp_firepepper",
      "eastscarp_chocofruit",
      "eastscarp_buttonfruit"
    ]
  }
});
