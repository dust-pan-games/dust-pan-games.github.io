// Character object
var character = null;

// Ages array
var ages = [
                new aaieAge("Young"),
                new aaieAge("Adult"),
                new aaieAge("Middle aged"),
                new aaieAge("Seasoned")
            ];

// Races array
var races = [
                new aaieRace("Dwarf"),
                new aaieRace("Elf"),
                new aaieRace("Halfling"),
                new aaieRace("Human"),
                new aaieRace("Minotaur")
            ];

// Classes array
var classes = [
                new aaieClass("Priest"),
                new aaieClass("Thief"),
                new aaieClass("Warrior"),
                new aaieClass("Wizard")
              ];
// Armors array
var armors = [
                new aaieArmor("None"),
                new aaieArmor("Leather armor"),
                new aaieArmor("Banded armor"),
                new aaieArmor("Buckler and quarter plate"),
                new aaieArmor("Wicker armor"),
                new aaieArmor("Chain mail"),
                new aaieArmor("Banded armor with shield"),
                new aaieArmor("Scale mail"),
                new aaieArmor("Half plate"),
                new aaieArmor("Plate mail")
            ];

// Careers array
var careers = 	[
                    new aaieCareer("Ditch digger"),
                    new aaieCareer("Mushroom farmer"),
                    new aaieCareer("Bellows worker"),
                    new aaieCareer("Weapon smith"),
                    new aaieCareer("Ore hunter"),
                    new aaieCareer("Cook"),
                    new aaieCareer("Rat catcher"),
                    new aaieCareer("Carpenter"),
                    new aaieCareer("Arborist"),
                    new aaieCareer("Town guard"),
                    new aaieCareer("Bartender"),
                    new aaieCareer("Tailor's apprentice"),
                    new aaieCareer("Wizard's footman"),
                    new aaieCareer("Page boy"),
                    new aaieCareer("Dairy farmer"),
                    new aaieCareer("Academic page"),
                    new aaieCareer("Portrait painter"),
                    new aaieCareer("Armorer's assistant"),
                    new aaieCareer("Hatter"),
                    new aaieCareer("Boatman"),
                    new aaieCareer("Coachman"),
                    new aaieCareer("Caravan hand"),
                    new aaieCareer("Furniture maker"),
                    new aaieCareer("Vegetable farmer"),
                    new aaieCareer("Hunter"),
                    new aaieCareer("Groom (animal keeper)"),
                    new aaieCareer("Trapper"),
                    new aaieCareer("Mine worker"),
                    new aaieCareer("Gravedigger"),
                    new aaieCareer("Apothecary's assistant"),
                    new aaieCareer("Stone carver"),
                    new aaieCareer("Herdsman"),
                    new aaieCareer("Body guard"),
                    new aaieCareer("Minstrel"),
                    new aaieCareer("Barber"),
                    new aaieCareer("Architect"),
                    new aaieCareer("Navigator"),
                    new aaieCareer("Lesser noble"),
                    new aaieCareer("Rag picker"),
                    new aaieCareer("Noble blood"),
                    new aaieCareer("Engineer"),
                    new aaieCareer("Bowyer"),
                    new aaieCareer("Cooper"),
                    new aaieCareer("Lock smith"),
                    new aaieCareer("Jeweler"),
                    new aaieCareer("Cut purse"),
                    new aaieCareer("Solider"),
                    new aaieCareer("Slave"),
                    new aaieCareer("Honey dipper (sewage collector)"),
                    new aaieCareer("Stage magician"),
                    new aaieCareer("Head butler"),
                    new aaieCareer("Scout"),
                    new aaieCareer("Adviser"),
                    new aaieCareer("Keep marshal"),
                    new aaieCareer("Chemist"),
                    new aaieCareer("Weaver"),
                    new aaieCareer("Fish monger"),
                    new aaieCareer("Explorer"),
                    new aaieCareer("Game warden"),
                    new aaieCareer("Bureaucrat"),
                    new aaieCareer("Assistant slayer"),
                    new aaieCareer("Cartographer"),
                    new aaieCareer("Thieves guild mule"),
                    new aaieCareer("Prostitute"),
                    new aaieCareer("Professional mourner"),
                    new aaieCareer("Royal food tester"),
                    new aaieCareer("Brewer"),
                    new aaieCareer("Book maker"),
                    new aaieCareer("Dentist"),
                    new aaieCareer("Snake oil salesman"),
                    new aaieCareer("Protester"),
                    new aaieCareer("Herbalist"),
                    new aaieCareer("Wizard's test subject"),
                    new aaieCareer("Deck hand"),
                    new aaieCareer("Monk"),
                    new aaieCareer("Dress maker"),
                    new aaieCareer("Gate keeper"),
                    new aaieCareer("Burglar"),
                    new aaieCareer("Apiarist (bee keeper)"),
                    new aaieCareer("Finder"),
                    new aaieCareer("Acrobat"),
                    new aaieCareer("Distiller"),
                    new aaieCareer("Fence"),
                    new aaieCareer("Village idiot"),
                    new aaieCareer("Healer's helper"),
                    new aaieCareer("Barrister's page"),
                    new aaieCareer("Gambler"),
                    new aaieCareer("Clown"),
                    new aaieCareer("Actor"),
                    new aaieCareer("Sapper (explosives!)"),
                    new aaieCareer("Thug"),
                    new aaieCareer("Fortune teller (phony)"),
                    new aaieCareer("Seer"),
                    new aaieCareer("Candle maker"),
                    new aaieCareer("Miller"),
                    new aaieCareer("Spy"),
                    new aaieCareer("Gladiator"),
                    new aaieCareer("Furrier"),
                    new aaieCareer("Knight in training"),
                    new aaieCareer("Wizard's apprentice")
                ];
// Peasant weapons array
var peasantWeapons = [
                        new aaiePeasantWeapon("Fists"),
                        new aaiePeasantWeapon("Sharp stick"),
                        new aaiePeasantWeapon("Brick"),
                        new aaiePeasantWeapon("Rolling pin"),
                        new aaiePeasantWeapon("Chair leg"),
                        new aaiePeasantWeapon("Rake"),
                        new aaiePeasantWeapon("Hat pin"),
                        new aaiePeasantWeapon("Cleaver"),
                        new aaiePeasantWeapon("Large dead fish"),
                        new aaiePeasantWeapon("Frying pan"),
                        new aaiePeasantWeapon("Iron pot"),
                        new aaiePeasantWeapon("Chunk of fire wood"),
                        new aaiePeasantWeapon("Pitch fork"),
                        new aaiePeasantWeapon("Sling shot"),
                        new aaiePeasantWeapon("Log"),
                        new aaiePeasantWeapon("Trash bin lid"),
                        new aaiePeasantWeapon("Fire poker"),
                        new aaiePeasantWeapon("Branding iron"),
                        new aaiePeasantWeapon("Broom"),
                        new aaiePeasantWeapon("Dead chicken")
                    ];

// Light weapons array
var lightWeapons = [
                        new aaieLightWeapon("Dagger"),
                        new aaieLightWeapon("Staff"),
                        new aaieLightWeapon("Whip"),
                        new aaieLightWeapon("Club"),
                        new aaieLightWeapon("Short sword"),
                        new aaieLightWeapon("Rapier"),
                        new aaieLightWeapon("Punch blade"),
                        new aaieLightWeapon("Rock pick"),
                        new aaieLightWeapon("Hand axe"),
                        new aaieLightWeapon("Hand hammer"),
                        new aaieLightWeapon("Quarter staff"),
                        new aaieLightWeapon("Short spear"),
                        new aaieLightWeapon("Sap"),
                        new aaieLightWeapon("Gladius"),
                        new aaieLightWeapon("Metal Baton"),
                        new aaieLightWeapon("Straight Razor"),
                        new aaieLightWeapon("Man catcher"),
                        new aaieLightWeapon("Shield blade"),
                        new aaieLightWeapon("Sai"),
                        new aaieLightWeapon("Chain and spike")
                    ];

// Medium weapons array
var mediumWeapons = [
                        new aaieMediumWeapon("Sabre"),
                        new aaieMediumWeapon("Long sword"),
                        new aaieMediumWeapon("War hammer"),
                        new aaieMediumWeapon("Spear"),
                        new aaieMediumWeapon("Battle axe"),
                        new aaieMediumWeapon("Heavy pole"),
                        new aaieMediumWeapon("Katana"),
                        new aaieMediumWeapon("Pick axe"),
                        new aaieMediumWeapon("Flail"),
                        new aaieMediumWeapon("Mace"),
                        new aaieMediumWeapon("Hatchet"),
                        new aaieMediumWeapon("Scimitar"),
                        new aaieMediumWeapon("Sickle"),
                        new aaieMediumWeapon("Sword cane"),
                        new aaieMediumWeapon("Shield spike"),
                        new aaieMediumWeapon("Light lance"),
                        new aaieMediumWeapon("Ball and chain"),
                        new aaieMediumWeapon("Hand maul"),
                        new aaieMediumWeapon("Falchion"),
                        new aaieMediumWeapon("Katana")
                    ];

// Heavy weapons array
var heavyWeapons = [
                        new aaieHeavyWeapon("Great sword"),
                        new aaieHeavyWeapon("Great axe"),
                        new aaieHeavyWeapon("Net"),
                        new aaieHeavyWeapon("Heavy mace"),
                        new aaieHeavyWeapon("Heavy flail"),
                        new aaieHeavyWeapon("Giant club"),
                        new aaieHeavyWeapon("Pole arm"),
                        new aaieHeavyWeapon("Trident"),
                        new aaieHeavyWeapon("Scythe"),
                        new aaieHeavyWeapon("Great maul"),
                        new aaieHeavyWeapon("Heavy lance"),
                        new aaieHeavyWeapon("Morning star"),
                        new aaieHeavyWeapon("Razor shield"),
                        new aaieHeavyWeapon("Guisarme"),
                        new aaieHeavyWeapon("Halberd"),
                        new aaieHeavyWeapon("Long spear"),
                        new aaieHeavyWeapon("Great club"),
                        new aaieHeavyWeapon("Heavy ball and chain"),
                        new aaieHeavyWeapon("Claymore"),
                        new aaieHeavyWeapon("Nodachi")
                    ];

// Ranged weapons array
var rangedWeapons = [
                        new aaieRangedWeapon("Short bow"),
                        new aaieRangedWeapon("Long bow"),
                        new aaieRangedWeapon("Hand crossbow"),
                        new aaieRangedWeapon("Heavy crossbow"),
                        new aaieRangedWeapon("Sling"),
                        new aaieRangedWeapon("Javelin"),
                        new aaieRangedWeapon("Dart"),
                        new aaieRangedWeapon("Blowgun"),
                        new aaieRangedWeapon("Bolo"),
                        new aaieRangedWeapon("Recurve bow")
                    ];
// Quirks array - Part 1
var quirksPart1 = 	[
                        "seen some things",
                        "been around the world",
                        "a drinking problem",
                        "killed an innocent man",
                        "helped others",
                        "fought many fights",
                        "seen a friend die",
                        "spoken to a ghost",
                        "been shipwrecked",
                        "stolen a horse",
                        "climbed a mountain",
                        "been poor",
                        "seen Hell's gate",
                        "been badly injured",
                        "been very sick",
                        "been alone",
                        "been cursed by a witch",
                        "been on a ship",
                        "been across the sea",
                        "been wrongly accused",
                        "been in the deepest woods",
                        "lived a life of bliss",
                        "broken a vow",
                        "made a blood oath",
                        "been blessed",
                        "been a given a second chance",
                        "been a champion",
                        "been over thrown",
                        "been in the government",
                        "been told secrets",
                        "been told lies",
                        "been cheated",
                        "been left for dead",
                        "been highly trained",
                        "been drafted",
                        "escaped form prison",
                        "been lost for years",
                        "been a lone wanderer",
                        "been mistaken for another",
                        "been brought here as a slave",
                        "been told stories",
                        "been doing research",
                        "been hunting a person",
                        "taken one too many to the head",
                        "been forced to swear loyalty",
                        "been brought back from the dead",
                        "been made whole",
                        "been told crushing news",
                        "been hunting treasure",
                        "been near to your goal",
                        "been on a caravan"
                    ];

// Quirks array - Part 2
var quirksPart2 = 	[
                        "can't sleep at night",
                        "are on the run",
                        "are well known",
                        "are known by the king",
                        "can not go into bars",
                        "are a whiner",
                        "are a pessimist",
                        "live in fear",
                        "have a lot of doubts",
                        "are confident",
                        "are antagonistic",
                        "are charitable",
                        "are in the know",
                        "are cheap",
                        "are free with your money",
                        "are a broken man",
                        "are a healed man",
                        "are a lonely SOB",
                        "are loyal",
                        "are domineering",
                        "are exasperated when others fail",
                        "are frugal",
                        "are critical",
                        "are way uptight",
                        "are antsy",
                        "are anti-social",
                        "are a tree climber",
                        "are a necrophobe (fear dead bodies)",
                        "are obsessed with the dead",
                        "are poetic",
                        "are introspective",
                        "are bemused",
                        "are frustrated",
                        "are scared of magic",
                        "are brave in the face of death",
                        "are a son of a bitch",
                        "are a hero",
                        "are just cruising through life, dude.",
                        "are looking for a place to sleep",
                        "are looking for protection",
                        "are able to make a living with out this adventurer crap",
                        "are looking for adventure",
                        "are hoping to go out in a blaze of glory",
                        "think you are big shot",
                        "are ready to snap at any second",
                        "are looking for home, a true home",
                        "are a troublemaker",
                        "have a sense of dread.",
                        "are unlucky",
                        "are hapless",
                        "are lost"
                    ];

// Quirks array - Part 3
var quirksPart3 = 	[
                        "for glory",
                        "for gold",
                        "for your god",
                        "for the sake of greed",
                        "to find your mother",
                        "to find your father",
                        "to find your brother",
                        "to find your sister",
                        "to pay a debt",
                        "to get out of debt",
                        "to fulfill a promise",
                        "out of fear",
                        "out of pride",
                        "in the name of your god",
                        "to defy the gods",
                        "for the challenge",
                        "so you don't starve",
                        "to fulfill a prophecy",
                        "to break a prophecy",
                        "to get paid",
                        "to avoid a responsibility",
                        "to avoid the law",
                        "to find your spouse",
                        "to get away from your spouse",
                        "to find a passion",
                        "to establish credibility",
                        "as a new job",
                        "because you are hunted",
                        "for revenge",
                        "because it is expected of you",
                        "to be the hero",
                        "to be the villain",
                        "to kill a killer",
                        "to strike it rich, just once",
                        "for knowledge",
                        "to prove them wrong",
                        "to prove you're right",
                        "because you no longer welcome at home",
                        "for the excitement",
                        "to see the land",
                        "to meet new people",
                        "for that one big prize",
                        "to escape your bonds",
                        "to attract followers",
                        "to learn new things",
                        "to forget your past",
                        "to truly live!",
                        "to hasten your own death",
                        "to destroy your foes",
                        "to end this endless boredom",
                        "to cleanse your soul"
                    ];
var underworldNickNames = 	[
                                "Festering",
                                "Bleak",
                                "Crushing",
                                "Vile",
                                "Dark",
                                "Drunk",
                                "Murderous",
                                "Crazy",
                                "Ugly",
                                "Easy",
                                "Broke",
                                "Shifty",
                                "Lecherous",
                                "Evil",
                                "Crafty",
                                "Violent",
                                "Poor",
                                "Cut purse",
                                "Thief",
                                "Notorious"
                            ];

var underworldNames = 		[
                                "Pete",
                                "Joe",
                                "Mike",
                                "Grul",
                                "Kim",
                                "Gale",
                                "Bozz",
                                "Tom",
                                "Sasha",
                                "Niles",
                                "Gilmli",
                                "Seline",
                                "Cal",
                                "Vic",
                                "Bronson",
                                "Jake",
                                "Anne",
                                "Dick",
                                "Harold",
                                "Ted"
                            ];

var underworldFacts = 		[
                                "robbed a noble",
                                "fences rare items",
                                "searches tombs",
                                "works for a noble",
                                "walks the streets alone",
                                "works for a wizard",
                                "is a skilled swordsperson",
                                "has found a map",
                                "was almost killed recently",
                                "comes from a faraway land",
                                "hears many rumors",
                                "is sleeping with a noble's son or daughter",
                                "works in the sewers",
                                "works in a bar, knows everybody",
                                "robs houses",
                                "knows secret paths",
                                "has seen something he / she should not have",
                                "has the hook up",
                                "is a drunk",
                                "owns a mysterious book"
                            ];

var commonNames = 	[
                        "Alfred",
                        "Wilford",
                        "Gapen",
                        "Marc",
                        "Mack",
                        "Galen",
                        "Lars",
                        "Shelien",
                        "Marel",
                        "Phin",
                        "Davide",
                        "Vincien",
                        "Carter",
                        "Brian",
                        "Neone",
                        "Kathrine",
                        "Veronica",
                        "Bart",
                        "Holgrim",
                        "Victor"
                    ];

var commonJobs = 	[
                        "baker",
                        "cooper",
                        "farmer",
                        "apprentice",
                        "bartender",
                        "brewer",
                        "professor",
                        "herdsman",
                        "carpenter",
                        "painter",
                        "blacksmith",
                        "candlestick maker",
                        "mortician",
                        "grapple",
                        "guard",
                        "maid",
                        "librarian",
                        "boyer",
                        "dairy farmer",
                        "tax collector"
                    ];

var commonFacts = 	[
                        "owes money",
                        "has a great debt owed to them",
                        "hides a great fortune",
                        "knows a dark rumor",
                        "has recently been injured",
                        "carries an old scar",
                        "is leaving their spouse",
                        "has a way with animals",
                        "once saw a dragon",
                        "has a map",
                        "found a mysterious key in the basement",
                        "is a murderer",
                        "loves to party",
                        "is secretly a drunk",
                        "has attracted the wrath of a god",
                        "has a great blessing",
                        "is secretly trying to learn magic",
                        "used to be an adventurer",
                        "is a liar",
                        "can be trusted with secrets"
                    ];

var nobleTitles = 	[
                        "Lord",
                        "Lady",
                        "Governor",
                        "Governess",
                        "Duke",
                        "High Vassal",
                        "Sir",
                        "King",
                        "Queen",
                        "His highness",
                        "Her highness",
                        "Enlightened one",
                        "Baron",
                        "Baroness",
                        "Prince",
                        "Princess",
                        "Bishop",
                        "Dame",
                        "Earl",
                        "Viscount"
                    ];

var nobleNames = 	[
                        "Patroochi",
                        "Chesterwood",
                        "Wombly",
                        "Blusterwood",
                        "Usher",
                        "Ulster",
                        "Coldor",
                        "Nethrim",
                        "Vlidor",
                        "Warbucks",
                        "Masterson",
                        "Hallidor",
                        "Chumcheeks",
                        "Cheadarwuf",
                        "Wufgar",
                        "Thoridan",
                        "Grispann",
                        "Peach",
                        "Hillerton",
                        "Grunndar"
                    ];

var nobleFroms =	[
                        "Still Water",
                        "Green Glen",
                        "Star Ford",
                        "Cloud Wood",
                        "Mirk Hills",
                        "Caldron Peak",
                        "Hills Dale",
                        "Center Ubrial",
                        "The Fjord",
                        "The Glass Catherdral",
                        "The Blessed Tomb",
                        "The Dark Forest",
                        "The Highlands",
                        "The Islands",
                        "Castle Peaks",
                        "The Under City",
                        "The North Lands",
                        "Hidden Grove",
                        "Star-fall Valley",
                        "Gravesberg"
                    ];

var nobleFacts =	[
                        "is very Rich",
                        "has castle in disrepair",
                        "was recently robbed",
                        "is about to die of old age",
                        "explores caves",
                        "owns ships",
                        "wants to assassinate another",
                        "is target of assassins",
                        "needs a spy",
                        "likes prostitutes",
                        "owns pricey horses",
                        "is broke, really broke",
                        "is undead",
                        "is a priest",
                        "worships demons",
                        "is very Jealous",
                        "wants to go to war",
                        "wants to work towards peace",
                        "was a great warrior",
                        "has a dark secret"
                    ];

var dietyNames1 = 	[
                        "A",
                        "Ar",
                        "Bree",
                        "Grve",
                        "Har",
                        "Brith",
                        "Biuth",
                        "Bubba",
                        "Wo",
                        "Lum",
                        "Cho",
                        "Bon",
                        "Lo'",
                        "Sando",
                        "B",
                        "Valuth",
                        "Zu",
                        "Ra'",
                        "asha",
                        "atem",
                        "Krieg",
                        "Kis",
                        "Heph",
                        "Gre",
                        "Cuba",
                        "Salan",
                        "Voc",
                        "Savri",
                        "Isht",
                        "Oka",
                        "Brim",
                        "Drun",
                        "Sorek",
                        "Ka",
                        "Ot",
                        "Pak",
                        "Santh",
                        "Sath",
                        "Yu",
                        "Yoth"
                    ];

var dietyNames2 = 	[
                        "olina",
                        "trinus",
                        "thini",
                        "Mc'lind",
                        "enno",
                        "-goth",
                        "rina",
                        "O'clena",
                        "uresa",
                        "ad",
                        "tianus",
                        "scott",
                        "ar",
                        "Ciento",
                        "trinth",
                        "dolin",
                        "ian",
                        "zin",
                        "atemm",
                        "asha",
                        "O'lenn",
                        "'Gea",
                        "retta",
                        "shoit",
                        "Otheth",
                        "Hothep",
                        "tta",
                        "Tharr",
                        "ola",
                        "laroon",
                        "ribbi",
                        "a-Peth",
                        "ah-Dred",
                        "lantiera",
                        "loaha",
                        "druss",
                        "k-unl",
                        "to",
                        "kilrinas",
                        "sugroth",
                        "drizull"
                    ];

var dietyTitles1 = 	[
                        "The Father",
                        "The Mother",
                        "The Destroyer",
                        "The Devourer",
                        "The Recorder",
                        "The Singer",
                        "The Brother",
                        "The Teller",
                        "The Messenger",
                        "The Guardian",
                        "The Trickster",
                        "The Titan",
                        "The Champion",
                        "The Bringer",
                        "The Scion",
                        "The Builder",
                        "The Fist",
                        "The Knight",
                        "The Spirit",
                        "The Wolf",
                        "The Dragon",
                        "The Paragon",
                        "The Ghost",
                        "The Master",
                        "The Renegade",
                        "The Crusader",
                        "The Patriarch",
                        "The Matriarch",
                        "Child",
                        "The Summoner",
                        "The Judge",
                        "The Sword",
                        "The Wraith",
                        "The Bringer",
                        "The Sister",
                        "The Maintainer",
                        "The Farmer",
                        "The Reaper",
                        "The Keeper",
                        "The Demon",
                        "The Echo"
                    ];

