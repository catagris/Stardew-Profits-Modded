/*
 * Cornucopia - More Crops crops for Stardew-Profits-Modded.
 *
 * Initially scaffolded by tools/ingest_cornucopia.py from the Cornucopia CP pack +
 * _modsources/cornucopia-verify.csv. THIS FILE IS NOW THE CANONICAL, HAND-EDITED
 * source of truth -- edit values here directly (price, growth, seasons, url/wiki link).
 * Re-running the tool OVERWRITES this file, so only do that to re-scaffold from scratch.
 */
ModRegistry.register({
  "id": "cornucopiaCrops",
  "name": "Cornucopia - More Crops",
  "url": "https://www.nexusmods.com/stardewvalley/mods/19508",
  "defaultEnabled": false,
  "crops": {
    "cornucopia_adzukibean": {
      "name": "Adzuki Bean",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Adzuki_Bean",
      "img": "cornucopia_adzukibean.png",
      "seeds": {
        "sell": 50,
        "pierre": 100,
        "joja": 100,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 9,
        "regrow": 4
      },
      "produce": {
        "extra": 1,
        "extraPerc": 0.25,
        "price": 60,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_agave": {
      "name": "Agave",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Agave",
      "img": "cornucopia_agave.png",
      "seeds": {
        "sell": 50,
        "pierre": 0,
        "joja": 0,
        "special": 100,
        "specialLoc": "Sandy",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Agave"
      },
      "growth": {
        "initial": 8,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 270,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_aloe": {
      "name": "Aloe",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Aloe",
      "img": "cornucopia_aloe.png",
      "seeds": {
        "sell": 50,
        "pierre": 0,
        "joja": 0,
        "special": 100,
        "specialLoc": "Sandy",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Aloe"
      },
      "growth": {
        "initial": 4,
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
    "cornucopia_asparagus": {
      "name": "Asparagus",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Asparagus",
      "img": "cornucopia_asparagus.png",
      "seeds": {
        "sell": 30,
        "pierre": 60,
        "joja": 60,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 5,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 140,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_bamboo": {
      "name": "Bamboo",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Bamboo",
      "img": "cornucopia_bamboo.png",
      "seeds": {
        "sell": 40,
        "pierre": 0,
        "joja": 0,
        "special": 80,
        "specialLoc": "Sandy",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Bamboo"
      },
      "growth": {
        "initial": 9,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 65,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_barley": {
      "name": "Barley",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Barley",
      "img": "cornucopia_barley.png",
      "seeds": {
        "sell": 5,
        "pierre": 10,
        "joja": 10,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 4,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 25,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_basil": {
      "name": "Basil",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Basil",
      "img": "cornucopia_basil.png",
      "seeds": {
        "sell": 10,
        "pierre": 20,
        "joja": 20,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 3,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 30,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_bellpepper": {
      "name": "Bell Pepper",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Bell_Pepper",
      "img": "cornucopia_bellpepper.png",
      "seeds": {
        "sell": 65,
        "pierre": 130,
        "joja": 130,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 10,
        "regrow": 4
      },
      "produce": {
        "extra": 1,
        "extraPerc": 0.25,
        "price": 70,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "cornucopia_blackbeans": {
      "name": "Black Beans",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Black_Beans",
      "img": "cornucopia_blackbeans.png",
      "seeds": {
        "sell": 30,
        "pierre": 60,
        "joja": 60,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 10,
        "regrow": 3
      },
      "produce": {
        "extra": 1,
        "extraPerc": 1,
        "price": 15,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_blueagave": {
      "name": "Blue Agave",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Blue_Agave",
      "img": "cornucopia_blueagave.png",
      "seeds": {
        "sell": 90,
        "pierre": 0,
        "joja": 0,
        "special": 180,
        "specialLoc": "Sandy",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Blue_Agave"
      },
      "growth": {
        "initial": 12,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 400,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_buckwheat": {
      "name": "Buckwheat",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Buckwheat",
      "img": "cornucopia_buckwheat.png",
      "seeds": {
        "sell": 5,
        "pierre": 10,
        "joja": 10,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 4,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 25,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_butternutsquash": {
      "name": "Butternut Squash",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Butternut_Squash",
      "img": "cornucopia_butternutsquash.png",
      "seeds": {
        "sell": 90,
        "pierre": 180,
        "joja": 180,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 10,
        "regrow": 5
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
    "cornucopia_cabbage": {
      "name": "Cabbage",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Cabbage",
      "img": "cornucopia_cabbage.png",
      "seeds": {
        "sell": 35,
        "pierre": 70,
        "joja": 70,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 7,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 130,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_canarymelon": {
      "name": "Canary Melon",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Canary_Melon",
      "img": "cornucopia_canarymelon.png",
      "seeds": {
        "sell": 225,
        "pierre": 450,
        "joja": 450,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 12,
        "regrow": 5
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 225,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "cornucopia_canolaflower": {
      "name": "Canola Flower",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Canola_Flower",
      "img": "cornucopia_canolaflower.png",
      "seeds": {
        "sell": 50,
        "pierre": 100,
        "joja": 100,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 7,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 40
      }
    },
    "cornucopia_cantaloupe": {
      "name": "Cantaloupe",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Cantaloupe",
      "img": "cornucopia_cantaloupe.png",
      "seeds": {
        "sell": 40,
        "pierre": 80,
        "joja": 80,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 8,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 180,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "cornucopia_cassava": {
      "name": "Cassava",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Cassava",
      "img": "cornucopia_cassava.png",
      "seeds": {
        "sell": 25,
        "pierre": 50,
        "joja": 50,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 7,
        "regrow": 0
      },
      "produce": {
        "extra": 1,
        "extraPerc": 0.25,
        "price": 80,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_catnip": {
      "name": "Catnip",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Catnip",
      "img": "cornucopia_catnip.png",
      "seeds": {
        "sell": 30,
        "pierre": 0,
        "joja": 0,
        "special": 60,
        "specialLoc": "Marnie",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Catnip"
      },
      "growth": {
        "initial": 7,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 70,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_celery": {
      "name": "Celery",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Celery",
      "img": "cornucopia_celery.png",
      "seeds": {
        "sell": 15,
        "pierre": 30,
        "joja": 30,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 4,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 45,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_chickpea": {
      "name": "Chickpea",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Chickpea",
      "img": "cornucopia_chickpea.png",
      "seeds": {
        "sell": 100,
        "pierre": 200,
        "joja": 200,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 10,
        "regrow": 5
      },
      "produce": {
        "extra": 1,
        "extraPerc": 1.5,
        "price": 55,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_chives": {
      "name": "Chives",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Chives",
      "img": "cornucopia_chives.png",
      "seeds": {
        "sell": 10,
        "pierre": 20,
        "joja": 20,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 5,
        "regrow": 0
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
    "cornucopia_cilantro": {
      "name": "Cilantro",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Cilantro",
      "img": "cornucopia_cilantro.png",
      "seeds": {
        "sell": 10,
        "pierre": 20,
        "joja": 20,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 5,
        "regrow": 0
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
    "cornucopia_cucumber": {
      "name": "Cucumber",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Cucumber",
      "img": "cornucopia_cucumber.png",
      "seeds": {
        "sell": 50,
        "pierre": 100,
        "joja": 100,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 11,
        "regrow": 3
      },
      "produce": {
        "extra": 1,
        "extraPerc": 0.25,
        "price": 85,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_daikon": {
      "name": "Daikon",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Daikon",
      "img": "cornucopia_daikon.png",
      "seeds": {
        "sell": 70,
        "pierre": 70,
        "joja": 70,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 8,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 195,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_dill": {
      "name": "Dill",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Dill",
      "img": "cornucopia_dill.png",
      "seeds": {
        "sell": 25,
        "pierre": 50,
        "joja": 50,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 7,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 65,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_durum": {
      "name": "Durum",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Durum",
      "img": "cornucopia_durum.png",
      "seeds": {
        "sell": 5,
        "pierre": 10,
        "joja": 10,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 4,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 25,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_fennel": {
      "name": "Fennel",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Fennel",
      "img": "cornucopia_fennel.png",
      "seeds": {
        "sell": 10,
        "pierre": 20,
        "joja": 20,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 5,
        "regrow": 0
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
    "cornucopia_fenugreek": {
      "name": "Fenugreek",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Fenugreek",
      "img": "cornucopia_fenugreek.png",
      "seeds": {
        "sell": 10,
        "pierre": 20,
        "joja": 20,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 5,
        "regrow": 0
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
    "cornucopia_ginseng": {
      "name": "Ginseng",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Ginseng",
      "img": "cornucopia_ginseng.png",
      "seeds": {
        "sell": 296,
        "pierre": 0,
        "joja": 0,
        "special": 0,
        "specialLoc": "Dwarf",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Ginseng"
      },
      "growth": {
        "initial": 30,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 2600,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_greenpeas": {
      "name": "Green Peas",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Green_Peas",
      "img": "cornucopia_greenpeas.png",
      "seeds": {
        "sell": 25,
        "pierre": 50,
        "joja": 50,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 8,
        "regrow": 3
      },
      "produce": {
        "extra": 1,
        "extraPerc": 1.5,
        "price": 35,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_groundcherries": {
      "name": "Groundcherries",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Groundcherries",
      "img": "cornucopia_groundcherries.png",
      "seeds": {
        "sell": 75,
        "pierre": 150,
        "joja": 150,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 9,
        "regrow": 3
      },
      "produce": {
        "extra": 1,
        "extraPerc": 1,
        "price": 60,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "cornucopia_habanero": {
      "name": "Habanero",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Habanero",
      "img": "cornucopia_habanero.png",
      "seeds": {
        "sell": 65,
        "pierre": 130,
        "joja": 130,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 10,
        "regrow": 5
      },
      "produce": {
        "extra": 1,
        "extraPerc": 0.1,
        "price": 120,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "cornucopia_honeydew": {
      "name": "Honeydew",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Honeydew",
      "img": "cornucopia_honeydew.png",
      "seeds": {
        "sell": 40,
        "pierre": 80,
        "joja": 80,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 8,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 180,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "cornucopia_jalapeno": {
      "name": "Jalapeño",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Jalapeño",
      "img": "cornucopia_jalapeno.png",
      "seeds": {
        "sell": 10,
        "pierre": 20,
        "joja": 20,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 8,
        "regrow": 4
      },
      "produce": {
        "extra": 1,
        "extraPerc": 0.1,
        "price": 40,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "cornucopia_kidneybeans": {
      "name": "Kidney Beans",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Kidney_Beans",
      "img": "cornucopia_kidneybeans.png",
      "seeds": {
        "sell": 90,
        "pierre": 180,
        "joja": 180,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 10,
        "regrow": 4
      },
      "produce": {
        "extra": 1,
        "extraPerc": 1,
        "price": 35,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_kiwi": {
      "name": "Kiwifruit",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Kiwifruit",
      "img": "cornucopia_kiwi.png",
      "seeds": {
        "sell": 50,
        "pierre": 0,
        "joja": 0,
        "special": 0,
        "specialLoc": "Island Trader",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Kiwifruit"
      },
      "growth": {
        "initial": 21,
        "regrow": 2
      },
      "produce": {
        "extra": 1,
        "extraPerc": 0.1,
        "price": 100,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "cornucopia_lemongrass": {
      "name": "Lemongrass",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Lemongrass",
      "img": "cornucopia_lemongrass.png",
      "seeds": {
        "sell": 10,
        "pierre": 0,
        "joja": 0,
        "special": 20,
        "specialLoc": "Sandy",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Lemongrass"
      },
      "growth": {
        "initial": 6,
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
    "cornucopia_lettuce": {
      "name": "Lettuce",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Lettuce",
      "img": "cornucopia_lettuce.png",
      "seeds": {
        "sell": 10,
        "pierre": 20,
        "joja": 20,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 6,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 65,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_licoriceroot": {
      "name": "Licorice Root",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Licorice_Root",
      "img": "cornucopia_licoriceroot.png",
      "seeds": {
        "sell": 50,
        "pierre": 0,
        "joja": 0,
        "special": 100,
        "specialLoc": "Dwarf",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Licorice_Root"
      },
      "growth": {
        "initial": 8,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 135,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_marjoram": {
      "name": "Marjoram",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Marjoram",
      "img": "cornucopia_marjoram.png",
      "seeds": {
        "sell": 15,
        "pierre": 30,
        "joja": 30,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 6,
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
    "cornucopia_mint": {
      "name": "Mint",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Mint",
      "img": "cornucopia_mint.png",
      "seeds": {
        "sell": 15,
        "pierre": 30,
        "joja": 30,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
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
    "cornucopia_navybeans": {
      "name": "Navy Beans",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Navy_Beans",
      "img": "cornucopia_navybeans.png",
      "seeds": {
        "sell": 40,
        "pierre": 80,
        "joja": 80,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 10,
        "regrow": 3
      },
      "produce": {
        "extra": 1,
        "extraPerc": 1,
        "price": 15,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_oats": {
      "name": "Oats",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Oats",
      "img": "cornucopia_oats.png",
      "seeds": {
        "sell": 5,
        "pierre": 10,
        "joja": 10,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 4,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 25,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_okra": {
      "name": "Okra",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Okra",
      "img": "cornucopia_okra.png",
      "seeds": {
        "sell": 80,
        "pierre": 160,
        "joja": 160,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 10,
        "regrow": 4
      },
      "produce": {
        "extra": 1,
        "extraPerc": 0.9,
        "price": 60,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_onion": {
      "name": "Onion",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Onion",
      "img": "cornucopia_onion.png",
      "seeds": {
        "sell": 40,
        "pierre": 80,
        "joja": 80,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 8,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 115,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_oregano": {
      "name": "Oregano",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Oregano",
      "img": "cornucopia_oregano.png",
      "seeds": {
        "sell": 15,
        "pierre": 30,
        "joja": 30,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
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
    "cornucopia_parsley": {
      "name": "Parsley",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Parsley",
      "img": "cornucopia_parsley.png",
      "seeds": {
        "sell": 10,
        "pierre": 20,
        "joja": 20,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 5,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 45,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_passionfruit": {
      "name": "Passion Fruit",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Passion_Fruit",
      "img": "cornucopia_passionfruit.png",
      "seeds": {
        "sell": 65,
        "pierre": 0,
        "joja": 0,
        "special": 0,
        "specialLoc": "Island Trader",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Passion_Fruit"
      },
      "growth": {
        "initial": 12,
        "regrow": 5
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 220,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "cornucopia_peanut": {
      "name": "Peanut",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Peanut",
      "img": "cornucopia_peanut.png",
      "seeds": {
        "sell": 30,
        "pierre": 60,
        "joja": 60,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 20,
        "regrow": 0
      },
      "produce": {
        "extra": 6,
        "extraPerc": 1,
        "price": 85,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_perillaleaves": {
      "name": "Perilla Leaves",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Perilla_Leaves",
      "img": "cornucopia_perillaleaves.png",
      "seeds": {
        "sell": 15,
        "pierre": 30,
        "joja": 30,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
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
    "cornucopia_pintobeans": {
      "name": "Pinto Beans",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Pinto_Beans",
      "img": "cornucopia_pintobeans.png",
      "seeds": {
        "sell": 40,
        "pierre": 80,
        "joja": 80,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 10,
        "regrow": 3
      },
      "produce": {
        "extra": 1,
        "extraPerc": 1,
        "price": 15,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_quinoa": {
      "name": "Quinoa",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Quinoa",
      "img": "cornucopia_quinoa.png",
      "seeds": {
        "sell": 10,
        "pierre": 20,
        "joja": 20,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 6,
        "regrow": 0
      },
      "produce": {
        "extra": 1,
        "extraPerc": 0.25,
        "price": 30,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_redonion": {
      "name": "Red Onion",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Red_Onion",
      "img": "cornucopia_redonion.png",
      "seeds": {
        "sell": 40,
        "pierre": 80,
        "joja": 80,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 8,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 115,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_rosemary": {
      "name": "Rosemary",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Rosemary",
      "img": "cornucopia_rosemary.png",
      "seeds": {
        "sell": 15,
        "pierre": 30,
        "joja": 30,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 7,
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
    "cornucopia_sage": {
      "name": "Sage",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Sage",
      "img": "cornucopia_sage.png",
      "seeds": {
        "sell": 20,
        "pierre": 40,
        "joja": 40,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 5,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 70,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_shallot": {
      "name": "Shallot",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Shallot",
      "img": "cornucopia_shallot.png",
      "seeds": {
        "sell": 40,
        "pierre": 80,
        "joja": 80,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 8,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 115,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_spinach": {
      "name": "Spinach",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Spinach",
      "img": "cornucopia_spinach.png",
      "seeds": {
        "sell": 5,
        "pierre": 10,
        "joja": 10,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 4,
        "regrow": 0
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
    "cornucopia_sugarbeet": {
      "name": "Sugar Beet",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Sugar_Beet",
      "img": "cornucopia_sugarbeet.png",
      "seeds": {
        "sell": 50,
        "pierre": 100,
        "joja": 100,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 8,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 180,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_sugarcane": {
      "name": "Sugarcane",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Sugarcane",
      "img": "cornucopia_sugarcane.png",
      "seeds": {
        "sell": 10,
        "pierre": 0,
        "joja": 0,
        "special": 20,
        "specialLoc": "Sandy",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Sugarcane"
      },
      "growth": {
        "initial": 8,
        "regrow": 0
      },
      "produce": {
        "extra": 1,
        "extraPerc": 0.6,
        "price": 30,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_sweetpotato": {
      "name": "Sweet Potato",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Sweet_Potato",
      "img": "cornucopia_sweetpotato.png",
      "seeds": {
        "sell": 35,
        "pierre": 70,
        "joja": 70,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 8,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 180,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_tarragon": {
      "name": "Tarragon",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Tarragon",
      "img": "cornucopia_tarragon.png",
      "seeds": {
        "sell": 15,
        "pierre": 30,
        "joja": 30,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 6,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 60,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_thyme": {
      "name": "Thyme",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Thyme",
      "img": "cornucopia_thyme.png",
      "seeds": {
        "sell": 15,
        "pierre": 30,
        "joja": 30,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
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
    "cornucopia_turnip": {
      "name": "Turnip",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Turnip",
      "img": "cornucopia_turnip.png",
      "seeds": {
        "sell": 15,
        "pierre": 30,
        "joja": 30,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
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
    "cornucopia_wasabiroot": {
      "name": "Wasabi Root",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Wasabi_Root",
      "img": "cornucopia_wasabiroot.png",
      "seeds": {
        "sell": 50,
        "pierre": 100,
        "joja": 100,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 8,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 165,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_watermelon": {
      "name": "Watermelon",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Watermelon",
      "img": "cornucopia_watermelon.png",
      "seeds": {
        "sell": 150,
        "pierre": 300,
        "joja": 300,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 12,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 640,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    },
    "cornucopia_wormwood": {
      "name": "Wormwood",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Wormwood",
      "img": "cornucopia_wormwood.png",
      "seeds": {
        "sell": 50,
        "pierre": 0,
        "joja": 0,
        "special": 100,
        "specialLoc": "Dwarf",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Wormwood"
      },
      "growth": {
        "initial": 8,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 150,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_zucchini": {
      "name": "Zucchini",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Zucchini",
      "img": "cornucopia_zucchini.png",
      "seeds": {
        "sell": 25,
        "pierre": 50,
        "joja": 50,
        "special": 0,
        "specialLoc": "",
        "specialUrl": ""
      },
      "growth": {
        "initial": 14,
        "regrow": 2
      },
      "produce": {
        "extra": 1,
        "extraPerc": 0.1,
        "price": 60,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_beansprouts": {
      "name": "Beansprouts",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Beansprouts",
      "img": "cornucopia_beansprouts.png",
      "seeds": {
        "sell": 50,
        "pierre": 0,
        "joja": 0,
        "special": 50,
        "specialLoc": "Unpurchasable",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Beansprouts"
      },
      "growth": {
        "initial": 6,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 30,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_cottonboll": {
      "name": "Cotton Boll",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Cotton_Boll",
      "img": "cornucopia_cottonboll.png",
      "seeds": {
        "sell": 100,
        "pierre": 100,
        "joja": 100,
        "special": 0,
        "specialLoc": "",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Cotton_Boll"
      },
      "growth": {
        "initial": 8,
        "regrow": 2
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 80
      }
    },
    "cornucopia_cuminseeds": {
      "name": "Cumin Seeds",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Cumin_Seeds",
      "img": "cornucopia_cuminseeds.png",
      "seeds": {
        "sell": 40,
        "pierre": 0,
        "joja": 0,
        "special": 40,
        "specialLoc": "Unpurchasable",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Cumin_Seeds"
      },
      "growth": {
        "initial": 5,
        "regrow": 0
      },
      "produce": {
        "extra": 1,
        "extraPerc": 0.5,
        "price": 40
      }
    },
    "cornucopia_lentils": {
      "name": "Lentils",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Lentils",
      "img": "cornucopia_lentils.png",
      "seeds": {
        "sell": 20,
        "pierre": 0,
        "joja": 0,
        "special": 20,
        "specialLoc": "Unpurchasable",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Lentils"
      },
      "growth": {
        "initial": 5,
        "regrow": 0
      },
      "produce": {
        "extra": 1,
        "extraPerc": 1.5,
        "price": 20,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_mustardgreens": {
      "name": "Mustard Greens",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Mustard_Greens",
      "img": "cornucopia_mustardgreens.png",
      "seeds": {
        "sell": 20,
        "pierre": 20,
        "joja": 20,
        "special": 0,
        "specialLoc": "",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Mustard_Greens"
      },
      "growth": {
        "initial": 4,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 40,
        "jarType": "Pickles",
        "kegType": "Juice",
        "ages": false
      }
    },
    "cornucopia_sesameseeds": {
      "name": "Sesame Seeds",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Sesame_Seeds",
      "img": "cornucopia_sesameseeds.png",
      "seeds": {
        "sell": 60,
        "pierre": 0,
        "joja": 0,
        "special": 60,
        "specialLoc": "Unpurchasable",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Sesame_Seeds"
      },
      "growth": {
        "initial": 5,
        "regrow": 0
      },
      "produce": {
        "extra": 2,
        "extraPerc": 1,
        "price": 60
      }
    },
    "cornucopia_soybeans": {
      "name": "Soybeans",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Soybeans",
      "img": "cornucopia_soybeans.png",
      "seeds": {
        "sell": 65,
        "pierre": 0,
        "joja": 0,
        "special": 65,
        "specialLoc": "Unpurchasable",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Soybeans"
      },
      "growth": {
        "initial": 10,
        "regrow": 3
      },
      "produce": {
        "extra": 1,
        "extraPerc": 0.5,
        "price": 65
      }
    },
    "cornucopia_turmeric": {
      "name": "Turmeric",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Turmeric",
      "img": "cornucopia_turmeric.png",
      "seeds": {
        "sell": 40,
        "pierre": 0,
        "joja": 0,
        "special": 40,
        "specialLoc": "Unpurchasable",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Turmeric"
      },
      "growth": {
        "initial": 7,
        "regrow": 0
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 100
      }
    },
    "cornucopia_ube": {
      "name": "Ube",
      "url": "https://stardewcornucopia.wiki.gg/wiki/Ube",
      "img": "cornucopia_ube.png",
      "seeds": {
        "sell": 50,
        "pierre": 0,
        "joja": 0,
        "special": 50,
        "specialLoc": "Unpurchasable",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/Ube"
      },
      "growth": {
        "initial": 8,
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
    "cornucopia_whitegrape": {
      "name": "White Grape",
      "url": "https://stardewcornucopia.wiki.gg/wiki/White_Grape",
      "img": "cornucopia_whitegrape.png",
      "seeds": {
        "sell": 27,
        "pierre": 27,
        "joja": 27,
        "special": 0,
        "specialLoc": "",
        "specialUrl": "https://stardewcornucopia.wiki.gg/wiki/White_Grape"
      },
      "growth": {
        "initial": 10,
        "regrow": 3
      },
      "produce": {
        "extra": 0,
        "extraPerc": 0,
        "price": 80,
        "jarType": "Jelly",
        "kegType": "Wine",
        "ages": true,
        "dehydratorType": "Dried Fruit"
      }
    }
  },
  "seasons": {
    "spring": [
      "cornucopia_agave",
      "cornucopia_asparagus",
      "cornucopia_bamboo",
      "cornucopia_basil",
      "cornucopia_buckwheat",
      "cornucopia_cabbage",
      "cornucopia_canarymelon",
      "cornucopia_canolaflower",
      "cornucopia_cantaloupe",
      "cornucopia_catnip",
      "cornucopia_dill",
      "cornucopia_fenugreek",
      "cornucopia_ginseng",
      "cornucopia_jalapeno",
      "cornucopia_licoriceroot",
      "cornucopia_marjoram",
      "cornucopia_onion",
      "cornucopia_parsley",
      "cornucopia_passionfruit",
      "cornucopia_pintobeans",
      "cornucopia_redonion",
      "cornucopia_shallot",
      "cornucopia_spinach",
      "cornucopia_sugarbeet",
      "cornucopia_sesameseeds"
    ],
    "summer": [
      "cornucopia_adzukibean",
      "cornucopia_aloe",
      "cornucopia_bamboo",
      "cornucopia_bellpepper",
      "cornucopia_blueagave",
      "cornucopia_butternutsquash",
      "cornucopia_canolaflower",
      "cornucopia_cassava",
      "cornucopia_chickpea",
      "cornucopia_chives",
      "cornucopia_cucumber",
      "cornucopia_greenpeas",
      "cornucopia_groundcherries",
      "cornucopia_honeydew",
      "cornucopia_kiwi",
      "cornucopia_lemongrass",
      "cornucopia_lettuce",
      "cornucopia_navybeans",
      "cornucopia_okra",
      "cornucopia_oregano",
      "cornucopia_perillaleaves",
      "cornucopia_quinoa",
      "cornucopia_sugarcane",
      "cornucopia_wasabiroot",
      "cornucopia_watermelon",
      "cornucopia_beansprouts",
      "cornucopia_cottonboll"
    ],
    "fall": [
      "cornucopia_barley",
      "cornucopia_blackbeans",
      "cornucopia_celery",
      "cornucopia_cilantro",
      "cornucopia_daikon",
      "cornucopia_durum",
      "cornucopia_fennel",
      "cornucopia_groundcherries",
      "cornucopia_habanero",
      "cornucopia_kidneybeans",
      "cornucopia_oats",
      "cornucopia_okra",
      "cornucopia_peanut",
      "cornucopia_rosemary",
      "cornucopia_sage",
      "cornucopia_spinach",
      "cornucopia_sweetpotato",
      "cornucopia_tarragon",
      "cornucopia_thyme",
      "cornucopia_turnip",
      "cornucopia_zucchini",
      "cornucopia_cottonboll",
      "cornucopia_cuminseeds",
      "cornucopia_lentils",
      "cornucopia_soybeans",
      "cornucopia_turmeric",
      "cornucopia_whitegrape"
    ],
    "winter": [
      "cornucopia_ginseng",
      "cornucopia_mint",
      "cornucopia_wormwood",
      "cornucopia_mustardgreens",
      "cornucopia_ube"
    ],
    "greenhouse": [
      "cornucopia_adzukibean",
      "cornucopia_agave",
      "cornucopia_aloe",
      "cornucopia_asparagus",
      "cornucopia_bamboo",
      "cornucopia_barley",
      "cornucopia_basil",
      "cornucopia_bellpepper",
      "cornucopia_blackbeans",
      "cornucopia_blueagave",
      "cornucopia_buckwheat",
      "cornucopia_butternutsquash",
      "cornucopia_cabbage",
      "cornucopia_canarymelon",
      "cornucopia_canolaflower",
      "cornucopia_cantaloupe",
      "cornucopia_cassava",
      "cornucopia_catnip",
      "cornucopia_celery",
      "cornucopia_chickpea",
      "cornucopia_chives",
      "cornucopia_cilantro",
      "cornucopia_cucumber",
      "cornucopia_daikon",
      "cornucopia_dill",
      "cornucopia_durum",
      "cornucopia_fennel",
      "cornucopia_fenugreek",
      "cornucopia_ginseng",
      "cornucopia_greenpeas",
      "cornucopia_groundcherries",
      "cornucopia_habanero",
      "cornucopia_honeydew",
      "cornucopia_jalapeno",
      "cornucopia_kidneybeans",
      "cornucopia_kiwi",
      "cornucopia_lemongrass",
      "cornucopia_lettuce",
      "cornucopia_licoriceroot",
      "cornucopia_marjoram",
      "cornucopia_mint",
      "cornucopia_navybeans",
      "cornucopia_oats",
      "cornucopia_okra",
      "cornucopia_onion",
      "cornucopia_oregano",
      "cornucopia_parsley",
      "cornucopia_passionfruit",
      "cornucopia_peanut",
      "cornucopia_perillaleaves",
      "cornucopia_pintobeans",
      "cornucopia_quinoa",
      "cornucopia_redonion",
      "cornucopia_rosemary",
      "cornucopia_sage",
      "cornucopia_shallot",
      "cornucopia_spinach",
      "cornucopia_sugarbeet",
      "cornucopia_sugarcane",
      "cornucopia_sweetpotato",
      "cornucopia_tarragon",
      "cornucopia_thyme",
      "cornucopia_turnip",
      "cornucopia_wasabiroot",
      "cornucopia_watermelon",
      "cornucopia_wormwood",
      "cornucopia_zucchini",
      "cornucopia_beansprouts",
      "cornucopia_cottonboll",
      "cornucopia_cuminseeds",
      "cornucopia_lentils",
      "cornucopia_mustardgreens",
      "cornucopia_sesameseeds",
      "cornucopia_soybeans",
      "cornucopia_turmeric",
      "cornucopia_ube",
      "cornucopia_whitegrape"
    ]
  }
});