var dietyTitles2 = 	[
                        "of Pain",
                        "of the Forests",
                        "Who Weeps",
                        "of Skulls",
                        "of Phase Ball",
                        "of the Sky",
                        "of Beasts",
                        "Who Walks",
                        "Who Visits",
                        "Who Reams",
                        "of Metal",
                        "of Flame",
                        "Who Burns",
                        "of Sponge",
                        "of Lightning",
                        "of Animals",
                        "of Good Harvests",
                        "of the Sea",
                        "Who Watches",
                        "Who Speaks",
                        "Who Fails",
                        "Who Creeps",
                        "Who Slithers",
                        "Who Murders",
                        "of Funk",
                        "of the Sun",
                        "of Battle",
                        "of Shadows",
                        "of Warriors",
                        "of Thieves",
                        "Who Bleeds",
                        "of Smoke",
                        "of Mysteries",
                        "of Gems",
                        "Who Brings Fear",
                        "of the Harvest",
                        "of Wealth",
                        "of the Void",
                        "of Hell"
                    ];

var mundaneEquipment = 	[
                            "50 feet of rope",
                            "empty bottle",
                            "A bottle of whiskey",
                            "A bucket",
                            "15 pounds of chicken feed",
                            "A jar of bacon grease",
                            "A compass",
                            "A piece of chalk",
                            "A warm sleeping bag",
                            "A dog collar with chain",
                            "A 10 foot rope ladder",
                            "A folding fan",
                            "A cow bell",
                            "candle",
                            "A hefty back pack",
                            "potato",
                            "A small bird in a sturdy cage",
                            "Bagpipes",
                            "An inkwell with paper",
                            "A tinker box",
                            "torch",
                            "2 pounds of dry fish",
                            "A fishing pole",
                            "A jar of lamp oil",
                            "extra bowstring",
                            "dry sock",
                            "Clean underwear, because you never know",
                            "person tent",
                            "pound bag of loose dirt",
                            "An ivory figurine of your god",
                            "A grooming razor",
                            "A ring sizing set",
                            "A can of sardines",
                            "days worth of dry rations",
                            "A carpenters saw",
                            "A 1 foot long iron bar",
                            "A live rooster",
                            "A gem viewing loop",
                            "A book of human anatomy",
                            "A folded bed sheet",
                            "A small fishing net",
                            "A curling stone",
                            "A 1 gallon jug of moon shine",
                            "A large pot of pepper",
                            "A listening horn",
                            "A deck of cards",
                            "A large loaf of bread",
                            "A sweat band (may be of justice)",
                            "Crampons",
                            "Crayons, all colors",
                            "A blank book",
                            "A book of Elven terms",
                            "A bucket of red paint",
                            "Dress shoes",
                            "A broom",
                            "A sturdy lock and 3 feet of chain",
                            "A pipe and some tobacco",
                            "A thick fur coat",
                            "A shovel",
                            "Your half filled out will",
                            "A pound of dry plaster",
                            "pound bag of rice",
                            "A straw sun hat",
                            "A wine skin full of wine",
                            "A one gallon jug of maple syrup",
                            "Fire resistant gloves",
                            "A lantern",
                            "A down pillow",
                            "A map of a nearby area",
                            "A news boy's head, stuffed with oily rags",
                            "A small clock",
                            "pound of jerky",
                            "A grappling hook (no rope)",
                            "A whistle (general noise)",
                            "A bird call",
                            "Signet ring with wax",
                            "A half pound of honey comb",
                            "A small mirror",
                            "A belt with pouches",
                            "Crow bar (small)",
                            "A glass cutter",
                            "A set of small files",
                            "A cheap ring that looks valuable",
                            "Slutty perfume",
                            "A bar of soap",
                            "100 feet of twine",
                            "A large jar of pickles",
                            "Blackening grease",
                            "A small scale",
                            "A bottle of very fine red wine",
                            "A bottle of dank, nasty wine",
                            "iron spike",
                            "A book of poetry",
                            "A one pound bag of flour",
                            "A long stick",
                            "A bag of marbles",
                            "A rolled up sleeping mat",
                            "A travel chess set",
                            "A yard of canvas",
                            "Whet stone"
                        ];

var spellDescriptors  = [
                            "Flaming",
                            "Paralyzing",
                            "Neutralizing",
                            "Killing",
                            "Freezing",
                            "Clutching",
                            "Cutting",
                            "Wounding",
                            "Terrorizing",
                            "Ghostly",
                            "Trapping",
                            "Shrinking",
                            "Telekinetic",
                            "Furious",
                            "Hairy",
                            "Suffocating",
                            "False",
                            "Darkening",
                            "Talking",
                            "Illusion",
                            "Growing",
                            "Animated",
                            "Rising",
                            "Hovering",
                            "Gaseous",
                            "Blackening",
                            "Polymorphing",
                            "Eviscerating",
                            "Blasting",
                            "Distancing",
                            "Soul Stealing",
                            "Narcotic",
                            "Melting",
                            "Soul",
                            "Unseen",
                            "Venomous",
                            "Voracious",
                            "Liquid",
                            "Ghastly",
                            "Hissing",
                            "Glowing",
                            "Sudden",
                            "Summoning",
                            "Corrosive",
                            "Ripping",
                            "Demonic",
                            "Angelic",
                            "Dragon",
                            "Whipping",
                            "Thundering",
                            "Bloodletting",
                            "Fist",
                            "Finger",
                            "Wind",
                            "Wave",
                            "Burst",
                            "Beam",
                            "Splash",
                            "Word",
                            "Torch",
                            "Creature",
                            "Cloud",
                            "Weapon",
                            "Wings",
                            "Seeds",
                            "Coils",
                            "Webs",
                            "Serpent",
                            "Cage",
                            "Irritant",
                            "Pox",
                            "Boils",
                            "Thorns",
                            "Blades",
                            "Shell",
                            "Armor",
                            "Weakness",
                            "Strength",
                            "Growth",
                            "Communication",
                            "Sight",
                            "Corpse",
                            "Flames",
                            "Envelope",
                            "Light",
                            "Jar",
                            "Bridge",
                            "Lance",
                            "Skull",
                            "Skeleton",
                            "Tentacles",
                            "Servant",
                            "Self",
                            "Otherness",
                            "Seeds",
                            "Encrustation",
                            "Fixative",
                            "Rune",
                            "Net",
                            "Evocation",
                            "Dust"
                        ];

/*
// None of this used for spell generation anymore.
// Leaving it in just in case.
var spellDescriptors1 = [
                            "Flaming",
                            "Paralyzing",
                            "Neutralizing",
                            "Killing",
                            "Freezing",
                            "Clutching",
                            "Cutting",
                            "Wounding",
                            "Terrorizing",
                            "Ghostly",
                            "Trapping",
                            "Shrinking",
                            "Telekinetic",
                            "Furious",
                            "Hairy",
                            "Suffocating",
                            "False",
                            "Darkening",
                            "Talking",
                            "Illusion",
                            "Growing",
                            "Animated",
                            "Rising",
                            "Hovering",
                            "Gaseous",
                            "Blackening",
                            "Polymorphing",
                            "Eviscerating",
                            "Blasting",
                            "Distancing",
                            "Soul Stealing",
                            "Narcotic",
                            "Melting",
                            "Soul",
                            "Unseen",
                            "Venomous",
                            "Voracious",
                            "Liquid",
                            "Ghastly",
                            "Hissing",
                            "Glowing",
                            "Sudden",
                            "Summoning",
                            "Corrosive",
                            "Ripping",
                            "Demonic",
                            "Angelic",
                            "Dragon",
                            "Whipping",
                            "Thundering",
                            "Bloodletting"
                        ];

var spellDescriptors2 = [
                            "Fist",
                            "Finger",
                            "Wind",
                            "Wave",
                            "Burst",
                            "Beam",
                            "Splash",
                            "Word",
                            "Torch",
                            "Creature",
                            "Cloud",
                            "Weapon",
                            "Wings",
                            "Seeds",
                            "Coils",
                            "Webs",
                            "Serpent",
                            "Cage",
                            "Irritant",
                            "Pox",
                            "Boils",
                            "Thorns",
                            "Blades",
                            "Shell",
                            "Armor",
                            "Weakness",
                            "Strength",
                            "Growth",
                            "Communication",
                            "Sight",
                            "Corpse",
                            "Flames",
                            "Envelope",
                            "Light",
                            "Jar",
                            "Bridge",
                            "Lance",
                            "Skull",
                            "Skeleton",
                            "Tentacles",
                            "Servant",
                            "Self",
                            "Otherness",
                            "Seeds",
                            "Encrustation",
                            "Fixative",
                            "Rune",
                            "Net",
                            "Evocation",
                            "Dust"
                        ];

var spellTypes = 		[
                            "Offensive",
                            "Defensive",
                            "Utility",
                            "Summon"
                        ];

var spellEffectDice = 	[
                            "1d4",
                            "1d6",
                            "1d8",
                            "1d10",
                            "1d12",
                            "1d4 per level",
                            "1d6 per level"
                        ];

var spellEffects = 		[
                            "Health",
                            "Armor",
                            "Movement",
                            "Location",
                            "Area of effect",
                            "objects",
                            "attributes",
                            "1 target",
                            "environment"
                        ];

var spellCosts = 		[
                            "0 / 1d6",
                            "0 / 1d10",
                            "0 / 1d12",
                            "1d12 / 0",
                            "1d6 / 1d4",
                            "1d6 / 1d6",
                            "1d6 / 1d8",
                            "1d8 / 1d6",
                            "1d10 / 1d4",
                            "1d10 / 1d6",
                            "1d12 / 1d4",
                            "1d12 / 1d6"
                        ];
*/
var dwarfAbilities = 	[
                            "Detect slopes (Knowledge)",
                            "Determine safety of passage (Knowledge)",
                            "Blacksmith (Academics)",
                            "Detect secret door (Knowledge)",
                            "Detect new construction (Knowledge)",
                            "-2 difficulty hitting any goblinoid",
                            "+2 armor score vs giants",
                            "Brewer (Academics)",
                            "Infravision (You can see heat)",
                            "Dislikes elves"
                        ];

var elfAbilities = 		[
                            "Herbalism (Knowledge)",
                            "Far vision (You can see a long way)",
                            "Woodland Lore (Knowledge)",
                            "Set snares (Academics)",
                            "Infravision (You can see heat)",
                            "-2 difficulty hitting with bows",
                            "+2 armor vs ranged attacks",
                            "Extra running speed",
                            "Immune to undead paralysis attacks",
                            "Dislikes dwarves"
                        ];

var halflingAbilities = [
                            "-2 to hit with light weapons (if skilled)",
                            "Can't swim",
                            "Public performance (Attractiveness)",
                            "Know riddles (Knowledge)",
                            "Farming (Knowledge)",
                            "-2 difficulty hitting any giant",
                            "+4 armor score vs giants",
                            "Cooking (Academics)",
                            "Infravision (You can see heat)",
                            "Dislikes horses"
                        ];

var humanAbilities = 	[
                            "Urban (Knowledge)",
                            "Desert survival (Knowledge)",
                            "Jungle survival (Knowledge)",
                            "Woodland survival (Knowledge)",
                            "Artic survival (Knowledge)",
                            "Mountaineering (Knowledge)",
                            "Horsemanship (Athleticism)",
                            "Mounted Combat: Horse (Athleticism)",
                            "Restless spirit (Drive to see new places)",
                            "Phase ball player (Athletics)"
                        ];

var minotaurAbilities = [
                            "Physical labor (Brawn)",
                            "Direction sense (Knowledge)",
                            "Dark vision (Can see in low light)",
                            "Underdark lore (Knowledge)",
                            "Theology (Academics)",
                            "+1 armor score (Thick skin)",
                            "-1/2 damage from cold attacks (fur)",
                            "Beat 12 on MD20 to avoid any stun (Thick skull)",
                            "+2 armor vs grapples (You're BIG)",
                            "Drinking problem: Milk"
                        ];

var priestAbilities = 	[
                            new aaieAbility("Healing prayer"),
                            new aaieAbility("Smite"),
                            new aaieAbility("Effect undead"),
                            new aaieAbility("Detect evil / good"),
                            new aaieAbility("Detect magic"),
                            new aaieAbility("Cure poison"),
                            new aaieAbility("Create water"),
                            new aaieAbility("Bless"),
                            new aaieAbility("Holy weapon"),
                            new aaieAbility("Light"),
                            new aaieAbility("Muscle of your lord"),
                            new aaieAbility("Unseen hand of the holy")
                        ];

var thiefAbilities = 	[
                            new aaieAbility("Assassin's strike"),
                            new aaieAbility("Open locks"),
                            new aaieAbility("Pick pocket"),
                            new aaieAbility("Climb walls"),
                            new aaieAbility("Calling in a ticket"),
                            new aaieAbility("Manipulate"),
                            new aaieAbility("Find / remove traps"),
                            new aaieAbility("Hide in shadows"),
                            new aaieAbility("Move silently"),
                            new aaieAbility("Elusive target"),
                            new aaieAbility("Thug life"),
                            new aaieAbility("Even the gods are thieves")
                        ];

var warriorAbilities = 	[
                            new aaieAbility("Warrior strike"),
                            new aaieAbility("Flourish"),
                            new aaieAbility("BASH"),
                            new aaieAbility("Bull rush"),
                            new aaieAbility("Shout"),
                            new aaieAbility("Flurry of attacks"),
                            new aaieAbility("I WILL kill you"),
                            new aaieAbility("Cleave"),
                            new aaieAbility("Brawler"),
                            new aaieAbility("Grapple"),
                            new aaieAbility("Battle mage"),
                            new aaieAbility("Paladin")
                        ];

var wizardAbilities = 	[
                            new aaieAbility("General casting"),
                            new aaieAbility("Offensive caster"),
                            new aaieAbility("Smooth casting"),
                            new aaieAbility("Sorceror"),
                            new aaieAbility("Elemental"),
                            new aaieAbility("Demonology"),
                            new aaieAbility("Defensive caster"),
                            new aaieAbility("Glass cannon"),
                            new aaieAbility("Shamanic caster"),
                            new aaieAbility("Necromancer"),
                            new aaieAbility("Shadow mage"),
                            new aaieAbility("War mage")
                        ];

var mutations = 		[
                            "Tail 1",
                            "Extra eye",
                            "Shell",
                            "Mucus",
                            "Spines",
                            "Odor",
                            "Skin Color",
                            "Extra arm",
                            "Feathers",
                            "Boils",
                            "Heat",
                            "Tentacles",
                            "The Stranger",
                            "Crab claw",
                            "Hairy Beast",
                            "What Up Goat",
                            "Plant like",
                            "Duck bill",
                            "Digits",
                            "Jelly",
                            "Daily growth",
                            "Fused",
                            "Sudden age",
                            "Supra brain",
                            "Peck Zillia",
                            "Lumpy",
                            "Brillo",
                            "Wooden bones",
                            "Mental block",
                            "Droop",
                            "Proboscus",
                            "Evil touch",
                            "Aura",
                            "Etching",
                            "Porcine",
                            "Language",
                            "Wild magic aura",
                            "Sunken",
                            "Dirt",
                            "Internal twin",
                            "Homunculus",
                            "Solar sensitive",
                            "Skunk",
                            "Voice over",
                            "Bark skin",
                            "Lobster claw",
                            "Bat nose",
                            "Rubber face",
                            "Insatiable",
                            "Ear wax",
                            "Spider legs",
                            "Sword arm",
                            "Thin skinned",
                            "Tail 2",
                            "Beardsman",
                            "The Dragon",
                            "Really long fingers",
                            "Acne",
                            "Insect reproduction",
                            "Weakness",
                            "Gills",
                            "Melter",
                            "Compound eyes",
                            "Giraffe neck",
                            "Strange sweat",
                            "Limited psionics",
                            "Golemic",
                            "Second brain",
                            "Squid like",
                            "Membranes",
                            "Ever growing teeth",
                            "Horse fiend",
                            "Angelic",
                            "Demonic",
                            "Roving eyes",
                            "Cold blooded",
                            "Floppy jowls",
                            "Tusks",
                            "Smoke",
                            "Locked spine",
                            "Lip-less",
                            "Subvocal harmonics",
                            "Fangs",
                            "Cracked flesh",
                            "Huge",
                            "Cracked flesh",
                            "Small wings",
                            "Glass bones",
                            "Glow",
                            "Dorsal fin",
                            "Red skin",
                            "Albino",
                            "Closed system",
                            "Spider eyes",
                            "Very dry",
                            "Double-jointed",
                            "Scales",
                            "Super hard finger nails",
                            "Two faces",
                            "Glue skin",
                            "Pudding"
                        ];
function generate()
{
    character = new aaieCharacter();
    generateAge();
    generateRace();
    generateAttributes();
    generateHistory();
    generateArmor();
    generateConnections();
    generateClass();
    generateWeapons();
    generateEquipment();
    generateAbilities();
    generatePersonality();
    generateDiety();
    generateMutations();
    statCheck();
    generateSpells();
    generateOutput();
}

function generateAge()
{
    character.age = Math.floor(Math.random() * ages.length);
}

function generateRace()
{
    character.race = Math.floor(Math.random() * races.length);
}

function generateAttributes()
{
    for(var b = 0; b < races[character.race].brawnDice; b++)
    {
        character.brawn += Math.floor(Math.random() * races[character.race].brawnSides) + 1;
    }

    for(var a = 0; a < races[character.race].athleticismDice; a++)
    {
        character.athleticism += Math.floor(Math.random() * races[character.race].athleticismSides) + 1;
    }

    for(var r = 0; r < races[character.race].resolveDice; r++)
    {
        character.resolve += Math.floor(Math.random() * races[character.race].resolveSides) + 1;
    }

    for(var ac = 0; ac < races[character.race].academicsSides; ac++)
    {
        character.academics += Math.floor(Math.random() * races[character.race].academicsDice) + 1;
    }

    for(var k = 0; k < races[character.race].knowledgeSides; k++)
    {
        character.knowledge += Math.floor(Math.random() * races[character.race].knowledgeDice) + 1;
    }

    for(var f = 0; f < races[character.race].focusSides; f++)
    {
        character.focus += Math.floor(Math.random() * races[character.race].focusDice) + 1;
    }

    for(var l = 0; l < races[character.race].leadershipSides; l++)
    {
        character.leadership += Math.floor(Math.random() * races[character.race].leadershipDice) + 1;
    }

    for(var at = 0; at < races[character.race].attractivenessSides; at++)
    {
        character.attractiveness += Math.floor(Math.random() * races[character.race].attractivenessDice) + 1;
    }

    for(var m = 0; m < races[character.race].mysticismSides; m++)
    {
        character.mysticism += Math.floor(Math.random() * races[character.race].mysticismDice) + 1;
    }

    character.resolvePool = character.resolve * 5 + ages[character.age].resolvePool;
    character.focusPool = character.focus * 5;
    character.mysticismPool = character.mysticism * 5;
}

function generateHistory()
{
    for(var c = 0; c < ages[character.age].careers; c++)
    {
        character.careers.push(Math.floor(Math.random() * careers.length));
    }

    for(var i = 0; i < character.careers.length; i++)
    {
        switch(careers[character.careers[i]].name)
        {
            case "Ditch digger":
                character.resolvePool += 5;
                character.weaponSkills.push("Medium");
                break;
            case "Mushroom farmer":
                character.skills.push("Herbalism");
                character.quirks.push("As a former mushroom farmer, you still smell funny sometimes");
                break;
            case "Bellows worker":
                character.resolvePool += 5;
                break;
            case "Weapon smith":
                character.skills.push("Basic weapon-smith");
                character.weaponSkills.push("Light");
                character.weaponSkills.push("Medium");
                break;
            case "Ore hunter":
                character.skills.push("Underground direction sense");
                character.skills.push("Underground lore");
                character.weaponSkills.push("Light");
                break;
            case "Cook":
                character.skills.push("Cooking");
                break;
            case "Rat catcher":
                character.skills.push("Vermin killing");
                character.weaponSkills.push("Light");
                break;
            case "Carpenter":
                character.focusPool += 5;
                character.weaponSkills.push("Light");
                break;
            case "Arborist":
                character.skills.push("Basic nature lore");
                break;
            case "Town guard":
                character.skills.push("Intimidate");
                character.weaponSkills.push("Medium");
                break;
            case "Bartender":
                character.skills.push("Local history lore");
                character.skills.push("Lore connections");
                character.skills.push("Lore rumors");
                break;
            case "Tailor's apprentice":
                var tailorResult = Math.floor(Math.random() * 6) + 1;

                if(tailorResult < 4)
                {
                    character.skills.push("Etiquette lore (Noble)");
                }
                else
                {
                    character.skills.push("Etiquette lore (Commoner)");
                }
                break;
            case "Wizard's footman":
                character.skills.push("Research");
                character.weaponSkills.push("Light");
                character.connectionTypes.push("Noble");
                break;
            case "Page boy":
                character.connectionTypes.push("Noble");
                character.connectionTypes.push("Common");
                character.weaponSkills.push("Light");
                break;
            case "Dairy farmer":
                character.skills.push("Animal lore (cattle)");
                break;
            case "Academic page":
                character.skills.push("Research");
                break;
            case "Portrait painter":
                character.connectionTypes.push("Noble");
                break;
            case "Armorer's assistant":
                character.skills.push("Armorer");
                break;
            case "Hatter":
                character.connectionTypes.push("Noble");
                break;
            case "Boatman":
                character.skills.push("Navigation");
                break;
            case "Coachman":
                var coachmanResult = Math.floor(Math.random() * 4) + 1;

                if(coachmanResult == 1)
                {
                    character.skills.push("Animal handling (Horse)");
                }
                else if(coachmanResult == 2)
                {
                    character.skills.push("Animal handling (Mammoth)");
                }
                else if(coachmanResult == 3)
                {
                    character.skills.push("Animal handling (Camel)");
                }
                else
                {
                    character.skills.push("Animal handling (Elephant)");
                }

                character.weaponSkills.push("Light");
                break;
            case "Caravan hand":
                var caravanResult = Math.floor(Math.random() * 4) + 1;

                if(caravanResult == 1)
                {
                    character.skills.push("Survival (Forest)");
                }
                else if(caravanResult == 2)
                {
                    character.skills.push("Survival (Desert)");
                }
                else if(caravanResult == 3)
                {
                    character.skills.push("Survival (Jungle)");
                }
                else
                {
                    character.skills.push("Survival (Artic)");
                }
                break;
            case "Furniture maker":
                character.skills.push("Bartering");
                break;
            case "Vegetable farmer":
                character.skills.push("Nature lore");
                break;
            case "Hunter":
                var hunterResult = Math.floor(Math.random() * 6) + 1;

                if(hunterResult == 1)
                {
                    character.skills.push("Big game hunting");
                    character.skills.push("Big game lore");
                }
                else if(hunterResult == 2)
                {
                    character.skills.push("Small game hunting");
                    character.skills.push("Small game lore");
                }
                else if(hunterResult == 3)
                {
                    character.skills.push("Ghost hunting");
                    character.skills.push("Ghost lore");
                }
                else if(hunterResult == 4)
                {
                    character.skills.push("Vermin hunting");
                    character.skills.push("Vermin lore");
                }
                else if(hunterResult == 5)
                {
                    character.skills.push("Human hunting");
                    character.skills.push("Human lore");
                }
                else
                {
                    var legendaryResult = Math.floor(Math.random() * 4) + 1;

                    if(legendaryResult == 1)
                    {
                        character.skills.push("Dragon hunting");
                        character.skills.push("Dragon lore");
                    }
                    else if(legendaryResult == 2)
                    {
                        character.skills.push("Elemental hunting");
                        character.skills.push("Elemental lore");
                    }
                    else if(legendaryResult == 3)
                    {
                        character.skills.push("Yeti hunting");
                        character.skills.push("Yeti lore");
                    }
                    else
                    {
                        character.skills.push("Fairy hunting");
                        character.skills.push("Fairy lore");
                    }
                }

                character.weaponSkills.push("Heavy");
                break;
            case "Groom (animal keeper)":
                var groomResult = Math.floor(Math.random() * 6) + 1;

                if(groomResult == 1)
                {
                    character.skills.push("Animal handling (Mammoth)");
                }
                else if(groomResult == 2)
                {
                    character.skills.push("Animal handling (Horse)");
                }
                else if(groomResult == 3)
                {
                    character.skills.push("Animal handling (Sacred cows)");
                }
                else if(groomResult == 4)
                {
                    character.skills.push("Animal handling (Bears)");
                }
                else if(groomResult == 5)
                {
                    character.skills.push("Animal handling (Giant insects)");
                }
                else
                {
                    character.skills.push("Animal handling (Dragon)");
                }
                break;
            case "Trapper":
                character.skills.push("Set snare");
                break;
            case "Mine worker":
                character.skills.push("Underground lore");
                break;
            case "Gravedigger":
                character.connectionTypes.push("Underworld");
                break;
            case "Apothecary?s assistant":
                character.skills.push("Identify potion");
                break;
            case "Stone carver":
                character.resolvePool += 5;
                break;
            case "Herdsman":
                character.skills.push("Animal empathy");
                break;
            case "Body guard":
                character.skills.push("Brawling");
                character.skills.push("Intimidate");
                character.weaponSkills.push("Light");
                break;
            case "Minstrel":
                character.skills.push("Entertain");
                break;
            case "Barber":
                character.connectionTypes.push("Common");
                break;
            case "Architect":
                character.focusPool += 5;
                break;
            case "Navigator":
                character.skills.push("Navigation");
                break;
            case "Lesser noble":
                var lesserNobleResult = Math.floor(Math.random() * 4) + 1;

                for(var ln = 0; ln < lesserNobleResult; ln++)
                {
                    character.connectionTypes.push("Noble");
                }

                character.skills.push("Wealth");
                break;
            case "Rag picker":
                character.skills.push("Scavenge");
                break;
            case "Noble blood":
                character.skills.push("Etiquette");
                character.skills.push("Wealth");
                character.weaponSkills.push("Medium");
                break;
            case "Engineer":
                character.skills.push("Engineering");
                character.skills.push("Negotiations");
                break;
            case "Bowyer":
                character.weaponSkills.push("Ranged");
                break;
            case "Cooper":
                character.resolvePool += 5;
                break;
            case "Lock smith":
                character.skills.push("Lock picking");
                break;
            case "Jeweler":
                character.focusPool += 5;
                character.skills.push("Appraisal");
                break;
            case "Cut purse":
                character.skills.push("Pick pocket");
                break;
            case "Solider":
                var soldierResult = Math.floor(Math.random() * 6) + 1;

                if(soldierResult == 1)
                {
                    character.weaponSkills.push("Light");
                }
                else if(soldierResult == 2)
                {
                    character.weaponSkills.push("Medium");
                }
                else if(soldierResult == 3)
                {
                    character.weaponSkills.push("Heavy");
                }
                else if(soldierResult == 4)
                {
                    character.weaponSkills.push("Ranged");
                }
                else if(soldierResult == 5)
                {
                    character.skills.push("Siege");
                }
                else
                {
                    character.skills.push("Mounted combat");
                }
                break;
            case "Slave":
                character.resolvePool += 10;
                character.skills.push("Brawling");
                break;
            case "Honey dipper (sewage collector)":
                character.resolvePool += 5;
                character.skills.push("Scavenge");
                break;
            case "Stage magician":
                character.skills.push("Entertain");
                character.skills.push("Hedge magic");
                break;
            case "Head butler":
                character.skills.push("Etiquette");
                break;
            case "Scout":
                character.weaponSkills.push("Medium");
                character.skills.push("Nature lore");
                character.skills.push("Tracking");
                break;
            case "Adviser":
                character.skills.push("Negotiations");
                break;
            case "Keep marshal":
                character.skills.push("Intimidate");
                break;
            case "Chemist":
                character.mutationCount++;
                character.skills.push("Elemental lore");
                break;
            case "Weaver":
                character.skills.push("Bartering");
                break;
            case "Fish monger":
                character.skills.push("Aquatic foes");
                character.skills.push("Ocean lore");
                break;
            case "Explorer":
                character.skills.push("Local area knowledge");
                break;
            case "Game warden":
                character.skills.push("Tracking");
                character.weaponSkills.push("Medium");
                character.weaponSkills.push("Ranged");
                break;
            case "Bureaucrat":
                character.skills.push("Negotiation");
                break;
            case "Assistant slayer":
                var slayerResult = Math.floor(Math.random() * 6) + 1;
                var slayerWeaponResult = Math.floor(Math.random() * 4) + 1;

                if(slayerResult == 1)
                {
                    character.skills.push("Humanoid lore");
                }
                else if(slayerResult == 2)
                {
                    character.skills.push("Vermin lore");
                }
                else if(slayerResult == 3)
                {
                    character.skills.push("Troll lore");
                }
                else if(slayerResult == 4)
                {
                    character.skills.push("Dragon lore");
                }
                else if(slayerResult == 5)
                {
                    character.skills.push("Goblinoid lore");
                }
                else
                {
                    character.skills.push("Demon lore");
                }

                if(slayerWeaponResult == 1)
                {
                    character.weaponSkills.push("Light");
                }
                else if(slayerWeaponResult == 2)
                {
                    character.weaponSkills.push("Medium");
                }
                else if(slayerWeaponResult == 3)
                {
                    character.weaponSkills.push("Heavy");
                }
                else
                {
                    character.weaponSkills.push("Medium");
                }
                break;
            case "Cartographer":
                character.skills.push("Local area knowledge");
                break;
            case "Thieves guild mule":
                character.connectionTypes.push("Underworld");
                character.weaponSkills.push("Medium");
                break;
            case "Prostitute":
                var prostituteResult = Math.floor(Math.random() * 4) + 1;

                for(var p = 0; p < prostituteResult; p++)
                {
                    character.connectionTypes.push("Underworld");
                }
                break;
            case "Professional mourner":
                character.skills.push("Religious lore");
                break;
            case "Royal food tester":
                character.skills.push("Poison detection");
                break;
            case "Brewer":
                character.skills.push("Brewing");
                break;
            case "Book maker":
                character.skills.push("Research");
                break;
            case "Dentist":
                character.skills.push("Interrogation");
                break;
            case "Snake oil salesman":
                character.skills.push("Bartering");
                character.connectionTypes.push("Underworld");
                break;
            case "Protester":
                var protesterResult = Math.floor(Math.random() * 6) + 1;

                if(protesterResult == 1)
                {
                    character.quirks.push("You hate taxes");
                }
                else if(protesterResult == 2)
                {
                    character.quirks.push("You hate royalty");
                }
                else if(protesterResult == 3)
                {
                    character.quirks.push("You hate hunters");
                }
                else if(protesterResult == 4)
                {
                    character.quirks.push("You hate priests");
                }
                else if(protesterResult == 5)
                {
                    character.quirks.push("You hate government");
                }
                else
                {
                    character.quirks.push("You hate everything");
                }
                break;
            case "Herbalist":
                character.skills.push("Identify potions");
                character.skills.push("Nature lore");
                break;
            case "Wizard's test subject":
                character.mysticismPool += 5;
                character.mutationCount++;
                break;
            case "Deck hand":
                character.skills.push("Sailing");
                break;
            case "Monk":
                var monkResult = Math.floor(Math.random() * 6) + 1;

                if(monkResult == 1)
                {
                    character.skills.push("War god lore");
                }
                else if(monkResult == 2)
                {
                    character.skills.push("Sea god lore");
                }
                else if(monkResult == 3)
                {
                    character.skills.push("Sun god lore");
                }
                else if(monkResult == 4)
                {
                    character.skills.push("Death god lore");
                }
                else if(monkResult == 5)
                {
                    character.skills.push("Monotheistic god lore");
                }
                else
                {
                    character.skills.push("Demonic god lore");
                }

                character.skills.push("Religion lore");
                character.skills.push("Spell casting (Divine)");
                break;
            case "Dress maker":
                var dressMakerResult = Math.floor(Math.random() * 6) + 1;

                if(dressMakerResult < 3)
                {
                    character.connectionTypes.push("Underworld");
                }
                else if(dressMakerResult < 6)
                {
                    character.connectionTypes.push("Common");
                }
                else
                {
                    character.connectionTypes.push("Noble");
                }
                break;
            case "Gate keeper":
                character.skills.push("Intimidate");
                character.weaponSkills.push("Heavy");
                break;
            case "Burglar":
                character.skills.push("Lock picking");
                character.skills.push("Move silently");
                break;
            case "Apiarist (bee keeper)":
                character.skills.push("Animal lore");
                break;
            case "Finder":
                var finderResult = Math.floor(Math.random() * 6) + 1;

                if(finderResult == 1)
                {
                    character.skills.push("Magic weapon lore");
                }
                else if(finderResult == 2)
                {
                    character.skills.push("Magic armor lore");
                }
                else if(finderResult == 3)
                {
                    character.skills.push("Magic spell lore");
                }
                else if(finderResult == 4)
                {
                    character.skills.push("Magic item lore");
                }
                else if(finderResult == 5)
                {
                    character.skills.push("Magic potion lore");
                }
                else
                {
                    character.skills.push("Magic creature lore");
                }

                character.weaponSkills.push("Light");
                break;
            case "Acrobat":
                character.skills.push("Acrobatics");
                break;
            case "Distiller":
                character.focusPool += 5;
                break;
            case "Fence":
                character.skills.push("Appraise");
                character.skills.push("Bargaining");
                break;
            case "Village idiot":
                var finderResult = Math.floor(Math.random() * 6) + 1;

                if(finderResult == 1)
                {
                    character.skills.push("Local area lore");
                }
                else if(finderResult == 2)
                {
                    character.skills.push("Rumor lore");
                }
                else if(finderResult == 3)
                {
                    character.skills.push("Animal lore");
                }
                else
                {
                    character.quirks.push("You know nothing useful. You really are an idiot.");
                }
                break;
            case "Healer's helper":
                character.skills.push("Healing");
                break;
            case "Barrister's page":
                character.skills.push("Interrogate");
                character.connectionTypes.push("Noble");
                break;
            case "Gambler":
                character.skills.push("Gambling");
                break;
            case "Clown":
                character.skills.push("Entertain");
                character.skills.push("Intimidate");
                break;
            case "Actor":
                character.skills.push("Entertain");
                character.connectionTypes.push("Noble");
                break;
            case "Sapper (explosives!)":
                character.skills.push("Engineering");
                character.skills.push("Siege");
                break;
            case "Thug":
                character.resolvePool += 5;
                character.skills.push("Brawling");
                character.weaponSkills.push("Light");
                break;
            case "Fortune teller (phony)":
                character.skills.push("Interrogate");
                break;
            case "Seer":
                character.mysticismPool += 5;
                break;
            case "Candle maker":
                character.focusPool += 5;
                break;
            case "Miller":
                character.resolvePool += 5;
                break;
            case "Spy":
                character.connectionTypes.push("Noble");
                character.skills.push("Hide in shadows");
                character.weaponSkills.push("Light");
                break;
            case "Gladiator":
                character.resolvePool += 5;
                character.weaponSkills.push("Medium");
                character.skills.push("Entertain");
                break;
            case "Furrier":
                character.skills.push("Appraisal");
                character.skills.push("Bargaining");
                character.skills.push("Nature lore");
                break;
            case "Knight in training":
                character.weaponSkills.push("Light");
                character.weaponSkills.push("Medium");
                character.weaponSkills.push("Heavy");
                character.skills.push("Animal empathy (Horse)");
                character.skills.push("Mounted combat");
                break;
            case "Wizard's apprentice":
                character.mysticismPool += 5;
                character.skills.push("Spell casting");
                character.skills.push("Research");
                character.weaponSkills.push("Light");
                break;
            default:
                character.resolvePool += 5;
                character.skills.push("Scavenge");
        }
    }
}

function generateArmor()
{
    // Generate the armor type
    character.armorType = Math.floor(Math.random() * armors.length);

    // Calculate the armor score
    switch(armors[character.armorType].attribute)
    {
        case "Athleticism":
            character.armor = armors[character.armorType].score + character.athleticism;
            break;
        case "Brawn":
            character.armor = armors[character.armorType].score + character.brawn;
            break;
        case "Focus":
            character.armor = armors[character.armorType].score + character.focus;
            break;
        default:
            character.armor = armors[character.armorType].score + character.athleticism;
    }

    // Calculate the focus pool
    character.focusPool += armors[character.armorType].focusPool;

    // Calculate the athleticism
    character.athleticism += armors[character.armorType].athleticism;
}

function generateConnections()
{
    if(character.connectionTypes.length > 0)
    {
        for(var i = 0; i < character.connectionTypes.length; i++)
        {
            var connection = new aaieConnection();

            switch(character.connectionTypes[i])
            {
                case "Underworld":
                    connection.type = "Underworld";
                    connection.nickName = underworldNickNames[Math.floor(Math.random() * underworldNickNames.length)];
                    connection.name = underworldNames[Math.floor(Math.random() * underworldNames.length)];
                    connection.fact = underworldFacts[Math.floor(Math.random() * underworldFacts.length)];
                    break;
                case "Common":
                    connection.type = "Common";
                    connection.name = commonNames[Math.floor(Math.random() * commonNames.length)];
                    connection.job = commonJobs[Math.floor(Math.random() * commonJobs.length)];
                    connection.fact = commonFacts[Math.floor(Math.random() * commonFacts.length)];
                    break;
                case "Noble":
                    connection.type = "Noble";
                    connection.title = nobleTitles[Math.floor(Math.random() * nobleTitles.length)];
                    connection.name = nobleNames[Math.floor(Math.random() * nobleNames.length)];
                    connection.from = nobleFroms[Math.floor(Math.random() * nobleFroms.length)];
                    connection.fact = nobleFacts[Math.floor(Math.random() * nobleFacts.length)];
                    break;
            }

            character.connections.push(connection);
        }
    }
}

function generateClass()
{
    // Generate the class
    character.class = Math.floor(Math.random() * classes.length);

    // Adjust stats based on class
    character.brawn += classes[character.class].brawn;
    character.athleticism += classes[character.class].athleticism;
    character.resolve += classes[character.class].resolve;
    character.academics += classes[character.class].academics;
    character.knowledge += classes[character.class].knowledge;
    character.focus += classes[character.class].focus;
    character.leadership += classes[character.class].leadership;
    character.attractiveness += classes[character.class].attractiveness;
    character.mysticism += classes[character.class].mysticism;
    character.resolvePool += classes[character.class].resolvePool;
    character.focusPool += classes[character.class].focusPool;
    character.mysticismPool += classes[character.class].mysticismPool;
}

function generateWeapons()
{
    if(character.weaponSkills.length > 0)
    {
        for(var i = 0; i < character.weaponSkills.length; i++)
        {
            switch(character.weaponSkills[i])
            {
                case "Light":
                    var lightWeapon = Math.floor(Math.random() * lightWeapons.length);
                    character.weapons.push(lightWeapons[lightWeapon]);
                    break;
                case "Medium":
                    var mediumWeapon = Math.floor(Math.random() * mediumWeapons.length);
                    character.weapons.push(mediumWeapons[mediumWeapon]);
                    break;
                case "Heavy":
                    var heavyWeapon = Math.floor(Math.random() * heavyWeapons.length);
                    character.weapons.push(heavyWeapons[heavyWeapon]);
                    break;
                case "Ranged":
                    var rangedWeapon = Math.floor(Math.random() * rangedWeapons.length);
                    character.weapons.push(rangedWeapons[rangedWeapon]);
                    break;
            }
        }
    }
    else
    {
        // Character has no weapon skills.
        // Roll for a peasant weapon.
        var peasantWeapon = Math.floor(Math.random() * peasantWeapons.length);
        character.weapons.push(peasantWeapons[peasantWeapon]);
    }
}

function generateEquipment()
{
    var equipmentNum = Math.floor(Math.random() * mundaneEquipment.length);

    switch(mundaneEquipment[equipmentNum])
    {
        case "empty bottle":
            var string = mundaneEquipment[equipmentNum];
            var num = Math.floor(Math.random() * 4) + 1;
            if(num > 1)
            {
                character.equipment.push(num + " " + string + 's');
            }
            else
            {
                character.equipment.push(num + " " + string);
            }
            break;
        case "candle":
            var string = mundaneEquipment[equipmentNum];
            var num = Math.floor(Math.random() * 6) + 1;
            if(num > 1)
            {
                character.equipment.push(num + " " + string + 's');
            }
            else
            {
                character.equipment.push(num + " " + string);
            }
            break;
        case "potato":
            var string = mundaneEquipment[equipmentNum];
            var num = Math.floor(Math.random() * 6) + 1;
            if(num > 1)
            {
                character.equipment.push(num + " " + string + 's');
            }
            else
            {
                character.equipment.push(num + " " + string);
            }
            break;
        case "torch":
            var string = mundaneEquipment[equipmentNum];
            var num = Math.floor(Math.random() * 4) + 1;
            if(num > 1)
            {
                character.equipment.push(num + " " + string + 'es');
            }
            else
            {
                character.equipment.push(num + " " + string);
            }
            break;
        case "extra bowstring":
            var string = mundaneEquipment[equipmentNum];
            var num = Math.floor(Math.random() * 4) + 1;
            if(num > 1)
            {
                character.equipment.push(num + " " + string + 's');
            }
            else
            {
                character.equipment.push(num + " " + string);
            }
            break;
        case "dry sock":
            var string = mundaneEquipment[equipmentNum];
            var num = Math.floor(Math.random() * 6) + 1;
            if(num > 1)
            {
                character.equipment.push(num + " " + string + 's');
            }
            else
            {
                character.equipment.push(num + " " + string);
            }
            break;
        case "person tent":
            var string = mundaneEquipment[equipmentNum];
            var num = Math.floor(Math.random() * 4) + 1;
            character.equipment.push(num + " " + string);
            break;
        case "pound bag of loose dirt":
            var string = mundaneEquipment[equipmentNum];
            var num = Math.floor(Math.random() * 4) + 1;
            character.equipment.push(num + " " + string);
            break;
        case "days worth of dry rations":
            var string = mundaneEquipment[equipmentNum];
            var num = Math.floor(Math.random() * 6) + 1;
            if(num > 1)
            {
                character.equipment.push(num + " " + string);
            }
            else
            {
                character.equipment.push(num + " day worth of dry rations");
            }
            break;
        case "pound bag of rice":
            var string = mundaneEquipment[equipmentNum];
            var num = Math.floor(Math.random() * 4) + 1;
            character.equipment.push(num + " " + string);
            break;
        case "pound of jerky":
            var string = mundaneEquipment[equipmentNum];
            var num = Math.floor(Math.random() * 6) + 1;
            if(num > 1)
            {
                character.equipment.push(num + " pounds of jerky");
            }
            else
            {
                character.equipment.push(num + " " + string);
            }
            break;
        case "A bird call":
            var num = Math.floor(Math.random() * 6) + 1;
            switch(num)
            {
                case 1:
                    character.equipment.push("A finch call");
                    break;
                case 2:
                    character.equipment.push("A duck call");
                    break;
                case 3:
                    character.equipment.push("A jay call (YO, JAY!)");
                    break;
                case 4:
                    character.equipment.push("An eagle call");
                    break;
                case 5:
                    character.equipment.push("A hawk call");
                    break;
                case 6:
                    character.equipment.push("A goose call");
                    break;
            }
            break;
        case "A belt with pouches":
            var num = Math.floor(Math.random() * 6) + 1;
            if(num > 1)
            {
                character.equipment.push("A belt with " + num + " pouches");
            }
            else
            {
                character.equipment.push("A belt with a pouch");
            }
            break;
        case "iron spike":
            var string = mundaneEquipment[equipmentNum];
            var num = Math.floor(Math.random() * 6) + 1;
            if(num > 1)
            {
                character.equipment.push(num + " " + string + 's');
            }
            else
            {
                character.equipment.push(num + " " + string);
            }
            break;
        default:
            character.equipment.push(mundaneEquipment[equipmentNum]);
    }
}
function generateAbilities()
{
    switch(races[character.race].name)
    {
        case "Dwarf":
            var num = Math.floor(Math.random() * dwarfAbilities.length);
            character.racialAbilities.push(dwarfAbilities[num]);
            break;
        case "Elf":
            var num = Math.floor(Math.random() * elfAbilities.length);
            character.racialAbilities.push(elfAbilities[num]);
            break;
        case "Halfling":
            var num = Math.floor(Math.random() * halflingAbilities.length);
            character.racialAbilities.push(halflingAbilities[num]);
            break;
        case "Human":
            var num = Math.floor(Math.random() * humanAbilities.length);
            character.racialAbilities.push(humanAbilities[num]);
            break;
        case "Minotaur":
            var num = Math.floor(Math.random() * minotaurAbilities.length);
            character.racialAbilities.push(minotaurAbilities[num]);
            break;
    }

    switch(classes[character.class].name)
    {
        case "Priest":
            var num = Math.floor(Math.random() * priestAbilities.length);
            character.classAbilities.push(priestAbilities[num]);

            if(priestAbilities[num].name == "Muscle of your lord")
            {
                var num2 = Math.floor(Math.random() * 10);
                character.classAbilities.push(warriorAbilities[num2]);
            }
            else if(priestAbilities[num].name == "Unseen hand of the holy")
            {
                var num2 = Math.floor(Math.random() * 10);
                character.classAbilities.push(thiefAbilities[num2]);
            }
            break;
        case "Thief":
            var num = Math.floor(Math.random() * thiefAbilities.length);
            character.classAbilities.push(thiefAbilities[num]);

            if(thiefAbilities[num].name == "Thug life")
            {
                var num2 = Math.floor(Math.random() * 10);
                character.classAbilities.push(warriorAbilities[num2]);
            }
            else if(thiefAbilities[num].name == "Even the gods are thieves")
            {
                var num2 = Math.floor(Math.random() * 10);
                character.classAbilities.push(priestAbilities[num2]);
            }
            break;
        case "Warrior":
            var num = Math.floor(Math.random() * 10);
            character.classAbilities.push(warriorAbilities[num]);

            if(warriorAbilities[num].name == "Battle mage")
            {
                var num2 = Math.floor(Math.random() * 10);
                character.classAbilities.push(wizardAbilities[num2]);
            }
            else if(warriorAbilities[num].name == "Paladin")
            {
                var num2 = Math.floor(Math.random() * 10);
                character.classAbilities.push(priestAbilities[num2]);
            }
            break;
        case "Wizard":
            var num = Math.floor(Math.random() * 10);
            //character.classAbilities.push(new aaieAbility("Spell memorization"));
            character.classAbilities.push(wizardAbilities[num]);

            if(wizardAbilities[num].name == "Shadow mage")
            {
                var num2 = Math.floor(Math.random() * 10);
                character.classAbilities.push(thiefAbilities[num2]);
            }
            else if(wizardAbilities[num].name == "War mage")
            {
                var num2 = Math.floor(Math.random() * 10);
                character.classAbilities.push(warriorAbilities[num2]);
            }
            break;
    }
}

function generateDiety()
{
    var roll = Math.floor(Math.random() * 100) + 1;

    if(roll <= 22)
    {
        if(roll <= 2)
        {
            character.diety = "Thodin, God of Footwear and awesomeness";
        }
        else if(roll <= 4)
        {
            character.diety = "Artemis, Goddess of the Moon";
        }
        else if(roll <= 6)
        {
            character.diety = "Cronus, God of Time";
        }
        else if(roll <= 8)
        {
            character.diety = "Nemain, Goddess of the Fury of War";
        }
        else if(roll <= 10)
        {
            character.diety = "Mars, God of War";
        }
        else if(roll <= 12)
        {
            character.diety = "Eir, God of Medicine";
        }
        else if(roll <= 14)
        {
            character.diety = "Kratos, God of Strength";
        }
        else if(roll <= 16)
        {
            character.diety = "Odin, God of Wisdom";
        }
        else if(roll <= 18)
        {
            character.diety = "Tartarus, God of the Underworld";
        }
        else if(roll <= 20)
        {
            character.diety = "Set, God of Death";
        }
        else if(roll <= 22)
        {
            character.diety = "Bob, God of Sponge";
        }
    }
    else
    {
        var dietyName1 = Math.floor(Math.random() * dietyNames1.length);
        var dietyName2 = Math.floor(Math.random() * dietyNames2.length);
        var dietyTitle1 = Math.floor(Math.random() * dietyTitles1.length);
        var dietyTitle2 = Math.floor(Math.random() * dietyTitles2.length);

        character.diety = dietyNames1[dietyName1]
                            + dietyNames2[dietyName2] + ", "
                            + dietyTitles1[dietyTitle1] + " "
                            + dietyTitles2[dietyTitle2];
    }
}

function generateMutations()
{
    if(character.mutationCount > 0)
    {
        var generatedMutations = [];

        for(var i = 0; i < character.mutationCount; i++)
        {
            generatedMutations.push(mutations[Math.floor(Math.random() * mutations.length)]);
        }

        for(var j = 0; j < generatedMutations.length; j++)
        {
            switch(generatedMutations[j])
            {
                case "Tail 1":
                    var name = generatedMutations[j];
                    var description = "You have a long non-prehensile tail. You can use it to balance, but not much else, you tend to freak others out, because you look like a demon ..except Furries, those guys think you're the bomb.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Extra eye":
                    var name = generatedMutations[j];
                    var description = "A functional eye has popped out of your ";
                    var num = Math.floor(Math.random() * 4);

                    switch(num)
                    {
                        case 0:
                            description += "hand.";
                            break;
                        case 1:
                            description += "back.";
                            break;
                        case 2:
                            description += "forehead.";
                            break;
                        case 3:
                            description += "elbow.";
                            break;
                    }
                    description += " Aren't you lucky?"
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Shell":
                    var name = generatedMutations[j];
                    var description = "You have growing hard shell over at least part of your body.";
                    character.armor += 3;
                    character.athleticism -= 1;
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Mucus":
                    var name = generatedMutations[j];
                    var description = "You body covered in a thin coat of sticky mucus. Things stick to you, like a wacky wall walker.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Spines":
                    var name = generatedMutations[j];
                    var numSpines = Math.floor(Math.random() * 100) + 1;
                    var description = "You have " + numSpines + " random spines growing from your body, they help you wrestle your enemies and impede you doing every thing else.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Odor":
                    var name = generatedMutations[j];
                    var description = "You smell strongly of ";
                    var num = Math.floor(Math.random() * 6);

                    switch(num)
                    {
                        case 0:
                            description += "mustard.";
                            break;
                        case 1:
                            description += "ammonia.";
                            break;
                        case 2:
                            description += "garlic.";
                            break;
                        case 3:
                            description += "death.";
                            break;
                        case 4:
                            description += "fresh air.";
                            break;
                        case 5:
                            description += "moist earth.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Skin Color":
                    var name = generatedMutations[j];
                    var description = "Your skin is ";
                    var num = Math.floor(Math.random() * 6);

                    switch(num)
                    {
                        case 0:
                            description += "blue.";
                            break;
                        case 1:
                            description += "red.";
                            break;
                        case 2:
                            description += "orange.";
                            break;
                        case 3:
                            description += "coal.";
                            break;
                        case 4:
                            description += "snow white.";
                            break;
                        case 5:
                            description += "green.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Extra arm":
                    var name = generatedMutations[j];
                    var description = "You have grown another appendage. You have less focus, but you can wield another light weapon and make 2 attacks per round.";
                    character.focusPool = character.focusPool / 2;
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Feathers":
                    var name = generatedMutations[j];
                    var feathers = "";
                    var num = Math.floor(Math.random() * 6);

                    switch(num)
                    {
                        case 0:
                            feathers = "eagle";
                            break;
                        case 1:
                            feathers = "hawk";
                            break;
                        case 2:
                            feathers = "duck";
                            break;
                        case 3:
                            feathers = "partridge";
                            break;
                        case 4:
                            feathers = "owl";
                            break;
                        case 5:
                            feathers = "chicken";
                            break;
                    }
                    var description = "You have grown a coat of " + feathers + " feathers, you do not get cold in bad weather, water runs off your back.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Boils":
                    var name = generatedMutations[j];
                    var description = "You have broken out in massive boils they heal then come back leaving small scars all over you body.";
                    character.attractiveness = 1;
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Heat":
                    var name = generatedMutations[j];
                    var description = "You give off heat, quite a bit, enough that anyone within 2 feat of you can feel it.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Tentacles":
                    var name = generatedMutations[j];
                    var num = Math.floor(Math.random() * 4) + 1;
                    var location = Math.floor(Math.random() * 4) + 1;
                    var description = "";

                    switch(location)
                    {
                        case 1:
                            description = "You have sprouted " + num + " tentacles from your shoulders. You may make an attack with each one each turn for 1d4 damage. You freak others out, they have suckers and move a lot.";
                            break;
                        case 2:
                            description = "You have sprouted " + num + " tentacles from your back. You may make an attack with each one each turn for 1d4 damage. You freak others out, they have suckers and move a lot.";
                            break;
                        case 3:
                            description = "You have sprouted " + num + " tentacles from your chest. You may make an attack with each one each turn for 1d4 damage. You freak others out, they have suckers and move a lot.";
                            break;
                        case 4:
                            description = "You have sprouted " + num + " tentacles from your hands and arms. You may make an attack with each one each turn for 1d4 damage. You freak others out, they have suckers and move a lot.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "The Stranger":
                    var name = generatedMutations[j];
                    var description = "";
                    var location = Math.floor(Math.random() * 4) + 1;
                    switch(location)
                    {
                        case 1:
                            description = "You have sprouted a limp useless arm from your chest. This arm is utterly useless and generally gets in the way and /or freaks people out. You can wear one extra magic ring on it, so there's that."
                            break;
                        case 2:
                            description = "You have sprouted a limp useless arm from your shoulder. This arm is utterly useless and generally gets in the way and /or freaks people out. You can wear one extra magic ring on it, so there's that."
                            break;
                        case 3:
                            description = "You have sprouted a limp useless arm from your back. This arm is utterly useless and generally gets in the way and /or freaks people out. You can wear one extra magic ring on it, so there's that."
                            break;
                        case 4:
                            description = "You have sprouted a limp useless arm from your hip. This arm is utterly useless and generally gets in the way and /or freaks people out. You can wear one extra magic ring on it, so there's that."
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Crab claw":
                    var name = generatedMutations[j];
                    var description = "One of your hands is a crab claw, it can attack for 1d6 Damage using Brawn. It also gives you +4 difficulty to all reaction checks.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Hairy Beast":
                    var name = generatedMutations[j];
                    var description = "Your body is covered in a coat of thick wiry hair, you could be mistake for a Wolfhound. +4 difficulty to all reaction checks.";
                    var colors = ["red", "black", "white", "brown", "calico"];
                    var color = Math.floor(Math.random() * 6) + 1;
                    switch(color)
                    {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            description += " The fur is " + colors[color] + ".";
                            break;
                        case 6:
                            var color1 = "";
                            var color2 = "";
                            while(color1 == color2)
                            {
                                color1 = colors[Math.floor(Math.random() * colors.length)];
                                color2 = colors[Math.floor(Math.random() * colors.length)];
                            }
                            description += " The fur is spotted " + color1 + " and " + color2 + ".";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "What Up Goat":
                    var name = generatedMutations[j];
                    var description = "Your feet have reformed into cloven hooves. You look a bit demonic, +6 difficulty to all reaction checks. You also grow a beard, a goat beard.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Plant like":
                    var name = generatedMutations[j];
                    var description = "You are now part plant, after one day in darkness every hour you are with out sun light you loose 1d6 resolve. Every hour you are in sunlight you regenerate 1d4 resolve.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Duck bill":
                    var name = generatedMutations[j];
                    var description = "You grow an obvious duck bill, if you are into old school RPG fan this does not bother you one bit. Other wise you are set up for being ridiculed in every inn you travel to.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Digits":
                    var name = generatedMutations[j];
                    var num = Math.floor(Math.random() * 6) + 1;
                    var description = "You grow " + num + " extra fingers, no modifiers but your piano skills go from good to amazing.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Jelly":
                    var name = generatedMutations[j];
                    var description = "Patches of your skin turn to jelly, then heal, this happens daily and makes you very hard to look at.";
                    var num = Math.floor(Math.random() * 6) + 1;
                    character.attractiveness -= num;
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Daily growth":
                    var name = generatedMutations[j];
                    var description = "Each day the character grows 1d4 feet taller then reverts to normal size at the end of the day";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Fused":
                    var name = generatedMutations[j];
                    var description = "Anything the character is carrying when they receive this mutation is fused to their body in a mess of melted and reformed flesh.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Sudden age":
                    var name = generatedMutations[j];
                    var age1 = Math.floor(Math.random() * 20) + 1;
                    var age2 = Math.floor(Math.random() * 20) + 1;
                    var age = 60 + age1 + age2;
                    var agilityLoss = Math.floor(Math.random() * 6) + 1;

                    var resolveLoss = Math.floor(Math.random() * 6) + 1;
                    var description = "The character suddenly aged. The character is now " + age + " years old.";
                    character.agility -= agilityLoss;
                    character.brawn -= brawnLoss;
                    character.resolve -= resolveLoss;
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Supra brain":
                    var name = generatedMutations[j];
                    var description = "The character's cranium inflates like a giant veined mushroom.";
                    var academicsGain = Math.floor(Math.random() * 6) + 1;
                    var brawnLoss = Math.floor(Math.random() * 4) + 1;
                    character.academics += academicsGain;
                    character.brawn -= brawnLoss;
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Peck Zillia":
                    var name = generatedMutations[j];
                    var description = "The character's muscular development explodes out of control.";
                    var athleticismLoss = Math.floor(Math.random() * 4) + 1;
                    var brawnGain = Math.floor(Math.random() * 6) + 1;
                    character.athleticism -= athleticismLoss;
                    character.brawn += brawnGain;
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Lumpy":
                    var name = generatedMutations[j];
                    var description = "The character develops football sized lumps all over their body.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Brillo":
                    var name = generatedMutations[j];
                    var description = "The character's hair all turns to thin metal wires.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Wooden bones":
                    var name = generatedMutations[j];
                    var description = "The character now floats, small twigs and leaves pierce the character's flesh in spots where the bones are close to the surface.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Mental block":
                    var name = generatedMutations[j];
                    var num = Math.floor(Math.random() * 4) + 1;
                    var description = "";
                    switch(num)
                    {
                        case 1:
                            description = "May not use swords.";
                            break;
                        case 2:
                            description = "May not use bows.";
                            break;
                        case 3:
                            description = "May not use hammers";
                            break;
                        case 4:
                            description = "May not use axes.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Droop":
                    var name = generatedMutations[j];
                    var description = "The character's left side droops horribly as if it was made of melted wax.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Proboscus":
                    var name = generatedMutations[j];
                    var num = Math.floor(Math.random() * 4) + 1;
                    var description = "The character grows a " + num + " foot long prehensile trunk.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Evil touch":
                    var name = generatedMutations[j];
                    var num = Math.floor(Math.random() * 4) + 1;
                    var description = "";
                    switch(num)
                    {
                        case 1:
                            description = "This character's touch spoils food.";
                            break;
                        case 2:
                            description = "This character's touch spoils alcohol.";
                            break;
                        case 3:
                            description = "This character's touch spoils holy water.";
                            break;
                        case 4:
                            description = "This character's touch spoils healing potions.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Aura":
                    var name = generatedMutations[j];
                    var num = Math.floor(Math.random() * 6) + 1;
                    var distance = Math.floor(Math.random() * 4) + 1;
                    var description = "";
                    switch(num)
                    {
                        case 1:
                            description = "This character's aura repels wild life within " + distance + "feet.";
                            break;
                        case 2:
                            description = "This character's aura repels domestic animals within " + distance + "feet.";
                            break;
                        case 3:
                            description = "This character's aura repels humans within " + distance + "feet.";
                            break;
                        case 4:
                            description = "This character's aura repels elves within " + distance + "feet.";
                            break;
                        case 5:
                            description = "This character's aura repels dwarves within " + distance + "feet.";
                            break;
                        case 6:
                            description = "This character's aura repels plants within " + distance + "feet.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Etching":
                    var name = generatedMutations[j];
                    var description = "This character may etch stone with his or her index finger.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Porcine":
                    var name = generatedMutations[j];
                    var description = "This character takes on the appearance of a human sized pig or boar. This mutation has no other effect on the characters stats.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Language":
                    var name = generatedMutations[j];
                    var num = Math.floor(Math.random() * 6) + 1;
                    var description = "";
                    switch(num)
                    {
                        case 1:
                            description = "This character suddenly knows the Dwarven language.";
                            break;
                        case 2:
                            description = "This character suddenly knows the Elvish language.";
                            break;
                        case 3:
                            description = "This character suddenly knows the Draconic language.";
                            break;
                        case 4:
                            description = "This character suddenly knows the Goblinoid language.";
                            break;
                        case 5:
                            description = "This character suddenly knows the Demonic language.";
                            break;
                        case 6:
                            description = "This character suddenly knows the Angelic language.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Wild magic aura":
                    var name = generatedMutations[j];
                    var num = Math.floor(Math.random() * 4) + 1;
                    var description = "Anytime this character has a spell cast within " + num + " feet of him or her self, roll 1d6 if the roll is 4 or lower one key word in the spell will be randomly changed to 1.fire 2.ice 3. syrup 4. wind 5.death 6.healing.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Sunken":
                    var name = generatedMutations[j];
                    var description = "This character loses a great deal of weight and takes on the appearance of a cadaver.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Dirt":
                    var name = generatedMutations[j];
                    var description = "Mysteriously dirt constantly falls out of this characters shirt cuffs, pant cuts, pockets and armor joints.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Internal twin":
                    var name = generatedMutations[j];
                    var description = "A twin chews its way out of the characters body in some exposed part. Just its face, part of its head and one hand are visible. The twin has a class of its own and is played by the GM.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Homunculus":
                    var name = generatedMutations[j];
                    var description = "";
                    var num = Math.floor(Math.random() * 8) + 1;
                    switch(num)
                    {
                        case 1:
                            description = "Your character gains a horse head.";
                            break;
                        case 2:
                            description = "Your character gains a rhino head.";
                            break;
                        case 3:
                            description = "Your character gains a lion head.";
                            break;
                        case 4:
                            description = "Your character gains a dog head.";
                            break;
                        case 5:
                            description = "Your character gains a bird head.";
                            break;
                        case 6:
                            description = "Your character gains a goat head.";
                            break;
                        case 7:
                            description = "Your character gains a sheep head.";
                            break;
                        case 8:
                            description = "Your character gains a snake head.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Solar sensitive":
                    var name = generatedMutations[j];
                    var description = "";
                    var num = Math.floor(Math.random() * 4) + 1;
                    switch(num)
                    {
                        case 1:
                            description = "In the sunlight this character's skin turns blue then returns to normal when in the dark.";
                            break;
                        case 2:
                            description = "In the sunlight this character's skin turns red then returns to normal when in the dark.";
                            break;
                        case 3:
                            description = "In the sunlight this character's skin turns green then returns to normal when in the dark.";
                            break;
                        case 4:
                            description = "In the sunlight this character's skin turns spotted then returns to normal when in the dark.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Skunk":
                    var name = generatedMutations[j];
                    var description = "When threatened (dropped below 5 resolve), this character sprays a horridly smelly cloud of musk from two anal glands.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Voice over":
                    var name = generatedMutations[j];
                    var description = "";
                    var num = Math.floor(Math.random() * 6) + 1;
                    switch(num)
                    {
                        case 1:
                            description = "Every time this character speaks others also hear angelic music in the background.";
                            break;
                        case 2:
                            description = "Every time this character speaks others also hear laughter in the background.";
                            break;
                        case 3:
                            description = "Every time this character speaks others also hear weeping in the background.";
                            break;
                        case 4:
                            description = "Every time this character speaks others also hear screams in the background.";
                            break;
                        case 5:
                            description = "Every time this character speaks others also hear discordant music in the background.";
                            break;
                        case 6:
                            description = "Every time this character speaks others also hear animal noises in the background.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Bark skin":
                    var name = generatedMutations[j];
                    var description = "This character's skin takes on the appearance of tree bark,and complete with moss.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Lobster claw":
                    var name = generatedMutations[j];
                    var description = "One of this character's hands becomes a claw like appendage.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Bat nose":
                    var name = generatedMutations[j];
                    var description = "This character has a nose that looks like a bat's, they also gain limited sonar that eliminates any penalties for operating in the dark, but they take double damage from sonic attacks.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Rubber face":
                    var name = generatedMutations[j];
                    var description = "This character's skin can be pulled stretched and molded into drooping, swirling and folded shapes.";
                    character.attractiveness -= 4;
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Insatiable":
                    var name = generatedMutations[j];
                    var description = "The character is always ravenously hungry, and will eat all the time, eventually becoming obese.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Ear wax":
                    var name = generatedMutations[j];
                    var description = "The character produces a great deal of ear wax up to 1d4 pints a day. It makes them deaf, and literally leaks out of their ears.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Spider legs":
                    var name = generatedMutations[j];
                    var description = "You sprout 4 long spider legs from your abdomen, they can carry the character, climb walls and hold small items, but they are not strong enough to cause damage.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Sword arm":
                    var name = generatedMutations[j];
                    var description = "The bones in one of your arms fuse together into a sword like appendage that can do 1d6 damage with a strike.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Thin skinned":
                    var name = generatedMutations[j];
                    var description = "Your skin becomes thin and translucent, the character will now take double damage from any slashing attack.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Tail 2":
                    var name = generatedMutations[j];
                    var description = "You grow a long alligator tail, doubling your speed in the water, but eliminating your chance of getting dates.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Beardsman":
                    var name = generatedMutations[j];
                    var description = "";
                    var color = Math.floor(Math.random() * 6) + 1;
                    var length = Math.floor(Math.random() * 4) + 1;
                    switch(color)
                    {
                        case 1:
                            description = "You suddenly grow a " + length + " foot long beard that is brown.";
                            break;
                        case 2:
                            description = "You suddenly grow a " + length + " foot long beard that is black.";
                            break;
                        case 3:
                            description = "You suddenly grow a " + length + " foot long beard that is copper red.";
                            break;
                        case 4:
                            description = "You suddenly grow a " + length + " foot long beard that is white.";
                            break;
                        case 5:
                            description = "You suddenly grow a " + length + " foot long beard that is blue.";
                            break;
                        case 6:
                            description = "You suddenly grow a " + length + " foot long beard that is green.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "The Dragon":
                    var name = generatedMutations[j];
                    var description = "";
                    var num = Math.floor(Math.random() * 6) + 1;
                    switch(num)
                    {
                        case 1:
                            description = "Your breath now smells of garbage. You may use this like a breath effect in combat stunning targets on a MD20 of 15 or higher.";
                            break;
                        case 2:
                            description = "Your breath now smells of rot. You may use this like a breath effect in combat stunning targets on a MD20 of 15 or higher.";
                            break;
                        case 3:
                            description = "Your breath now smells of brimstone. You may use this like a breath effect in combat stunning targets on a MD20 of 15 or higher.";
                            break;
                        case 4:
                            description = "Your breath now smells of roses. You may use this like a breath effect in combat stunning targets on a MD20 of 15 or higher.";
                            break;
                        case 5:
                            description = "Your breath now smells of sewage. You may use this like a breath effect in combat stunning targets on a MD20 of 15 or higher.";
                            break;
                        case 6:
                            description = "Your breath now smells of lavender. You may use this like a breath effect in combat stunning targets on a MD20 of 15 or higher.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Really long fingers":
                    var name = generatedMutations[j];
                    var num = Math.floor(Math.random() * 6) + 1;
                    var description = "Your fingers grow " + num + " inches. It looks creepy and all weapon based attacks are +2 ore difficulty";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Acne":
                    var name = generatedMutations[j];
                    var num = Math.floor(Math.random() * 6) + 1;
                    var description = "You develop horrible acne, painful and disfiguring.";
                    character.attractiveness -= num;
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Insect reproduction":
                    var name = generatedMutations[j];
                    var description = "The character grows 1 egg sack on his back per week, the the egg sack will hatch painfully any time all three dice rolled are under 5, releasing a 'man fly',  a flying level 1 larval semi-humanoid that bites.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Weakness":
                    var name = generatedMutations[j];
                    var description = "";
                    var num = Math.floor(Math.random() * 6) + 1;
                    switch(num)
                    {
                        case 1:
                            description = "The character is now weak to iron. Exposure to this substance will cause them great pain and cause 1d6 damage per turn.";
                            break;
                        case 2:
                            description = "The character is now weak to gold. Exposure to this substance will cause them great pain and cause 1d6 damage per turn.";
                            break;
                        case 3:
                            description = "The character is now weak to silver. Exposure to this substance will cause them great pain and cause 1d6 damage per turn.";
                            break;
                        case 4:
                            description = "The character is now weak to stone. Exposure to this substance will cause them great pain and cause 1d6 damage per turn.";
                            break;
                        case 5:
                            description = "The character is now weak to wood. Exposure to this substance will cause them great pain and cause 1d6 damage per turn.";
                            break;
                        case 6:
                            description = "The character is now weak to sunlight. Exposure to this substance will cause them great pain and cause 1d6 damage per turn.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Gills":
                    var name = generatedMutations[j];
                    var description = "Strange gills rip open in the characters neck, and will allow the character to breath underwater. The character will have normal athleticism under water but their athleticism on land drops by 1d6. The character must keep the gills damp.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Melter":
                    var name = generatedMutations[j];
                    var description = "You simply can not hold onto body fat, it melts off your character, literally, you sweat fat.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Compound eyes":
                    var name = generatedMutations[j];
                    var description = "You have giant compound bug eyes. You can see thousands of images of what every one else can see clearly. +2 difficulty on all attack rolls.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Giraffe neck":
                    var name = generatedMutations[j];
                    var num = Math.floor(Math.random() * 6) + 1;
                    var description = "You can use your flexible, " + num + " foot long neck to look around corners.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Strange sweat":
                    var name = generatedMutations[j];
                    var description = "";
                    var num = Math.floor(Math.random() * 6) + 1;
                    switch(num)
                    {
                        case 1:
                            description = "Your sweat is now squid ink.";
                            break;
                        case 2:
                            description = "Your sweat is now wine.";
                            break;
                        case 3:
                            description = "Your sweat is now maple syrup.";
                            break;
                        case 4:
                            description = "Your sweat is now acidic.";
                            break;
                        case 5:
                            description = "Your sweat is now oil.";
                            break;
                        case 6:
                            description = "Your sweat is now extremely smell.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Limited psionics":
                    var name = generatedMutations[j];
                    var description = "";
                    var num = Math.floor(Math.random() * 8) + 1;
                    switch(num)
                    {
                        case 1:
                            description = "You gain the ability to mentally communicate with dogs.";
                            break;
                        case 2:
                            description = "You gain the ability to mentally communicate with chickens.";
                            break;
                        case 3:
                            description = "You gain the ability to mentally communicate with snakes.";
                            break;
                        case 4:
                            description = "You gain the ability to mentally communicate with ants.";
                            break;
                        case 5:
                            description = "You gain the ability to mentally communicate with turtles.";
                            break;
                        case 6:
                            description = "You gain the ability to mentally communicate with song birds.";
                            break;
                        case 7:
                            description = "You gain the ability to mentally communicate with fish.";
                            break;
                        case 8:
                            description = "You gain the ability to mentally communicate with squirrels.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Golemic":
                    var name = generatedMutations[j];
                    var num = Math.floor(Math.random() * 6) + 1;
                    var description = "The character's skin is replaced with chunks of stone. They may no longer wear clothing. They may clobber.";
                    character.armor = 9;
                    character.brawn += 1;
                    character.attractiveness -= num;
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Second brain":
                    var name = generatedMutations[j];
                    var description = "The character grows a small external brain on their back. If they are killed by a head destroying critical , they may continue to exist as a zombie like blind and very disturbing shell of themselves. This husk would be the equivalent of a porter retainer.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Squid like":
                    var name = generatedMutations[j];
                    var description = "The character's legs painfully split into 10 four foot long tentacles that the character may use for mobility. Each tentacle has suckers so you may now climb walls on a 9+";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Membranes":
                    var name = generatedMutations[j];
                    var description = "The character has flying squirrel like membranes under their arms and they can glide with them.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Ever growing teeth":
                    var name = generatedMutations[j];
                    var description = "";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Horse fiend":
                    var name = generatedMutations[j];
                    var description = "Horses go nuts when the character is around, and whinny whenever the character's name is mentioned.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Angelic":
                    var name = generatedMutations[j];
                    var description = "This character looks like an angel, porcelain skin, big white non functioning downy soft wings, and glowing golden eyes.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Demonic":
                    var name = generatedMutations[j];
                    var description = "This character looks like a demon: dark red skin,small horns, cloven hoofs, and pointed teeth.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Roving eyes":
                    var name = generatedMutations[j];
                    var description = "The character may remove his eyes and still see through them.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Cold blooded":
                    var name = generatedMutations[j];
                    var description = "The character is cold blooded ad suffers a +5 difficulty to all actions until they bask for at least 1 hour near a fire or in the sun. They are invisible to infravision.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Floppy jowls":
                    var name = generatedMutations[j];
                    var description = "The character develops huge floppy bull dog jowls.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Tusks":
                    var name = generatedMutations[j];
                    var num = Math.floor(Math.random() * 4) + 1;
                    var description = "The character grows " + num + " foot long tusks.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Smoke":
                    var name = generatedMutations[j];
                    var description = "Every time the character exhales they breath out a smoky cloud.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Locked spine":
                    var name = generatedMutations[j];
                    var description = "The character is hunched over and their spine is locked that way.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Lip-less":
                    var name = generatedMutations[j];
                    var description = "Your lips fall off, no more saying b's";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Subvocal harmonics":
                    var name = generatedMutations[j];
                    var num = Math.floor(Math.random() * 3) + 1;
                    var description = "";

                    switch(num)
                    {
                        case 1:
                            description = "Your voice is now low and subsonic.";
                            break;
                        case 2:
                            description = "Your voice is now extremely high.";
                            break;
                        case 3:
                            description = "Your voice is now multi-tonal.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Fangs":
                    var name = generatedMutations[j];
                    var num = Math.floor(Math.random() * 3) + 1;
                    var description = "";
                    switch(num)
                    {
                        case 1:
                            description = "You grow obvious fangs that are harmless.";
                            break;
                        case 2:
                            description = "You grow obvious fangs that give you a bite that causes 1d4 damage.";
                            break;
                        case 3:
                            description = "You grow obvious fangs that give you a venomous bite that causes 1d4 damage for 1d4 rounds.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Cracked flesh":
                    var name = generatedMutations[j];
                    var description = "Your skin is covered with deep cracks, making you less attractive.";
                    character.attractiveness -= 3;
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Huge":
                    var name = generatedMutations[j];
                    var description = "You have grown huge.  You are 8 foot tall and much heavier. Armour will cost twice as much to buy.";
                    character.brawn += 3;
                    character.athleticism = 1;
                    character.armor -= 2;
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Small wings":
                    var name = generatedMutations[j];
                    var num = Math.floor(Math.random() * 2) + 1;
                    var description = "";
                    switch(num)
                    {
                        case 1:
                            description = "Your character grows four small wings two on each shoulder. The wings are bird-like. If you flap like hell when falling you can avoid 1d6 damage.";
                            break;
                        case 2:
                            description = "Your character grows four small wings two on each shoulder. The wings are bat-like. If you flap like hell when falling you can avoid 1d6 damage.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Glass bones":
                    var name = generatedMutations[j];
                    var description = "You bones have become brittle, you will now take double damage from blunt attacks, however an upside is you float.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Glow":
                    var name = generatedMutations[j];
                    var description = "Your skin glows brightly giving off as much light as a lantern. If you open your mouth a beam of light extends 30 feat into the darkness like a flash light, you can no longer hide in shadows";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Dorsal fin":
                    var name = generatedMutations[j];
                    var description = "You have grown a large dorsal fin much like that of the sharktapuss, you gain +2 athleticism while in the water.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Red skin":
                    var name = generatedMutations[j];
                    var description = "You skin has become bright shimmering red.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Albino":
                    var name = generatedMutations[j];
                    var description = "You have lost all skin coloration.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Closed system":
                    var name = generatedMutations[j];
                    var description = "You no longer eat or excrete.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Spider eyes":
                    var name = generatedMutations[j];
                    var description = "You have 6 small dark eyes a crossed your face rather than 2 two normal ones. GM may give bonuses or penalties.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Very dry":
                    var name = generatedMutations[j];
                    var description = "You take double damage from flames, you absorb moisture at an astounding rate, you constantly flake a think could of dander.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Double-jointed":
                    var name = generatedMutations[j];
                    var num = Math.floor(Math.random() * 2) + 1;
                    var description = "";
                    switch(num)
                    {
                        case 1:
                            description = "Your elbows are double jointed and hinge in both directions.";
                            break;
                        case 2:
                            description = "Your knees are double jointed and hinge in both directions.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Scales":
                    var name = generatedMutations[j];
                    var description = "";
                    var num = Math.floor(Math.random() * 8) + 1;
                    switch(num)
                    {
                        case 1:
                            description = "Your skin is made of gray shimmering scales.";
                            break;
                        case 2:
                            description = "Your skin is made of green shimmering scales.";
                            break;
                        case 3:
                            description = "Your skin is made of red shimmering scales.";
                            break;
                        case 4:
                            description = "Your skin is made of white shimmering scales.";
                            break;
                        case 5:
                            description = "Your skin is made of blue shimmering scales.";
                            break;
                        case 6:
                            description = "Your skin is made of multicolored shimmering scales.";
                            break;
                    }
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Super hard finger nails":
                    var name = generatedMutations[j];
                    var description = "You can scrape wood and soft metal with your nails, they add 1d4 to your hand to hand combat attacks.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Two faces":
                    var name = generatedMutations[j];
                    var description = "You have grown a face on the side of your face, you can speak with two voices.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Glue skin":
                    var name = generatedMutations[j];
                    var description = "Your skin constantly secretes a sticky glue that dries in five minutes, you can climb with -4 difficulty.";
                    character.mutations.push(new aaieMutation(name, description));
                    break;
                case "Pudding":
                    var name = generatedMutations[j];
                    var description = "The character is a boneless pudding. You can go under most doors, through bars, and take 1/2 damage from blunt weapons.";
                    character.armor = 8;
                    character.mutations.push(new aaieMutation(name, description));
                    break;
            }// end switch
        }//end for
    }// end if
}

function generatePersonality()
{
    var quirk1 = Math.floor(Math.random() * quirksPart1.length);
    var quirk2 = Math.floor(Math.random() * quirksPart2.length);
    var quirk3 = Math.floor(Math.random() * quirksPart3.length);
    character.quirks.push("You have " + quirksPart1[quirk1] + " so you " + quirksPart2[quirk2]);
    character.quirks.push("You choose to start adventuring " + quirksPart3[quirk3]);
}

function generateSpells()
{
    if(classes[character.class].name == "Wizard")
    {
        for(var i = 0; i < character.academics; i++)
        {
            var keyword = spellDescriptors[Math.floor(Math.random() * spellDescriptors.length)];
            character.spellKeywords.push(keyword);
            /*
            // No longer used for spell generation.
            // Keeping it in just in case.
            var spell = new aaieSpell();
            var spellName = "";
            spellName += spellDescriptors1[Math.floor(Math.random() * spellDescriptors1.length)];
            spellName += " " + spellDescriptors2[Math.floor(Math.random() * spellDescriptors2.length)];
            spell.name 		= spellName;
            spell.type 		= spellTypes[Math.floor(Math.random() * spellTypes.length)];
            spell.die 		= spellEffectDice[Math.floor(Math.random() * spellEffectDice.length)];
            spell.effect 	= spellEffects[Math.floor(Math.random() * spellEffects.length)];
            spell.cost		= spellCosts[Math.floor(Math.random() * spellCosts.length)];
            character.spells.push(spell);
            */
        }
    }
}

function statCheck()
{
    if(character.brawn < 1)
    {
        character.brawn = 1;
    }

    if(character.athleticism < 1)
    {
        character.athleticism = 1;
    }

    if(character.resolve < 1)
    {
        character.resolve = 1;
    }

    if(character.academics < 1)
    {
        character.academics = 1;
    }

    if(character.knowledge < 1)
    {
        character.knowledge = 1;
    }

    if(character.focus < 1)
    {
        character.focus = 1;
    }

    if(character.leadership < 1)
    {
        character.leadership = 1;
    }

    if(character.attractiveness < 1)
    {
        character.attractiveness = 1;
    }

    if(character.mysticism < 1)
    {
        character.mysticism = 1;
    }

    if(character.resolvePool < 5)
    {
        character.resolvePool = 5;
    }

    if(character.focusPool < 5)
    {
        character.focusPool = 5;
    }

    if(character.mysticismPool < 5)
    {
        character.mysticismPool = 5;
    }
}


function generateOutput()
{
    var type = document.getElementById("char-sheet");
    var typeValue = type.options[type.selectedIndex].value;

    if(typeValue == "html")
    {
        generateHTMLOutput();
    }
    else
    {
        generateTextOutput();
    }
}

function generateHTMLOutput()
{
    var output = document.getElementById("generator-output");
    var outputHTML = "";

    // Character basics section
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td colspan="2" style="text-align:center;height:19px"><b>Character Basics</b></td></tr>';
    outputHTML += '<tr>';
    outputHTML += '<td style="width:100px;height:19px">&nbsp;<b>Name</b></td>';
    outputHTML += '<td style="width:250px;height:19px">&nbsp;</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Age</b></td>';
    outputHTML += '<td>&nbsp;' + ages[character.age].name + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Race</b></td>';
    outputHTML += '<td>&nbsp;' + races[character.race].name + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Class</b></td>';
    outputHTML += '<td>&nbsp;' + classes[character.class].name + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Diety</b></td>';
    outputHTML += '<td>&nbsp;' + character.diety + '</td>';
    outputHTML += '</tr>';
    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<br>';

    // Character stats
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;float:left;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td colspan="2" style="text-align:center;height:19px"><b>Stats</b></td></tr>';
    outputHTML += '<tr>';
    outputHTML += '<td style="width:150px;height:19px">&nbsp;<b>Stat name</b></td>';
    outputHTML += '<td style="width:100px;height:19px">&nbsp;<b>Value</b></td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Brawn</b></td>';
    outputHTML += '<td>&nbsp;' + character.brawn + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Athleticism</b></td>';
    outputHTML += '<td>&nbsp;' + character.athleticism + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Resolve</b></td>';
    outputHTML += '<td>&nbsp;' + character.resolve + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Academics</b></td>';
    outputHTML += '<td>&nbsp;' + character.academics + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Knowledge</b></td>';
    outputHTML += '<td>&nbsp;' + character.knowledge + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Focus</b></td>';
    outputHTML += '<td>&nbsp;' + character.focus + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Leadership</b></td>';
    outputHTML += '<td>&nbsp;' + character.leadership + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Attractiveness</b></td>';
    outputHTML += '<td>&nbsp;' + character.attractiveness + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Mysticism</b></td>';
    outputHTML += '<td>&nbsp;' + character.mysticism + '</td>';
    outputHTML += '</tr>';
    outputHTML += '</tbody>';
    outputHTML += '</table>';

    // Character secondary stats
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;float:left;margin-left:10px;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td colspan="3" style="text-align:center;height:19px"><b>Secondary Stats</b></td></tr>';
    outputHTML += '<tr>';
    outputHTML += '<td style="width:150px;height:19px">&nbsp;<b>Stat name</b></td>';
    outputHTML += '<td style="width:100px;height:19px">&nbsp;<b>Current Value</b></td>';
    outputHTML += '<td style="width:100px;height:19px">&nbsp;<b>Max Value</b></td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Resolve Pool</b></td>';
    outputHTML += '<td>&nbsp;' + character.resolvePool + '</td>';
    outputHTML += '<td>&nbsp;' + character.resolvePool + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Focus Pool</b></td>';
    outputHTML += '<td>&nbsp;' + character.focusPool + '</td>';
    outputHTML += '<td>&nbsp;' + character.focusPool + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Mysticism Pool</b></td>';
    outputHTML += '<td>&nbsp;' + character.mysticismPool + '</td>';
    outputHTML += '<td>&nbsp;' + character.mysticismPool + '</td>';
    outputHTML += '</tr>';
    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<div style="clear:both;"></div>';
    outputHTML += '<br>';

    // Careers
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;float:left;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td style="text-align:center;width:250px;height:19px"><b>Careers</b></td></tr>';

    for(var c = 0; c < character.careers.length; c++)
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;' + careers[character.careers[c]].name + '</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';

    // Skills
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;float:left;margin-left:10px;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td style="text-align:center;width:250px;height:19px"><b>Skills</b></td></tr>';

    // Add check for no skills
    for(var s = 0; s < character.skills.length; s++)
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;' + character.skills[s] + '</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<div style="clear:both;"></div>';
    outputHTML += '<br>';

    // Connections
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td colspan="2" style="text-align:center;height:19px"><b>Connections</b></td></tr>';
    outputHTML += '<tr>';
    outputHTML += '<td style="width:150px;height:19px">&nbsp;<b>Connection Type</b></td>';
    outputHTML += '<td style="width:450px;height:19px">&nbsp;<b>Connection Details</b></td>';
    outputHTML += '</tr>';

    if(character.connectionTypes.length > 0)
    {
        for(var i = 0; i < character.connectionTypes.length; i++)
        {
            outputHTML += '<tr>';
            outputHTML += '<td>&nbsp;' + character.connectionTypes[i] + '</td>';

            switch(character.connections[i].type)
            {
                case "Underworld":
                    outputHTML += "<td>&nbsp;"
                                + character.connections[i].nickName + " "
                                + character.connections[i].name + " who "
                                + character.connections[i].fact + "</td>";
                    break;
                case "Common":
                    outputHTML += "<td>&nbsp;"
                                + character.connections[i].name + " the "
                                + character.connections[i].job + " who "
                                + character.connections[i].fact + "</td>";
                    break;
                case "Noble":
                    outputHTML += "<td>&nbsp;"
                                + character.connections[i].title + " "
                                + character.connections[i].name + " of "
                                + character.connections[i].from + " who "
                                + character.connections[i].fact + "</td>";
                    break;

            }
            outputHTML += '</tr>';

        }
    }
    else
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<br>';

    // Abilities
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td colspan="4" style="text-align:center;height:19px"><b>Abilities</b></td></tr>';
    outputHTML += '<tr>';
    outputHTML += '<td style="width:100px;height:19px">&nbsp;<b>Ability Type</b></td>';
    outputHTML += '<td style="width:150px;height:19px">&nbsp;<b>Ability Name</b></td>';
    outputHTML += '<td style="width:200px;height:19px">&nbsp;<b>Short Description</b></td>';
    outputHTML += '<td style="width:300px;height:19px">&nbsp;<b>Long Description</b></td>';
    outputHTML += '</tr>';

    for(var i = 0; i < character.racialAbilities.length; i++)
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;Racial</td>';
        outputHTML += '<td>&nbsp;' + races[character.race].name + '</td>';
        outputHTML += '<td>&nbsp;' + character.racialAbilities[i] + '</td>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '</tr>';
    }

    for(var j = 0; j < character.classAbilities.length; j++)
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;Class</td>';
        outputHTML += '<td>&nbsp;' + character.classAbilities[j].name + '</td>';
        outputHTML += '<td>&nbsp;' + character.classAbilities[j].shortDescription + '</td>';
        outputHTML += '<td>' + character.classAbilities[j].description + '</td>';
        //outputHTML += '<td>&nbsp;</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<br>';

    // Mutations


    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td colspan="2" style="text-align:center;height:19px"><b>Mutations</b></td></tr>';
    outputHTML += '<tr>';
    outputHTML += '<td style="width:150px;height:19px">&nbsp;<b>Mutation Name</b></td>';
    outputHTML += '<td style="width:200px;height:19px">&nbsp;<b>Description</b></td>';
    outputHTML += '</tr>';

    if(character.mutationCount > 0)
    {
        for(var j = 0; j < character.mutations.length; j++)
        {
            outputHTML += '<tr>';
            outputHTML += '<td>&nbsp;' + character.mutations[j].name + '</td>';
            outputHTML += '<td>&nbsp;' + character.mutations[j].description + '</td>';
            outputHTML += '</tr>';
        }
    }
    else
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<br>';

    // Weapons
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td colspan="6" style="text-align:center;height:19px"><b>Weapons</b></td></tr>';
    outputHTML += '<tr>';
    outputHTML += '<td style="width:200px;height:19px">&nbsp;<b>Weapon Name</b></td>';
    outputHTML += '<td style="width:60px;height:19px">&nbsp;<b>Damage</b></td>';
    outputHTML += '<td style="width:75px;height:19px">&nbsp;<b>Attribute</b></td>';
    outputHTML += '<td style="width:100px;height:19px">&nbsp;<b>Perks</b></td>';
    outputHTML += '<td style="width:60px;height:19px">&nbsp;<b>Range</b></td>';
    outputHTML += '<td style="width:60px;height:19px">&nbsp;<b>Skilled?</b></td>';
    outputHTML += '</tr>';

    for(var j = 0; j < character.weapons.length; j++)
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;' + character.weapons[j].name + '</td>';
        outputHTML += '<td>&nbsp;' + character.weapons[j].damage + '</td>';
        outputHTML += '<td>&nbsp;' + character.weapons[j].attribute + '</td>';
        outputHTML += '<td>';

        for(var k = 0; k < character.weapons[j].perks.length; k++)
        {
            if(k >= (character.weapons[j].perks.length - 1))
            {
                outputHTML += character.weapons[j].perks[k];
            }
            else
            {
                outputHTML += character.weapons[j].perks[k] + '<br>';
            }
        }

        outputHTML += '</td>';
        outputHTML += '<td>&nbsp;' + character.weapons[j].range + '</td>';
        outputHTML += '<td>&nbsp;' + character.weapons[j].skilled + '</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<br>';

    // Armor
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td colspan="4" style="text-align:center;height:19px"><b>Armor</b></td></tr>';
    outputHTML += '<tr>';
    outputHTML += '<td style="width:200px;height:19px">&nbsp;<b>Armor Name</b></td>';
    outputHTML += '<td style="width:75px;height:19px">&nbsp;<b>Attribute</b></td>';
    outputHTML += '<td style="width:60px;height:19px">&nbsp;<b>Score</b></td>';
    outputHTML += '<td style="width:60px;height:19px">&nbsp;<b>Armor<br>&nbsp;Value</b></td>';
    outputHTML += '</tr>';
    outputHTML += '<tr>';
    outputHTML += '<td>&nbsp;' + armors[character.armorType].name + '</td>';
    outputHTML += '<td>&nbsp;' + armors[character.armorType].attribute + '</td>';
    outputHTML += '<td>&nbsp;' + armors[character.armorType].score + '</td>';
    outputHTML += '<td>&nbsp;' + character.armor + '</td>';
    outputHTML += '</tr>';
    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<br>';

    // Equipment
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;float:left;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr>';
    outputHTML += '<td style="text-align:center;width:400px;height:19px">&nbsp;<b>Equipment</b></td>';
    outputHTML += '</tr>';

    for(var j = 0; j < character.equipment.length; j++)
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;' + character.equipment[j] + '</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';

    // Quirks
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;float:left;margin-left:10px;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr>';
    outputHTML += '<td style="text-align:center;width:250px;height:19px">&nbsp;<b>Quirks</b></td>';
    outputHTML += '</tr>';

    for(var j = 0; j < character.quirks.length; j++)
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;' + character.quirks[j] + '</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<div style="clear:both;"></div>';
    outputHTML += '<br>';

    /*
    // Spells
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr>';
    outputHTML += '<td style="width:200px;height:19px">&nbsp;<b>Spell Name</b></td>';
    outputHTML += '<td style="width:60px;height:19px">&nbsp;<b>Type</b></td>';
    outputHTML += '<td style="width:75px;height:19px">&nbsp;<b>Effect Die</b></td>';
    outputHTML += '<td style="width:100px;height:19px">&nbsp;<b>Effects</b></td>';
    outputHTML += '<td style="width:150px;height:19px">&nbsp;<b>Cost -<br>&nbsp;Mysticism / Focus</b></td>';
    outputHTML += '</tr>';

    if(character.spells.length > 0)
    {
        for(var j = 0; j < character.spells.length; j++)
        {
            outputHTML += '<tr>';
            outputHTML += '<td>&nbsp;' + character.spells[j].name + '</td>';
            outputHTML += '<td>&nbsp;' + character.spells[j].type + '</td>';
            outputHTML += '<td>&nbsp;' + character.spells[j].die + '</td>';
            outputHTML += '<td>&nbsp;' + character.spells[j].effect + '</td>';
            outputHTML += '<td>&nbsp;' + character.spells[j].cost + '</td>';
            outputHTML += '</tr>';
        }
    }
    else
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<br>';
    */

    // Spell keywords
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr>';
    outputHTML += '<td><b>Spell Keyword Name</b></td>';
    outputHTML += '</tr>';

    if(character.spellKeywords.length > 0)
    {
        for(var j = 0; j < character.spellKeywords.length; j++)
        {
            outputHTML += '<tr>';
            outputHTML += '<td>&nbsp;' + character.spellKeywords[j] + '</td>';
            outputHTML += '</tr>';
        }
    }
    else
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<br>';

    // Background
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px">';
    outputHTML += '<tbody>';
    outputHTML += '<tr>';
    outputHTML += '<td style="text-align:center;width:732px;height:22px"><b>Background</b></td>';
    outputHTML += '</tr>';
    outputHTML += '<tr><td style="width:732px;height:150px">&nbsp;</td></tr>';
    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<br>';

    // Notes
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px">';
    outputHTML += '<tr>';
    outputHTML += '<td style="text-align:center;width:732px;height:22px"><b>Notes</b></td>';
    outputHTML += '</tr>';
    outputHTML += '<tr><td style="width:732px;height:150px">&nbsp;</td></tr>';
    outputHTML += '</tbody>';
    outputHTML += '</table>';

    output.innerHTML = outputHTML;
    gadgets.window.adjustHeight();
}

function generateTextOutput()
{
    var output = document.getElementById("generator-output");
    var outputHTML = "";
    outputHTML += "<br>Age: " + ages[character.age].name;
    outputHTML += "<br>Race: " + races[character.race].name;
    outputHTML += "<br>Class: " + classes[character.class].name;
    outputHTML += "<br>Brawn: " + character.brawn;
    outputHTML += "<br>Athleticism: " + character.athleticism;
    outputHTML += "<br>Resolve: " + character.resolve;
    outputHTML += "<br>Academics: " + character.academics;
    outputHTML += "<br>Knowledge: " + character.knowledge;
    outputHTML += "<br>Focus: " + character.focus;
    outputHTML += "<br>Leadership: " + character.leadership;
    outputHTML += "<br>Attractiveness: " + character.attractiveness;
    outputHTML += "<br>Mysticism: " + character.mysticism;
    outputHTML += "<br>Resolve Pool: " + character.resolvePool + "/" + character.resolvePool;
    outputHTML += "<br>Focus Pool: " + character.focusPool + "/" + character.focusPool;
    outputHTML += "<br>Mysticism Pool: " + character.mysticismPool + "/" + character.mysticismPool;
    outputHTML += "<br>Armor type: " + armors[character.armorType].name;
    outputHTML += "<br>Armor score: " + character.armor;

    outputHTML += "<br><br><b>Diety</b>";
    outputHTML += "<br>You worship " + character.diety;

    outputHTML += "<br><br><b>Careers</b>";

    for(var c = 0; c < character.careers.length; c++)
    {
        outputHTML += "<br>" + careers[character.careers[c]].name;
    }

    outputHTML += "<br><br><b>Skills</b>";

    for(var s = 0; s < character.skills.length; s++)
    {
        outputHTML += "<br>" + character.skills[s];
    }

    outputHTML += "<br><br><b>Connection Types</b>";

    for(var i = 0; i < character.connectionTypes.length; i++)
    {
        outputHTML += "<br>" + character.connectionTypes[i];
    }

    outputHTML += "<br><br><b>Connection</b>";

    for(var i = 0; i < character.connections.length; i++)
    {
        switch(character.connections[i].type)
        {
            case "Underworld":
                outputHTML += "<br>Your connection is "
                            + character.connections[i].nickName + " "
                            + character.connections[i].name + " who "
                            + character.connections[i].fact;
                break;
            case "Common":
                outputHTML += "<br>Your connection is "
                            + character.connections[i].name + " the "
                            + character.connections[i].job + " who "
                            + character.connections[i].fact;
                break;
            case "Noble":
                outputHTML += "<br>Your connection is "
                            + character.connections[i].title + " "
                            + character.connections[i].name + " of "
                            + character.connections[i].from + " who "
                            + character.connections[i].fact;
                break;
        }
    }

    outputHTML += "<br><br><b>Racial Ability</b>";
    outputHTML += "<br>" + character.racialAbilities[0];

    outputHTML += "<br><br><b>Class Abilities</b>";

    for(var j = 0; j < character.classAbilities.length; j++)
    {
        if(character.classAbilities[j].shortDescription != "")
        {
            outputHTML += "<br>" + character.classAbilities[j].name + " - " +
                                    character.classAbilities[j].shortDescription;
        }
        else
        {
            outputHTML += "<br>" + character.classAbilities[j].name;
        }
    }

    if(character.mutationCount > 0)
    {
        outputHTML += "<br><br><b>Mutations</b><br>";
        for(var j = 0; j < character.mutations.length; j++)
        {
            outputHTML += character.mutations[j].name + " - " +
                            character.mutations[j].description + "<br>";
        }
    }
    /*
    if(character.spells.length > 0)
    {
        outputHTML += "<br><br><b>Spells</b>";

        for(var j = 0; j < character.spells.length; j++)
        {
            outputHTML += "<br>" + character.spells[j].name;
            outputHTML += " (" + character.spells[j].type + ") ";
            outputHTML += " - Has an effect die of " + character.spells[j].die;
            outputHTML += " - Effecting " + character.spells[j].effect;
            outputHTML += " - Costing " + character.spells[j].cost + " Mysticism / Focus";
        }
    }
    */

    if(character.spellKeywords.length > 0)
    {
        outputHTML += "<br><br><b>Spell keywords</b>";

        for(var j = 0; j < character.spellKeywords.length; j++)
        {
            outputHTML += "<br>" + character.spellKeywords[j];
        }
    }

    outputHTML += "<br><br><b>Weapon Skills</b>";

    for(var j = 0; j < character.weaponSkills.length; j++)
    {
        outputHTML += "<br>" + character.weaponSkills[j];
    }

    outputHTML += "<br><br><b>Weapons</b>";

    for(var j = 0; j < character.weapons.length; j++)
    {
        outputHTML += "<br>" + character.weapons[j].name;
    }

    outputHTML += "<br><br><b>Equipment</b>";
    outputHTML += "<br>" + character.equipment[0];

    outputHTML += "<br><br><b>Personality quirks</b>";

    for(var j = 0; j < character.quirks.length; j++)
    {
        outputHTML += "<br>" + character.quirks[j];
    }

    output.innerHTML = outputHTML;
    gadgets.window.adjustHeight();
}

function aaieCharacter()
{
    this.race = 0;
    this.class = 0;
    this.age = 0;
    this.armorType = 0;
    this.armor = 0;
    this.brawn = 0;
    this.athleticism = 0;
    this.resolve = 0;
    this.academics = 0;
    this.knowledge = 0;
    this.focus = 0;
    this.leadership = 0;
    this.attractiveness = 0;
    this.mysticism = 0;
    this.resolvePool = 0;
    this.focusPool = 0;
    this.mysticismPool = 0;
    this.careers = [];
    this.connections = [];
    this.connectionTypes = [];
    this.equipment = [];
    this.mutations = [];
    this.mutationCount = 0;
    this.skills = [];
    this.weaponSkills = [];
    this.weapons = [];
    this.quirks = [];
    this.racialAbilities = [];
    this.classAbilities = [];
    this.diety = "";
    //this.spells = [];
    this.spellKeywords = [];
}

function aaieSpell()
{
    this.name = "";
    this.type = "";
    this.die = "";
    this.effect = "";
    this.cost = "";
}

function aaieAge(ageName)
{
    switch(ageName)
    {
        case "Young":
            this.name = "Young";
            this.careers = 1;
            this.resolvePool = 5;
            break;
        case "Adult":
            this.name = "Adult";
            this.careers = 2;
            this.resolvePool = 0;
            break;
        case "Middle aged":
            this.name = "Middle aged";
            this.careers = 3;
            this.resolvePool = 0;
            break;
        case "Seasoned":
            this.name = "Seasoned";
            this.careers = 4;
            this.resolvePool = -5;
            break;
        default:
            this.name = "Adult";
            this.careers = 2;
            this.resolveMod = 0;
    }
}

function aaieClass(className)
{
    switch(className)
    {
        case "Priest":
            this.name = "Priest";
            this.brawn = 0;
            this.athleticism = 0;
            this.resolve = 0;
            this.academics = 0;
            this.knowledge = 0;
            this.focus = 0;
            this.leadership = 0;
            this.attractiveness = 0;
            this.mysticism = 0;
            this.resolvePool = 0;
            this.focusPool = 5;
            this.mysticismPool = 0;
            break;
        case "Thief":
            this.name = "Thief";
            this.brawn = 0;
            this.athleticism = 1;
            this.resolve = 0;
            this.academics = 0;
            this.knowledge = 0;
            this.focus = 0;
            this.leadership = 0;
            this.attractiveness = 0;
            this.mysticism = 0;
            this.resolvePool = 0;
            this.focusPool = 0;
            this.mysticismPool = 0;
            break;
        case "Warrior":
            this.name = "Warrior";
            this.brawn = 0;
            this.athleticism = 0;
            this.resolve = 0;
            this.academics = 0;
            this.knowledge = 0;
            this.focus = 0;
            this.leadership = 0;
            this.attractiveness = 0;
            this.mysticism = 0;
            this.resolvePool = 5;
            this.focusPool = 0;
            this.mysticismPool = 0;
            break;
        case "Wizard":
            this.name = "Wizard";
            this.brawn = 0;
            this.athleticism = 0;
            this.resolve = 0;
            this.academics = 0;
            this.knowledge = 0;
            this.focus = 0;
            this.leadership = 0;
            this.attractiveness = 0;
            this.mysticism = 0;
            this.resolvePool = 0;
            this.focusPool = 0;
            this.mysticismPool = 5;
            break;
        default:
            this.name = "Warrior";
            this.brawn = 0;
            this.athleticism = 0;
            this.resolve = 0;
            this.academics = 0;
            this.knowledge = 0;
            this.focus = 0;
            this.leadership = 0;
            this.attractiveness = 0;
            this.mysticism = 0;
            this.resolvePool = 5;
            this.focusPool = 0;
            this.mysticismPool = 0;
    }
}

function aaieRace(raceName)
{
    switch(raceName)
    {
        case "Dwarf":
            this.name = "Dwarf";
            this.brawnDice = 1;
            this.brawnSides = 6;
            this.athleticismDice = 1;
            this.athleticismSides = 4;
            this.resolveDice = 1;
            this.resolveSides = 8;
            this.academicsSides = 1;
            this.academicsDice = 4;
            this.knowledgeSides = 1;
            this.knowledgeDice = 6;
            this.focusSides = 1;
            this.focusDice = 6;
            this.leadershipSides = 1;
            this.leadershipDice = 6;
            this.attractivenessSides = 1;
            this.attractivenessDice = 6;
            this.mysticismSides = 1;
            this.mysticismDice = 4;
            break;
        case "Elf":
            this.name = "Elf";
            this.brawnDice = 1;
            this.brawnSides = 4;
            this.athleticismDice = 1;
            this.athleticismSides = 8;
            this.resolveDice = 1;
            this.resolveSides = 4;
            this.academicsSides = 1;
            this.academicsDice = 6;
            this.knowledgeSides = 1;
            this.knowledgeDice = 6;
            this.focusSides = 1;
            this.focusDice = 6;
            this.leadershipSides = 1;
            this.leadershipDice = 4;
            this.attractivenessSides = 1;
            this.attractivenessDice = 4;
            this.mysticismSides = 1;
            this.mysticismDice = 8;
            break;
        case "Halfling":
            this.name = "Halfling";
            this.brawnDice = 1;
            this.brawnSides = 6;
            this.athleticismDice = 1;
            this.athleticismSides = 6;
            this.resolveDice = 1;
            this.resolveSides = 4;
            this.academicsSides = 1;
            this.academicsDice = 6;
            this.knowledgeSides = 1;
            this.knowledgeDice = 8;
            this.focusSides = 1;
            this.focusDice = 6;
            this.leadershipSides = 1;
            this.leadershipDice = 4;
            this.attractivenessSides = 1;
            this.attractivenessDice = 6;
            this.mysticismSides = 1;
            this.mysticismDice = 6;
            break;
        case "Human":
            this.name = "Human";
            this.brawnDice = 1;
            this.brawnSides = 6;
            this.athleticismDice = 1;
            this.athleticismSides = 6;
            this.resolveDice = 1;
            this.resolveSides = 6;
            this.academicsSides = 1;
            this.academicsDice = 6;
            this.knowledgeSides = 1;
            this.knowledgeDice = 4;
            this.focusSides = 1;
            this.focusDice = 4;
            this.leadershipSides = 1;
            this.leadershipDice = 8;
            this.attractivenessSides = 1;
            this.attractivenessDice = 6;
            this.mysticismSides = 1;
            this.mysticismDice = 6;
            break;
        case "Minotaur":
            this.name = "Minotaur";
            this.brawnDice = 1;
            this.brawnSides = 8;
            this.athleticismDice = 1;
            this.athleticismSides = 4;
            this.resolveDice = 1;
            this.resolveSides = 8;
            this.academicsSides = 1;
            this.academicsDice = 4;
            this.knowledgeSides = 1;
            this.knowledgeDice = 6;
            this.focusSides = 1;
            this.focusDice = 6;
            this.leadershipSides = 1;
            this.leadershipDice = 6;
            this.attractivenessSides = 1;
            this.attractivenessDice = 4;
            this.mysticismSides = 1;
            this.mysticismDice = 4;
            break;
        default:
            this.name = "Human";
            this.brawnDice = 1;
            this.brawnSides = 6;
            this.athleticismDice = 1;
            this.athleticismSides = 6;
            this.resolveDice = 1;
            this.resolveSides = 6;
            this.academicsSides = 1;
            this.academicsDice = 6;
            this.knowledgeSides = 1;
            this.knowledgeDice = 4;
            this.focusSides = 1;
            this.focusDice = 4;
            this.leadershipSides = 1;
            this.leadershipDice = 8;
            this.attractivenessSides = 1;
            this.attractivenessDice = 6;
            this.mysticismSides = 1;
            this.mysticismDice = 6;
    }
}

function aaieArmor(armorName)
{
    switch(armorName)
    {
        case "None":
            this.name = "None";
            this.score = 0;
            this.attribute = "Athleticism";
            this.focusPool = 10;
            this.athleticism = 0;
            break;
        case "Leather armor":
            this.name = "Leather armor";
            this.score = 2;
            this.attribute = "Athleticism";
            this.focusPool = 5;
            this.athleticism = 0;
            break;
        case "Banded armor":
            this.name = "Banded armor";
            this.score = 3;
            this.attribute = "Athleticism";
            this.focusPool = 0;
            this.athleticism = 0;
            break;
        case "Buckler and quarter plate":
            this.name = "Buckler and quarter plate";
            this.score = 7;
            this.attribute = "Focus";
            this.focusPool = 0;
            this.athleticism = 0;
            break;
        case "Wicker armor":
            this.name = "Wicker armor";
            this.score = 3;
            this.attribute = "Athleticism";
            this.focusPool = 0;
            this.athleticism = 0;
            break;
        case "Chain mail":
            this.name = "Chain mail";
            this.score = 4;
            this.attribute = "Athleticism";
            this.focusPool = 0;
            this.athleticism = 0;
            break;
        case "Banded armor with shield":
            this.name = "Banded armor with shield";
            this.score = 5;
            this.attribute = "Brawn";
            this.focusPool = 0;
            this.athleticism = 0;
            break;
        case "Scale mail":
            this.name = "Scale mail";
            this.score = 5;
            this.attribute = "Brawn";
            this.focusPool = 0;
            this.athleticism = 0;
            break;
        case "Half plate":
            this.name = "Half plate";
            this.score = 6;
            this.attribute = "Brawn";
            this.focusPool = -5;
            this.athleticism = 0;
            break;
        case "Plate mail":
            this.name = "Plate mail";
            this.score = 7;
            this.attribute = "Brawn";
            this.focusPool = -10;
            this.athleticism = -1;
            break;
        default:
            this.name = "None";
            this.score = 0;
            this.attribute = "Athleticism";
            this.focusPool = 10;
            this.athleticism = 0;
    }
}

function aaieCareer(careerName)
{
    switch(careerName)
    {
        default:
            this.name = careerName;
    }
}

function aaieConnection()
{
    this.title = "";
    this.name = "";
    this.nickName = "";
    this.type = "";
    this.fact = "";
    this.job = "";
    this.from = "";
}

function aaiePeasantWeapon(weaponName)
{
    switch(weaponName)
    {
        case "Fists":
            this.name = "Fists";
            this.damage = "1d4";
            this.attribute = "Brawn";
            this.perks = ["2nd attack"];
            this.range = 0;
            this.skilled = "No";
            break;
        case "Sharp stick":
            this.name = "Sharp stick";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 0;
            this.skilled = "No";
            break;
        case "Brick":
            this.name = "Brick";
            this.damage = "1d4";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 0;
            this.skilled = "No";
            break;
        case "Rolling pin":
            this.name = "Rolling pin";
            this.damage = "1d4";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 0;
            this.skilled = "No";
            break;
        case "Chair leg":
            this.name = "Chair leg";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 0;
            this.skilled = "No";
            break;
        case "Rake":
            this.name = "Rake";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = ["Reach"];
            this.range = 0;
            this.skilled = "No";
            break;
        case "Hat pin":
            this.name = "Hat pin";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = ["2nd attack"];
            this.range = 0;
            this.skilled = "No";
            break;
        case "Cleaver":
            this.name = "Cleaver";
            this.damage = "1d6";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 0;
            this.skilled = "No";
            break;
        case "Large dead fish":
            this.name = "Large dead fish";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 0;
            this.skilled = "No";
            break;
        case "Frying pan":
            this.name = "Frying pan";
            this.damage = "1d6";
            this.attribute = "Brawn";
            this.perks = ["Stun"];
            this.range = 0;
            this.skilled = "No";
            break;
        case "Iron pot":
            this.name = "Iron pot";
            this.damage = "1d4";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 0;
            this.skilled = "No";
            break;
        case "Chunk of fire wood":
            this.name = "Chunk of fire wood";
            this.damage = "1d4";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 0;
            this.skilled = "No";
            break;
        case "Pitch fork":
            this.name = "Pitch fork";
            this.damage = "1d6";
            this.attribute = "Brawn";
            this.perks = ["Reach"];
            this.range = 0;
            this.skilled = "No";
            break;
        case "Sling shot":
            this.name = "Sling shot";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 5;
            this.skilled = "No";
            break;
        case "Log":
            this.name = "Log";
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = ["Stun", "Attacks every other round"];
            this.range = 0;
            this.skilled = "No";
            break;
        case "Trash bin lid":
            this.name = "Trash bin lid";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 0;
            this.skilled = "No";
            break;
        case "Fire poker":
            this.name = "Fire poker";
            this.damage = "1d6";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 0;
            this.skilled = "No";
            break;
        case "Branding iron":
            this.name = "Branding iron";
            this.damage = "1d6";
            this.attribute = "Brawn";
            this.perks = ["Think of the possibilities"];
            this.range = 0;
            this.skilled = "No";
            break;
        case "Broom":
            this.name = "Broom";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = ["Stun"];
            this.range = 0;
            this.skilled = "No";
            break;
        case "Dead chicken":
            this.name = "Dead chicken";
            this.damage = "1d6";
            this.attribute = "Knowledge";
            this.perks = ["Stun", "You really have to KNOW how to wield a chicken"];
            this.range = 0;
            this.skilled = "No";
            break;
        default:
            this.name = weaponName;
            this.damage = "1d4";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 0;
            this.skilled = "No";
    }
}

function aaieLightWeapon(weaponName)
{
    switch(weaponName)
    {
        case "Dagger":
            this.name = "Dagger";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Staff":
            this.name = "Staff";
            this.damage = "1d6";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Whip":
            this.name = "Whip";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = ["Entangle"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Club":
            this.name = "Club";
            this.damage = "1d6";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Short sword":
            this.name = "Short sword";
            this.damage = "1d6";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Rapier":
            this.name = "Rapier";
            this.damage = "1d6";
            this.attribute = "Athleticism";
            this.perks = ["2nd attack"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Punch blade":
            this.name = "Punch blade";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = ["2nd attack"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Rock pick":
            this.name = "Rock pick";
            this.damage = "1d6";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Hand axe":
            this.name = "Hand axe";
            this.damage = "1d6";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Hand hammer":
            this.name = "Hand hammer";
            this.damage = "1d6";
            this.attribute = "Brawn";
            this.perks = ["Stun"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Quarter staff":
            this.name = "Quarter staff";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = ["2nd attack"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Short spear":
            this.name = "Short spear";
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Sap":
            this.name = "Sap";
            this.damage = "1d4";
            this.attribute = "Brawn";
            this.perks = ["Stun"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Gladius":
            this.name = "Gladius";
            this.damage = "1d6";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Metal Baton":
            this.name = "Metal Baton";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = ["Stun"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Straight Razor":
            this.name = "Straight Razor";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = ["2nd attack"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Man catcher":
            this.name = "Man catcher";
            this.damage = "0";
            this.attribute = "Brawn";
            this.perks = ["Entanle"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Shield blade":
            this.name = "Shield blade";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = ["+1 armor score"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Sai":
            this.name = "Sai";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = ["Disarm"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Chain and spike":
            this.name = "Chain and spike";
            this.damage = "1d4";
            this.attribute = "Knowledge";
            this.perks = ["2nd attack"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        default:
            this.name = weaponName;
            this.damage = "1d6";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
    }
}

function aaieMediumWeapon(weaponName)
{
    switch(weaponName)
    {
        case "Sabre":
            this.name = "Sabre";
            this.damage = "1d6";
            this.attribute = "Athleticism";
            this.perks = ["2nd attack"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Long sword":
            this.name = "Long sword";
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = ["+1d4 damage"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "War hammer":
            this.name = "War hammer";
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = ["Stun"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Spear":
            this.name = "Spear";
            this.damage = "1d6";
            this.attribute = "Athleticism";
            this.perks = ["Reach"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Battle axe":
            this.name = "Battle axe";
            this.damage = "1d10";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Heavy pole":
            this.name = "Heavy pole";
            this.damage = "1d6";
            this.attribute = "Athleticism";
            this.perks = ["2nd attack"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Katana":
            this.name = "Katana";
            this.damage = "1d8";
            this.attribute = "Athleticism";
            this.perks = ["+1d4 damage"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Pick axe":
            this.name = "Pick axe";
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Flail":
            this.name = "Flail";
            this.damage = "1d8";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Mace":
            this.name = "Mace";
            this.damage = "1d6";
            this.attribute = "Brawn";
            this.perks = ["Stun"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Hatchet":
            this.name = "Hatchet";
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Scimitar":
            this.name = "Scimitar";
            this.damage = "1d6";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Sickle":
            this.name = "Sickle";
            this.damage = "1d6";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Sword cane":
            this.name = "Sword cane";
            this.damage = "2d4";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Shield spike":
            this.name = "Shield spike";
            this.damage = "1d6";
            this.attribute = "Brawn";
            this.perks = ["+1 armor score"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Light lance":
            this.name = "Light lance";
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = ["1d10 damage on horseback"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Ball and chain":
            this.name = "Ball and chain";
            this.damage = "1d6";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Hand maul":
            this.name = "Hand maul";
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = ["Stun"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Falchion":
            this.name = "Falchion";
            this.damage = "1d8";
            this.attribute = "Brawn or Athleticism";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Katana":
            this.name = "Katana";
            this.damage = "1d8";
            this.attribute = "Athleticism";
            this.perks = ["+1d6 damage"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        default:
            this.name = weaponName;
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
    }
}

function aaieHeavyWeapon(weaponName)
{
    switch(weaponName)
    {
        case "Great sword":
            this.name = "Great sword";
            this.damage = "1d10";
            this.attribute = "Brawn";
            this.perks = ["Reach"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Great axe":
            this.name = "Great axe";
            this.damage = "1d12";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Net":
            this.name = "Net";
            this.damage = "1d6";
            this.attribute = "Athleticism";
            this.perks = ["Entangle"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Heavy mace":
            this.name = "Heavy mace";
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Heavy flail":
            this.name = "Heavy flail";
            this.damage = "2d8";
            this.attribute = "Brawn";
            this.perks = ["Attacks last"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Giant club":
            this.name = "Giant club";
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Pole arm":
            this.name = "Pole arm";
            this.damage = "1d4";
            this.attribute = "Brawn";
            this.perks = ["Reach"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Trident":
            this.name = "Trident";
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = ["Entangle", "Reach"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Scythe":
            this.name = "Scythe";
            this.damage = "1d10";
            this.attribute = "Brawn";
            this.perks = ["+1d6 damage"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Great maul":
            this.name = "Great maul";
            this.damage = "1d10";
            this.attribute = "Brawn";
            this.perks = ["Knockdown"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Heavy lance":
            this.name = "Heavy lance";
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = ["2d10 damage in a mounted charge"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Morning star":
            this.name = "Morning star";
            this.damage = "1d10";
            this.attribute = "Brawn";
            this.perks = ["Stun"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Razor shield":
            this.name = "Razor shield";
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = ["+2 armor score"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Guisarme":
            this.name = "Guisarme";
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = ["Reach", "+1d6 damage", "Too long for tight spaces or close targets"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Halberd":
            this.name = "Halberd";
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = ["Reach", "Knock down", "Too long for tight spaces or close targets"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Long spear":
            this.name = "Long spear";
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = ["Can be set vs charge for 2x charge"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Great club":
            this.name = "Great club";
            this.damage = "1d10";
            this.attribute = "Athleticism";
            this.perks = ["Stun"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Heavy ball and chain":
            this.name = "Heavy ball and chain";
            this.damage = "1d10";
            this.attribute = "Knowledge";
            this.perks = ["Knock down", "Attacks every other round"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Claymore":
            this.name = "Claymore";
            this.damage = "1d10";
            this.attribute = "Brawn";
            this.perks = ["Attacks last", "Stun", "+1d8 damage"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        case "Nodachi":
            this.name = "Nodachi";
            this.damage = "1d8";
            this.attribute = "Athleticism";
            this.perks = ["+1d10 damage"];
            this.range = 0;
            this.skilled = "Yes";
            break;
        default:
            this.name = weaponName;
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 0;
            this.skilled = "Yes";
    }
}

function aaieRangedWeapon(weaponName)
{
    switch(weaponName)
    {
        case "Short bow":
            this.name = "Short bow";
            this.damage = "1d6";
            this.attribute = "Athleticism";
            this.perks = ["2nd attack"];
            this.range=10;
            this.skilled = "Yes";
            break;
        case "Long bow":
            this.name = "Long bow";
            this.damage = "1d8";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 15;
            this.skilled = "Yes";
            break;
        case "Hand crossbow":
            this.name = "Hand crossbow";
            this.damage = "1d6";
            this.attribute = "Focus";
            this.perks = [""];
            this.range = 10;
            this.skilled = "Yes";
            break;
        case "Heavy crossbow":
            this.name = "Heavy crossbow";
            this.damage = "1d12";
            this.attribute = "Focus";
            this.perks = ["Attacks last"];
            this.range = 12;
            this.skilled = "Yes";
            break;
        case "Sling":
            this.name = "Sling";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 8;
            this.skilled = "Yes";
            break;
        case "Javelin":
            this.name = "Javelin";
            this.damage = "1d8";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 5;
            this.skilled = "Yes";
            break;
        case "Dart":
            this.name = "Dart";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = ["2nd attack"];
            this.range = 5;
            this.skilled = "Yes";
            break;
        case "Blowgun":
            this.name = "Blowgun";
            this.damage = "1d8";
            this.attribute = "Brawn";
            this.perks = [""];
            this.range = 5;
            this.skilled = "Yes";
            break;
        case "Bolo":
            this.name = "Bolo";
            this.damage = "1d4";
            this.attribute = "Athleticism";
            this.perks = ["Entangle"];
            this.range = 5;
            this.skilled = "Yes";
            break;
        case "Recurve bow":
            this.name = "Recurve bow";
            this.damage = "1d10";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 8;
            this.skilled = "Yes";
            break;
        default:
            this.name = weaponName;
            this.damage = "1d8";
            this.attribute = "Athleticism";
            this.perks = [""];
            this.range = 5;
            this.skilled = "Yes";
    }
}

function aaieAbility(abilityName)
{
    switch(abilityName)
    {
        // Priest abilities
        case "Healing prayer":
            this.name = "Healing prayer";
            this.shortDescription = "You ask your god to heal .. and it might. Or it might decide to be a fickle prick.";
            this.description = "<ul><li>Attribute: Knowledge</li><li>Difficulty: 12</li><li>Costs: 1d6 myst pool / must touch targets.</li><li>Common: heal self or ally 1d6</li><li>Perk 1: Heal only an ally an additional 1d8</li><li>Perk 2: Heal only self 1d8 an additional 1d6</li><li>Perk 3: Heal two allies and additional 1d6</li><li>Critical: targets are blessed -2 Difficulty for their next action.</li><li>Fumble: your god is a jerk, Harm target for 1d6 off their resolve pool.</li></ul>";
            break;
        case "Smite":
            this.name = "Smite";
            this.shortDescription = "You ask your god to bless your weapon with holy power. Some times the gods get carried away";
            this.description = "<ul><li>Attribute: Knowledge</li><li>Difficulty 15</li><li>Costs: 1d6 myst pool</li><li>Common: add +1d6 damage to your next successful weapon attack.</li><li>Perk 1: stun perk added to next successful attack</li><li>Perk 2: -2 difficulty on next successful attack</li><li>Perk 3: +1d6 damage to the next two successful attacks</li><li>Critical: Earn 1 wild card die for the next attack</li><li>Fumble: Holy energy feeds back from your weapon take 1d6 damage.</li></ul>";
            break;
        case "Effect undead":
            this.name = "Effect undead";
            this.shortDescription = "You ask your god to help you deal with some undead.";
            this.description = "<ul><li>Attribute: Knowledge</li><li>Difficulty 12 + number of targets</li><li>Costs: 1d6 myst pool +1 per number of targets</li><li>Common: all undead in your area (Area = gms call) take 1d10 damage</li><li>Perk 1: stun targets</li><li>Perk 2: cause fear</li><li>Perk 3: add 1d10 damage</li><li>Critical: Destroy a number of dead up to 1d6 per character focus attribute</li><li>Fumble: The dead are not amused, you are their only target next round.</li></ul>";
            break;
        case "Detect evil / good":
            this.name = "Detect evil / good";
            this.shortDescription = "You pray to your god asking it to point out who is naughty and who is nice.";
            this.description = "<ul><li>Attribute: focus</li><li>Difficulty 12 + number of targets</li><li>Costs: 1d6 Myst pool +1 per number of targets</li><li>Common: The targets who are of the type sought glow slightly</li><li>Perk 1: The intensity of the glow shows the intensity of the type.</li><li>Perk 2: The targets who are of eh opposite type glow another color</li><li>Perk 3: Only the caster can see the glow</li><li>Critical: Earn a wild card die for your next turn</li><li>Fumble: your god has no time to sort the souls of the living, For the rest of the day the caster glows a bright (roll 1d4) <ol><li>Red</li><li>Golden</li><li>Green</li><li>White light</li></ol></li></ul>";
            break;
        case "Detect magic":
            this.name = "Detect magic";
            this.shortDescription = "Your god can show you what is true magic and what is a hoax, or the gods might just be window shopping.";
            this.description = "<ul><li>Attribute: focus</li><li>Difficulty 15</li><li>Costs: 1d6 Myst pool</li><li>Common: If the item is magical it will glow</li><li>Perk 1: The intensity of the glow shows the intensity of the magic</li><li>Perk 2: your god tells you what type of magic (ie: fire, water, harmful, necromantic, or..whatever) the item contains.</li><li>Perk 3: This prayer has cost 0 Myst.</li><li>Critical: you identify the item out right</li><li>Fumble: your god sees the magic and likes it. If this item was magical it's not now.</li></ul>";
            break;
        case "Cure poison":
            this.name = "Cure poison";
            this.shortDescription = "In hopes of saving others you have learned a prayer o' your god granting salivation from poisons.";
            this.description = "<ul><li>Attribute: Knowledge</li><li>Difficulty 16</li><li>Costs: 1d8 Myst pool</li><li>Common: Stops the poison from doing further damage.</li><li>Perk 1: heals 1d6 resolve to the target</li><li>Perk 2: Extracts the poison so it may be kept.</li><li>Perk 3: Restores 1d6 of the targets focus in the process</li><li>Critical: Grants the target minor resistance to this kind of poison forever.</li><li>Fumble: Not only is the target not cured, but caster takes on the poison and is now suffering the effects as well for 1d6 rounds.</li></ul>";
            break;
        case "Create water":
            this.name = "Create water";
            this.shortDescription = "A great blessing this water, awesome really, when you think of what it takes to get it here.";
            this.description = "<ul><li>Attribute: Knowledge</li><li>Difficulty 15</li><li>Costs: 1d8 Myst pool</li><li>Common: Creates 1d6 gallons of potable water.</li><li>Perk 1: Drinking the water heals for 1d6 resolve once</li><li>Perk 2: The water can be, salty, ice cold or boiling at your discretion</li><li>Perk 3: The water is wine</li><li>Critical: earn one wild card die for your next action</li><li>Fumble: Not only does your god not give you any water it takes some. you take 1d10 damage from dehydration.</li></ul>";
            break;
        case "Bless":
            this.name = "Bless";
            this.shortDescription = "You pray for your deities blessing, and hope that you have done so wisely.";
            this.description = "<ul><li>Attribute: Focus</li><li>Difficulty 16</li><li>Costs: 1d8 Myst pool</li><li>Common: Gives the target a -2 bonus on all rolls for the next turn.</li><li>Perk 1: May effect 1 target per 1 additional myst spent.</li><li>Perk 2: grants and additional (-1d4) bonus.</li><li>Perk 3: Grants the target +1d4 armor score</li><li>Critical:The deity?s light shines, this bonus lasts all day, a target can only have one blessing at a time.</li><li>Fumble: The god does not think the target is worthy and curses it instead all of the targets rolls for the rest of the day will be at a +1d6 difficulty.</li></ul>";
            break;
        case "Holy weapon":
            this.name = "Holy weapon";
            this.shortDescription = "When your weapon strikes, your god makes sure soles will be at rest. Lets pray the weapon can handle the load.";
            this.description = "<ul><li>Attribute: Focus</li><li>Difficulty 20</li><li>Costs: 1d6 + (see below) Myst<br>Lasts 1d6 rounds +1 per extra focus spent</li><li>Common: .This weapon does x2 damage VS the undead</li><li>Perk 1: Gains the 2x attack perk</li><li>Perk 2: Gains the Stun perk</li><li>Perk 3: Gains the distract perk</li><li>Critical: Duration x 2</li><li>Fumble: Weapon explodes doing 1d10 resolve damage to every one nearby (GM's Discretion)</li></ul>";
            break;
        case "Light":
            this.name = "Light";
            this.shortDescription = "You call to your god to push away the shadows.";
            this.description = "<ul><li>Attribute: Focus</li><li>Difficulty 15</li><li>Costs: 1d6 + (see below)</li><li>Common: You create a 30 by 30 foot sphere (3 x 3 units) of light, making the area bright as day. The light is centered on the caster, and moves with him. It lasts for 10 turns +1 per focus spent</li><li>Perk 1: The light can cause blinding if centered on a target's eyes</li><li>Perk 2: The light causes 1d6 damage to any evil creature in it's sphere</li><li>Perk 3: The light can be centered on an inanimate object.</li><li>Critical: The light can be permanent if centered on an inanimate object.</li><li>Fumble: Your god is not in the mood for light, and drops a 30 by 30 (3x 3 units) foot sphere centered on the caster into inky darkness. Any one in this darkness makes all rolls at +5 difficulty.</li></ul>";
            break;
        case "Muscle of your lord":
            this.name = "Muscle of your lord";
            this.shortDescription = "";
            this.description = "";
            break;
        case "Unseen hand of the holy":
            this.name = "Unseen hand of the holy";
            this.shortDescription = "";
            this.description = "";
            break;
        // Thief abilities
        case "Assassin's strike":
            this.name = "Assassin's strike";
            this.shortDescription = "You wait for an opening and strike at the poor bastards soft spots. He never even saw you there.";
            this.description = "<ul><li>Attribute: Athleticism.</li><li>Difficulty: armor of opponent +5</li><li>Costs: 1d6 focus</li><li>Common: Roll damage twice</li><li>Perk 1: add stun perk</li><li>Perk 2: add knock down perk</li><li>Perk 3: add attack x 2 (second attack is a normal attack)</li><li>Critical: Add 1d6 Dmg per character level.</li><li>Fumble: You leap from the shadows and... You trip! You lose next turn.</li></ul>";
            break;
        case "Open locks":
            this.name = "Open locks";
            this.shortDescription = "Your fingers are quick you mind is sharp, just a few more seconds, and ...";
            this.description = "<ul><li>Attribute: Knowledge</li><li>Difficulty: DC of lock (set by GM)</li><li>Costs: 1d6 focus + (see below)</li><li>Common: You can spend focus pool points to lower the DC of the lock You unlock the lock</li><li>Perk 1: You remove the lock it's yours now.</li><li>Perk 2: You can lock and unlock this lock freely now, as if you had the key.</li><li>Perk 3: your on a roll -1d6 Difficulty on your next lock picking check.</li><li>Critical: You can recognize the work of this lock smith in the future. -2 Difficulty to lock picking for the rest of this adventure.</li><li>Fumble: You broke the Damn lock nothing is going to unlock it now, call the fighter over to get all bashy.</li></ul>";
            break;
        case "Pick pocket":
            this.name = "Pick pocket";
            this.shortDescription = "There's the mark, stupid lout has no idea, just a little bump and... I'm gone.";
            this.description = "<ul><li>Attribute: Athleticism</li><li>Difficulty: 20 + GM's adjustment for the target. (Ie: a wallet might be easier than a watch) If you fail roll 1d10 If the result is under your Athleticism you are not detected if it is over you are detected.</li><li>Costs: 1d6 focus</li><li>Common: you steal 1 target item from the target.</li><li>Perk 1: You steal an additional 1d10 gold</li><li>Perk 2: You may also plant an item if you like</li><li>Perk 3: You may take an additional item (Gms choice)</li><li>Critical: the Gm must tell you the targets whole inventory, you can take what you want.</li><li>Fumble: You slip up, not only are you caught, but your hand is actually stuck in the targets pocket +4 to all difficulties next round.</li></ul>";
            break;
        case "Climb walls":
            this.name = "Climb walls";
            this.shortDescription = "That's the window four stories up. The Dukes chamber, an easy climb. I just wish this damn sleet would stop.";
            this.description = "<ul><li>Attribute: Athleticism</li><li>Difficulty: 20 + GM's adjustment for the target. (Ie: wall is wet, slick with goblin-snail slime..)</li><li>Costs: 1d6 focus (Player can modify the difficulty by spending Focus</li><li>Common: You can climb one story or roughly 20 feet.</li><li>Perk 1: You climb an additional 20 feet in one round, speedy.</li><li>Perk 2: You may make an attack with a light weapon if you have to.</li><li>Perk 3: You have this wall figured out -4 difficulty for the rest of the climb</li><li>Critical: you earn a wild card die for your next action.</li><li>Fumble: You fall and take 1d12 points of damage per story in elevation. This hurts. If you are over 3 stories up it will take you 2 rounds to fall. This gives a player time to shout something clever before the character dies.</li></ul>";
            break;
        case "Calling in a ticket":
            this.name = "Calling in a ticket";
            this.shortDescription = "I know people, lots of people, and one of those people is bound to know something.";
            this.description = "<ul><li>Attribute: Attractiveness</li><li>Difficulty: 20</li><li>Costs: None (this skill triggers a scene, where the interaction should be Role played)</li><li>Common: You can get one piece of relevant information from the connection</li><li>Perk 1: You may get an additional one piece of relevant information from the connection</li><li>Perk 2: The contact gives you some manner of mundane item that will help you out. (Gm's discretion on the item)</li><li>Perk 3: The connection gives you some monetary assistance (1d10 gold)</li><li>Critical: The Connection gives you physical assistance, in the form of a NPC helper, a guard or a thug, something appropriate, one level lower than the player.</li><li>Fumble: You have pissed of the connection making them an enemy. It might be irrational, it might be well founded, but either way write ENEMY next to the connection.(use a red pen if you have one)</li></ul>";
            break;
        case "Manipulate":
            this.name = "Manipulate";
            this.shortDescription = "I know what people want to hear, I push buttons, I can seduce, bargain, Fast talk or intimidate. Whatever it takes I get what I want. Or I close a bridge.";
            this.description = "<ul><li>Attribute: Attractiveness</li><li>Difficulty: 20 + (GM's discretion, some people just don't play)</li><li>Costs: none (this should trigger a scene where the results are role played.)</li><li>Common: You can manipulate the target into one minor action open the door</li><li>Perk 1: You can manipulate the target into two minor actions</li><li>Perk 2: You can talk the target into giving you 1d10 Gold. (assuming they have it)</li><li>Perk 3: You can now list the target as a connection.</li><li>Critical: Putty in your hands, they think you're BFF's</li><li>Fumble: This persons sees through your game and is highly offended by it, You can write them down as an enemy, they hate you, and will do what ever they can to make things hard on you. They are also forever immune to your line of crap. This could be really minor if it's the fruit cart guy, this could real suck if it's the King.</li></ul>";
            break;
        case "Find / remove traps":
            this.name = "Find / remove traps";
            this.shortDescription = "I can find em, and I can take em out. You need me more than I need you.";
            this.description = "<ul><li>Attribute: Academics</li><li>Difficulty: DC of the trap.</li><li>Costs: 1d6 Focus<br>This is two rolls one to find one to remove the player can lower the difficulty of either step by spending focus</li><li>Common: You notice a trap / you disarm the trap</li><li>Perk 1: You may bypass the trap leaving it in place but guaranteeing safe passage for your party.</li><li>Perk 2: You may rip the trap out, and keep it, you may reset it elsewhere.</li><li>Perk 3: You get a good idea on how this trap is made you get -4 Difficulty on all find /remove trap rolls for the rest of the game.</li><li>Critical: You Earn a Wild card die towards your next action. (This should help remove a trap you just found)</li><li>Fumble: The trap (if there was one) explodes in your face, doing double what ever it's original effect was. If there was not one at all you REALLY think there is. (the gm is going to lie to you now.)</li></ul>";
            break;
        case "Hide in shadows":
            this.name = "Hide in shadows";
            this.shortDescription = "To be successful in the business you've to stay to of sight and out of mind, until you want to be thought about.";
            this.description = "<ul><li>Attribute: Knowledge</li><li>Difficulty: 15 + (based on light and Gm discretion)</li><li>Costs: 1d6 Focus</li><li>Common: You blend into the shadows, spotting you is a DC = to your roll on MD20</li><li>Perk 1: You're good at this you may look at the HD20 to determine how hard it is to spot you</li><li>Perk 2: You may move slowly in the shadows and not be seen</li><li>Perk 3: You may strike an unawares target from the shadows for x2 damage.</li><li>Critical: You Earn a Wild card die towards your next action.</li><li>Fumble: You are seen before every one. If in combat you are their only target next round, duck and weave.</li></ul>";
            break;
        case "Move silently":
            this.name = "Move silently";
            this.shortDescription = "Stealth is the only ally you can count on.";
            this.description = "<ul><li>Attribute: Athleticism</li><li>Difficulty: 10 + armor score</li><li>Costs: 1d6 + (Can spend points of focus to lower the DC)</li><li>Common: you move slowly but quietly, hearing you is a DC vs your MD20Roll</li><li>Perk 1: You're good at this you may look at the HD20 to determine how hard it is to hear you</li><li>Perk 2: You may move full speed and not be heard</li><li>Perk 3: You may strike an unawares target from behind for x2 damage.</li><li>Critical: You Earn a Wild card die towards your next action.</li><li>Fumble: Did you drop a cowbell? EVERY ONE hears you, you suck at this.</li></ul>";
            break;
        case "Elusive target":
            this.name = "Elusive target";
            this.shortDescription = "Sometimes it's best to not get hit and come back when the bastard ain't looking, and you know, hit him in the knee with a pipe.";
            this.description = "<ul><li>Attribute: Focus</li><li>Difficulty: None</li><li>Costs: 1d6 + Focus</li><li>Common: You can add your Focus attribute to your current Armor score, but you give up you next attack.</li><li>Perk 1: You can add you athleticism to your armor score if it is higher than your focus</li><li>Perk 2: You may move out of the enemies attack reach , and force a new initiative roll for next round.</li><li>Perk 3: You may strike an unawares target from behind for x2 damage.</li><li>Critical: You may attack normally This round.</li><li>Fumble: your Armor score is at -6 this round because you botch your dodge so horribly.</li></ul>";
            break;
        case "Thug life":
            this.name = "Thug life";
            this.shortDescription = "You are the strong arm of the thieves guild";
            this.description = "";
            break;
        case "Even the gods are thieves":
            this.name = "Even the gods are thieves";
            this.shortDescription = "Seriously";
            this.description = "";
            break;
        // Warrior abilities
        case "Warrior strike":
            this.name = "Warrior strike";
            this.shortDescription = "This is the warriors go to strike. It is the rarest of abilities it's free in every way, and only provides a way for fighters to get perks on almost every strike.";
            this.description = "<ul><li>Attribute: Brawn</li><li>Difficulty: Vs opponent Armor Score</li><li>Costs: none</li><li>Common: You do normal damage</li><li>Perk 1: Stun opponent</li><li>Perk 2: Push opponent back (1d4)</li><li>Perk 3: Add 1d 10 damage.</li><li>Critical: X 2 damage.</li><li>Fumble: Use the combat fumble chart.</li></ul>";
            break;
        case "Flourish":
            this.name = "Flourish";
            this.shortDescription = "You wield your weapon with speed and dexterity, every one around you is impressed.";
            this.description = "<ul><li>Attribute: Athleticism</li><li>Difficulty: Vs opponent Armor Score</li><li>Costs: 1d6 focus</li><li>Common: You do normal damage</li><li>Perk 1: Reach</li><li>Perk 2: Push opponent back (1d4)</li><li>Perk 3: X2 attacks</li><li>Critical: Earn a wild card die for your next action.</li><li>Fumble: Use the combat fumble chart.</li></ul>";
            break;
        case "BASH":
            this.name = "BASH";
            this.shortDescription = "You love to crush things... All kinds of things... Inanimate objects are not safe around you. People who work in gift shops hate you.";
            this.description = "<ul><li>Attribute: Brawn</li><li>Effects inanimate objects only. (undead do not count, nice try)</li><li>Difficulty: Difficult 12 + (Gm discretion for material.)</li><li>Costs: None</li><li>Common: You do normal damage to the object</li><li>Perk 1: You can pick the object up and throw it (Gm arbitrates damage)</li><li>Perk 2: You crack the object cleanly in half. (If using perk 1 you can throw both halves WEEEE!)</li><li>Perk 3: You ?open the object? cleanly with 0 chance of breaking whats inside. Traps may still trigger.</li><li>Critical: You obliterate the object and anything near it. You destroy any traps that were on the object, Gm's discretion about what was in the object.</li><li>Fumble: Use the combat fumble chart.</li></ul>";
            break;
        case "Bull rush":
            this.name = "Bull rush";
            this.shortDescription = "If you are a minotaur you are insulted by the name of this ability.(but still use it) If you are anyone else you just enjoy running into people.";
            this.description = "<ul><li>Attribute: Brawn</li><li>Effects inanimate objects only. (undead do not count, nice try)</li><li>Difficulty: Armor score + Brawn of target</li><li>Costs: 1d6 focus</li><li>Common: You do 1d6 +brawn damage to the target and push it back 1 space</li><li>Perk 1: Stun target</li><li>Perk 2: Knock down target</li><li>Perk 3: damage = 1d6 + (brawn x2)</li><li>Critical: You may make a normal weapon attack at the end of your charge.</li><li>Fumble: Use the combat fumble chart.</li></ul>";
            break;
        case "Shout":
            this.name = "Shout";
            this.shortDescription = "Your natural leadership Inspires the others around you, perhaps their afraid of getting hit with an ax. HUDDLE UP!";
            this.description = "<ul><li>Attribute: Leadership</li><li>Effects Any friends in ear shot (gm's discretion)</li><li>Difficulty: 20</li><li>Costs: 1d6 focus</li><li>Common: All allies in ear shot can add your leadership score damage to their next attack</li><li>Perk 1: All allies in ear shot may subtract your leadership score from the difficulty of their next attack</li><li>Perk 2: All allies in range may add your leadership score to their Armor score for one round.</li><li>Perk 3: You may divide your leader ship to lower the value of the buffs granted but raise the duration. For example a 5 leader ship could be split into +3 damage for 2 rounds, or +2 damage for three rounds, or any other combo equaling five.</li><li>Critical: You may grant a Wild card die to any one ally in ear shot.</li><li>Fumble: Every one in ear shot looses 1d6 resolve pool because you said something utterly uninspiring. I Highly suggest role playing it.</li></ul>";
            break;
        case "Flurry of attacks":
            this.name = "Flurry of attacks";
            this.shortDescription = "You attack with a series of ringing blows. Ok, you can stop now, every on wants a turn.";
            this.description = "<ul><li>Attribute: Athleticism</li><li>Difficulty: Opponents Armor score</li><li>Costs: 1d6 focus</li><li>Common: You do normal damage to the object plus 1d6 for a series of lesser blows that land.</li><li>Perk 1: Attack X 2</li><li>Perk 2: -1d6 off opponents armor score for 1 round</li><li>Perk 3: Reach (opponent retreats)</li><li>Critical: Double damage</li><li>Fumble: Use the combat fumble chart.</li></ul>";
            break;
        case "I WILL kill you":
            this.name = "I WILL kill you";
            this.shortDescription = "You put every thing into your attack even if it kills you in the process.";
            this.description = "<ul><li>Attribute: Resolve</li><li>Difficulty: Opponents Armor score</li><li>Costs: Resolve up to 10</li><li>Common: You may spend up to 10 resolve and add it to the damage of your next attack, if your attack misses you still spend the resolve.</li><li>Perk 1: Stun</li><li>Perk 2: Knockdown</li><li>Perk 3: Crush</li><li>Critical: Eliminates the 10 point cap you really can kill yourself to take out your target.</li><li>Fumble: Use the combat fumble chart.</li></ul>";
            break;
        case "Cleave":
            this.name = "Cleave";
            this.shortDescription = "You cleave stuff";
            this.description = "<ul><li>Attribute: Athleticism</li><li>Difficulty: Vs Targets armor score</li><li>Costs: 1d6 focus</li><li>Common: If you kill your first target you may roll damage for an adjacent target as well.</li><li>Perk 1: +d6 damage to the second target.</li><li>Perk 2: Stun second target</li><li>Critical: You do not even have to kill your first target you simply get to roll damage on the second target regardless.</li><li>Fumble: Use the combat fumble chart</li></ul>";
            break;
        case "Brawler":
            this.name = "Brawler";
            this.shortDescription = "You're a badass brawler";
            this.description = "<ul><li>Attribute: (Roll 1d6) 1-3 Athleticism 4-6 Brawn</li><li>Difficulty: Targets armor score</li><li>Costs: none</li><li>Common: with your bare fists you can attack for 1d4 damage</li><li>Perk 1: 2x attacks</li><li>Perk 2: Damage +1d6</li><li>Perk 3: Stun</li><li>Critical: KTFO. Target is knocked down and takes 1d10 damage.</li><li>Fumble: You take an amazing beating. Epic in fact causing 1d10 damage and you are knocked down.</li></ul>";
            break;
        case "Grapple":
            this.name = "Grapple";
            this.shortDescription = "";
            this.description = "<ul><li>Attribute: Brawn</li><li>Difficulty: targets AC</li><li>Costs:1d6 focus</li><li>Common: You grab the opponent and have him grappled.<br>On you next turn if you maintain the grapple you can roll on the fighter grapple chart below. Each turn you maintain the grapple you can roll on the chart.</li><li>Enemy must roll a check with a difficulty = to your MD20 roll to break free.</li><li>Perk 1: Enemy is stunned</li><li>Perk 2: Use your HD20 for the opponents difficultly</li><li>Perk 3: Do 1d6 damage</li><li>Critical: You earn a wild card die for use on the grapple table.</li><li>Fumble: Use combat fumble chart</li></ul>";
            break;
        case "Battle mage":
            this.name = "Battle mage";
            this.shortDescription = "";
            this.description = "";
            break;
        case "Paladin":
            this.name = "Paladin";
            this.shortDescription = "";
            this.description = "";
            break;
        // Wizard abilities
        // Spell memorization is known by ALL wizards automatically.
        case "Spell memorization":
            this.name = "Spell memorization";
            this.shortDescription = "The wizard is trying something new. A player must use this skill when trying a spell containing new keywords.";
            this.description = "<ul><li>Casters may only attempt spells containing key words equaling 1+ their level (maximum key words = 5)</li><li>Difficulties are modified as follows.<ul><li>+1 per unknown key words used</li><li>+1 if the spell is ranged.</li><li>The effect is 1d6 per level of caster</li><li>The spell costs 1d6 focus and myst per level of caster</li></ul></li><li>Attribute: Academics</li><li>Difficulty Offense Vs armor of target + mods</li><li>Difficulty Summoning: Vs 12 + modifiers</li><li>Difficulty Defense: Vs 12 + modifiers</li><li>Difficulty of Utility: Vs 12 + modifiers</li><li>Costs: Myst and focus by spell level</li><li>Common: You perform the desired effect</li><li>The caster may write this spell down as a known spell.</li><li>Perk 1: you may learn 1 new key word</li><li>Perk 2: you may learn 2 new key words</li><li>Perk 3: you may learn 3 new key words</li><li>Critical: you may learn all the new key words</li><li>Fumble: Any new Key words in this spell must be written down as unlearned, and hey may not be attempted again until the cast reaches the next level.</li></ul>";
            break;
        case "General casting":
            this.name = "General casting";
            this.shortDescription = "This is a wizard's go to casting style. Throwing spells like crazy.";
            this.description = "<ul><li>Attribute: Academics</li><li>Difficulty Offense Vs armor of target</li><li>Difficulty Summoning: Vs 12+ modifiers</li><li>Difficulty Defense: Vs 12 + modifiers</li><li>Difficulty of Utility: Vs 12 + modifiers</li><li>Costs: Myst and focus by spell</li><li>Common: You do normal damage</li><li>Perk 1: Stun opponent</li><li>Perk 2: Push opponent back (1d4)</li><li>Perk 3: Add 1d10 damage.</li><li>Critical: X 2 damage.</li><li>Fumble: Use spell fumble table</li></ul>";
            break;
        case "Offensive caster":
            this.name = "Offensive caster";
            this.shortDescription = "You have put it into your mind that magic is to be used for the sloe purpose of destruction and death. You are not much fun at parties.";
            this.description = "<ul><li>Attribute: Academics</li><li>Difficulty Offense Vs armor of target ? casters academics</li><li>Difficulty Summoning: Vs 12 + modifiers</li><li>Difficulty Defense: Vs 12 + modifiers</li><li>Difficulty of Utility: Vs 12 + modifiers</li><li>Costs: Myst and focus by spell +<br>You may add more Myst to any spell to add damage. 1 point for 1 point.</li><li>Common: You do normal damage + (see above)</li><li>Perk 1: Stun opponent</li><li>Perk 2: knock down.</li><li>Perk 3: Push</li><li>Critical: X 2 damage.</li><li>Fumble: Use spell fumble table</li></ul>";
            break;
        case "Smooth casting":
            this.name = "Smooth casting";
            this.shortDescription = "You concentrate on what you're doing.";
            this.description = "<ul><li>Attribute: Academics</li><li>Difficulty Offense Vs armor of target</li><li>Difficulty Summoning: Vs 12 with modifiers</li><li>Difficulty Defense: Vs 12 with modifiers</li><li>Difficulty of Utility: Vs 12 with modifiers</li><li>Costs: Myst focus by spell +<br>you may elect to spend more focus before casting to lower the difficulty of the spell 1 point for 1 point.</li><li>Common: As per spell</li><li>Perk 1: Stun opponent</li><li>Perk 2: Knock down.</li><li>Perk 3: +1d6 damage</li><li>Critical: X 2 damage.</li><li>Fumble: Use spell fumble table</li></ul>";
            break;
        case "Sorceror":
            this.name = "Sorceror";
            this.shortDescription = "You are not an academic caster you wizardry is much more innate. Chances are you wear goth clothing and a lot of eye liner.";
            this.description = "<ul><li>Attribute: Roll 1d6 (roll each time you cast)<ul><li>1-3 Resolve</li><li>4-6 leadership</li></ul></li><li>Difficulty Offense Vs armor of target ? casters knowledge</li><li>Difficulty Summoning: Vs 10 + modifiers</li><li>Difficulty Defense: Vs 14 + modifiers</li><li>Difficulty of Utility: Vs 10 + modifiers</li><li>Costs: Myst and focus by spell</li><li>Common: You do normal damage</li><li>Perk 1: Stun opponent</li><li>Perk 2: knock down.</li><li>Perk 3: Focus cost is 0 you did not even think about it.</li><li>Critical: You earn a wild card die for your next action.</li><li>Fumble: Use spell fumble table</li></ul>";
            break;
        case "Elemental":
            this.name = "Elemental";
            this.shortDescription = "You have a great touch with elemental spells: Earth, Wind, Water, and Fire.";
            this.description = "<ul><li>Attribute: Academics</li><li>Difficulty Offense Vs armor of target</li><li>Difficulty Summoning: Vs 12 + modifiers</li><li>Difficulty Defense: Vs 12 + modifiers</li><li>Difficulty of Utility: Vs 12 + modifiers</li><li>Costs: Myst and focus by spell</li><li>Any spell you cast that has an elemental element (IE: Fiery, or Icy etc, Liquid, Earth) costs 0 Focus.</li><li>Common: You do normal damage</li><li>Perk 1: Stun opponent</li><li>Perk 2: Knock down.</li><li>Perk 3: Entangle</li><li>Critical: X 2 damage.</li><li>Fumble: Use spell fumble table</li></ul>";
            break;
        case "Demonology":
            this.name = "Demonology";
            this.shortDescription = "You get your magic from the darker planes, you have summoned a demon that grants you powers. Great decision making on your part, this always ends well.";
            this.description = "<ul><li>Attribute: Academics</li><li>Difficulty: Difficulty Offense Vs armor of target</li><li>Difficulty Summoning: Vs 12 + modifiers ? casters academics</li><li>Difficulty Defense: Vs 12 + modifiers</li><li>Difficulty of Utility: Vs 12 + modifiers</li><li>Costs: Myst and focus by spell</li><li>You have a demon familiar that follows you around, only you can see him, he talks to you he often and has a taste for (Roll 1d6)<ol><li>Gold</li><li>Human souls</li><li>Food</li><li>Alcohol</li><li>Life energy from plants</li><li>Blood</li></ol>He will appear to claim it.</li><li>Common: You do normal damage</li><li>Perk 1: Stun opponent</li><li>Perk 2: knock down.</li><li>Perk 3: Entangle</li><li>Critical: X 2 damage.</li><li>Fumble: You have asked to much and not given any thing in return your demon will not let you cast spells until you give it what it demands. This is free license for the GM to mess with you.</li></ul>";
            break;
        case "Defensive caster":
            this.name = "Defensive caster";
            this.shortDescription = "You like to keep you and others from getting hurt.";
            this.description = "<ul><li>Attribute: Academics</li><li>Difficulty Offense Vs armor of target</li><li>Difficulty Summoning: Vs 12 + modifiers</li><li>Difficulty Defense: Vs 12 + modifiers ? caster academics</li><li>Difficulty of Utility: Vs 12 + modifiers</li><li>Costs: Myst and focus by spell<br>Any spell Defense type spell that you cast costs 0 focus</li><li>Common: You do normal damage</li><li>Perk 1: Range</li><li>Perk 2: Resistance to physical attacks for 1 round</li><li>Perk 3: Entangle</li><li>Critical: You earn a wild card die you or any one else may use within the round.</li><li>Fumble: Use spell fumble table</li></ul>";
            break;
        case "Glass cannon":
            this.name = "Glass cannon";
            this.shortDescription = "You sacrifice your resolve for more arcane power ...Gooood.";
            this.description = "<ul><li>Attribute: Academics</li><li>Difficulty Offense Vs armor of target</li><li>Difficulty Summoning: Vs 12 + modifiers</li><li>Difficulty Defense: Vs 12 + modifiers</li><li>Difficulty of Utility: Vs 12 + modifiers</li><li>Costs: Varies by spell<br>When every you cast you may choose to move 1d10 resolve into your myst pool</li><li>Common: You do normal damage</li><li>Perk 1: Stun opponent</li><li>Perk 2: Knock down.</li><li>Perk 3: Crush 1d4</li><li>Critical: X 2 damage.</li><li>Fumble: Use spell fumble table</li></ul>";
            break;
        case "Shamanic caster":
            this.name = "Shamanic caster";
            this.shortDescription = "You wield the powers of nature, with skill, and ease.";
            this.description = "<ul><li>Attribute: knowledge</li><li>Difficulty Offense Vs armor of target</li><li>Difficulty Summoning: Vs 12 + modifiers</li><li>Difficulty Defense: Vs 12 + modifiers</li><li>Difficulty of Utility: Vs 12 + modifiers ? casters knowlege</li><li>Costs: Myst and focus by spell<br>Any spell you cast that has a nature component (IE: plants , spores, non elemental nature) costs 0 Focus.</li><li>Common: You do normal damage</li><li>Perk 1: Crush 1d6</li><li>Perk 2: Knock down.</li><li>Perk 3: Entangle</li><li>Critical: X 2 damage.</li><li>Fumble: Use spell fumble table</li></ul>";
            break;
        case "Necromancer":
            this.name = "Necromancer";
            this.shortDescription = "You dabble in the power of death, you like to play god with the energies that give us life. You usually smell like grave dirt and look like you have not slept in days. No one asked you to the prom.";
            this.description = "<ul><li>Attribute: Academics</li><li>Difficulty Offense Vs armor of target</li><li>Difficulty Summoning: Vs 12 + modifiers</li><li>Difficulty Defense: Vs 12 + modifiers</li><li>Difficulty of Utility: Vs 12 + modifiers</li><li>Costs: Myst and focus by spell</li><li>Any spell you cast that has a DEATH element (IE: skeleton, skull, dead ect) costs 0 Focus.</li><li>Common: You do normal damage</li><li>Perk 1: Stun opponent</li><li>Perk 2: Knock down.</li><li>Perk 3: Entangle</li><li>Critical: you raise one level 1d4 skeleton hero to assist you. It is armed with (roll 1d4) a <ol><li>Swword</li><li>Ax</li><li>Mace</li><li>Claws</li></ol> and does 1d6 damage.</li><li>Fumble: Use spell fumble table</li></ul>";
            break;
        case "Shadow mage":
            this.name = "Shadow mage";
            this.shortDescription = "";
            this.description = "";
            break;
        case "War mage":
            this.name = "War mage";
            this.shortDescription = "";
            this.description = "";
            break;
    }
}

function aaieMutation(mutationName, mutationDescription)
{
    this.name = mutationName;
    this.description = mutationDescription;
}
