var CAREERS = [
    {
        name: "Stellar Navigation systems",
        description: "You can repair navigation systems.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Sociology",
        description: "The study of societies and cultures.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Connection (Military)",
        description: "You know a member of the military who may help you out when you need it.",
        attribute: "Attractiveness",
        specialty: []
    },
    {
        name: "Docking Procedures",
        description: "You can dock a star-ship and know all the related procedures.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Computer access",
        description: "You are skilled at accessing computers illicitly.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Radio Operator",
        description: "Planet based radio operations for communications.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Ship board Fire fighting",
        description: "You are really good at putting things out.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Rope work",
        description: "Still useful even on sci-fi vessels.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Armour usage",
        description: "Everyone can wear armor, you are at home in it.",
        attribute: "Brawn",
        specialty: []
    },
    {
        name: "Interstellar communication systems",
        description: "Massively complicated super high tech pair particle communications devises allow humanity to communicate over vast distances, though it still takes time.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Repairs",
        description: "Making physical repairs to ships or ground vehicles, vehicle components (Any ship / vehicle based system,)",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Appraisal",
        description: "You can appraise an approximate value of found objects.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Brawler",
        description: "Skilled with your fists in an unrefined way.",
        attribute: "Brawn",
        specialty: []
    },
    {
        name: "Archaic weapon",
        description: "You are trained in the use of an archaic weapon, from a prior era.",
        attribute: "",
        specialty: [
            {
                name: "Ax types",
                description: "You are skilled in the use of ax type weapons.",
                attribute: "Brawn"
            },
            {
                name: "Sword types",
                description: "You are skilled in the use of sword type weapons.",
                attribute: "Brawn or Athletics"
            },
            {
                name: "Staff types",
                description: "You are skilled in the use of staff type weapons.",
                attribute: "Athletics"
            },
            {
                name: "Spear types",
                description: "You are skilled in the use of staff type weapons.",
                attribute: "Athletics or Brawn"
            },
            {
                name: "Bow types",
                description: "You are skilled in the use of bow type weapons.",
                attribute: "Athletics"
            },
            {
                name: "Chain / flail types",
                description: "You are skilled in the use of chain or flail type weapons.",
                attribute: "Athletics or Brawn"
            },
            {
                name: "Hammer / mace types",
                description: "You are skilled in the use of hammer or mace type weapons.",
                attribute: "Brawn"
            },
            {
                name: "Other",
                description: "You are skilled in the use of other weapons. Decide what this means with the GM.",
                attribute: "Can be any attribute agreed upon by the player and GM"
            }
        ]
    },
    {
        name: "Mining operations",
        description: "You now how to run mining equipment.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Merchant connection",
        description: "You know an honest merchant that might be able to get you 'stuff.'",
        attribute: "Attractiveness",
        specialty: []
    },
    {
        name: "Ships Helmsman",
        description: "You know stellar Navigation and the finer points of steering a ship such as docking and close maneuvers. You can plot a course for adventure.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Bargaining",
        description: "You are adept getting the best deal on “stuff”.",
        attribute: "Attractiveness",
        specialty: []
    },
    {
        name: "Bio Junkie",
        description: "You are addicted to the chemical known as BIO you have +1 to your brawn and must roll mutation.",
        attribute: "Brawn",
        specialty: []
    },
    {
        name: "Computer programming",
        description: "You may attempt to extract information from, program, and otherwise control computer systems which you already have access to.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Scuba Ops",
        description: "You are trained in the equipment and techniques of working under water.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Occupation: Gambler",
        description: "You made your way as a gambler, you have skill and knowledge concerning games of chance.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Advanced Fire arms",
        description: "You are trained with an advanced fire arm.",
        attribute: "",
        specialty: [
            {
                name: "Beam Rifles",
                description: "You are skilled in the use of beam rifles.",
                attribute: "Athletics"
            },
            {
                name: "Beam Pistols",
                description: "You are skilled in the use of beam pistols.",
                attribute: "Athletics"
            },
            {
                name: "Plasma guns",
                description: "You are skilled in the use of plasma guns.",
                attribute: "Brawn"
            },
            {
                name: "Disruption rifles",
                description: "You are skilled in the use of disruption rifles.",
                attribute: "Athletics"
            },
            {
                name: "Gauss Rifles",
                description: "You are skilled in the use of gauss rifles.",
                attribute: "Knowledge"
            },
            {
                name: "Discharge Pistols",
                description: "You are skilled in the use of discharge pistols.",
                attribute: "Brawn"
            }
        ]
    },
    {
        name: "Xeno-Farming",
        description: "You-know how to set up food growing habitats IN SPACE.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Demolitions",
        description: "You have knowledge of setting up, and detonating explosives for effect.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Gravity Vehicle Pilot",
        description: "To get out of an interstellar ship which is in orbit around a planet, you need a gravity-vehicle, and you know how to pilot them, well done! (repairs on grave vehicles)",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Vacuum suit",
        description: "Every one knows how to put on a space suit, and do space things. You however are trained in how to operate vacuum suits and don’t suffer any penalties!",
        attribute: "Athletics",
        specialty: []
    },
    {
        name: "Disguise",
        description: "You know how to use makeup and prosthesis to disguise your identity.",
        attribute: "Attractiveness",
        specialty: []
    },
    {
        name: "Intimidation",
        description: "You know the value of physical intimidation.",
        attribute: "Brawn",
        specialty: []
    },
    {
        name: "Xeno-linguistics",
        description: "Less the direct knowledge of alien languages and more the training in the use of electronic translators too communicate with alien races.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Research",
        description: "Because of computers the knowledge of all human history is at your finger tips. Find us the best cat picture.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Gunnery",
        description: "You’re trained with large ship based weapon systems. Both targeting and firing. (repair weapons)",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Combat pilot",
        description: "You are trained in flying small 0 gravity combat vehicles such as personal fighters.",
        attribute: "Athletics",
        specialty: []
    },
    {
        name: "Mechanic wheeled Vehicles",
        description: "You can work on any land based wheeled Vehicles.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Robotic",
        description: "You can work on repair, and operate small robotics.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Powered Armor",
        description: "You are trained in the use of powered combat armor or P.C.A.",
        attribute: "Brawn",
        specialty: []
    },
    {
        name: "Biology",
        description: "You are learned in the science of biology. This includes describing and evaluating, life-forms in the field.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Illicit Trade information Connection",
        description: "You have an informant that will help you find out where to get “stuff” but not provide it him or herself.",
        attribute: "Attractiveness",
        specialty: []
    },
    {
        name: "First Aid",
        description: "You can heal allies even in the heat of battle.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Diagnosis",
        description: "You are skilled in diagnosing ailments, and poisons you can provide a re-roll when some one attempts to heal an ally.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Surgeon",
        description: "A much more advanced version of First aide, this skill can be used to heal major wounds outside of a combat situation.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Laser Weapons",
        description: "You are skilled with any type of hand held laser.",
        attribute: "Athletics",
        specialty: []
    },
    {
        name: "Personal Rockets",
        description: "You are skilled in the use of shoulder fired rocket weapons.",
        attribute: "Athletics",
        specialty: []
    },
    {
        name: "Cartography",
        description: "Skilled when navigating on land.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Genetic testing",
        description: "You have the knowledge and field equipment to test DNA samples.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Analyze samples",
        description: "Use scientific tools to analyze samples taken in the field.  Analysis will give information depending on the quality of your roll",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Occupation Musician",
        description: "You are a professional level musician.",
        attribute: "Knowledge",
        specialty: [
            {
                name: "Guitar",
                description: "Your instrument of choice is the guitar.",
                attribute: ""
            },
            {
                name: "Jazz Flute",
                description: "Your instrument of choice is the jazz flute.",
                attribute: ""
            },
            {
                name: "Piano",
                description: "Your instrument of choice is the piano.",
                attribute: ""
            },
            {
                name: "Drums",
                description: "Your instrument of choice is the drums.",
                attribute: ""
            },
            {
                name: "Bag Pipes",
                description: "Your instrument of choice is the bag pipes.",
                attribute: ""
            },
            {
                name: "Key-tar",
                description: "Your instrument of choice is the key-tar.",
                attribute: ""
            },
            {
                name: "Triangle",
                description: "Your instrument of choice is the triangle.",
                attribute: ""
            },
            {
                name: "'Space instrument'",
                description: "Your instrument of choice is the 'space instrument'. Make up something suitably ridiculous.",
                attribute: ""
            }
        ]
    },
    {
        name: "Occupation Chemist",
        description: "You are a trained chemist with a broad knowledge of the discipline.",
        attribute: "Academics",
        specialty: [
            {
                name: "Analytical Chemist",
                description: "Your specialty is quantifying matter.",
                attribute: ""
            },
            {
                name: "Astro chemist",
                description: "Your specialty is Elements, reactions, and radiation in the universe.",
                attribute: ""
            },
            {
                name: "Organic chemist",
                description: "Your specialty is the structure, properties, and reactions among organic compounds.",
                attribute: ""
            },
            {
                name: "Medicinal chemist",
                description: "Your specialty is dealing with synthetic compounds, and pharmaceuticals.",
                attribute: ""
            },
            {
                name: "Inorganic chemist",
                description: "Your specialty is dealing with reactions and properties of inorganic compounds.",
                attribute: ""
            },
            {
                name: "Nuclear Chemist",
                description: "Your specialty is chemistry dealing with radioactivity, nuclear processes, such as nuclear transmutation, and nuclear properties.",
                attribute: ""
            }
        ]
    },
    {
        name: "Identify Los-Tech",
        description: "When you find unknown tech you have a better chance to figure out how it works, and whether or not to bop, spin, flick, or pull it.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Grappling",
        description: "If you grapple an opponent you may choose to add your Brawn or athletics score score to your roll.",
        attribute: "Brawn or Athletics",
        specialty: []
    },
    {
        name: "Jerry-Rig",
        description: "You have a knack for cobbling things together from parts. Given proper materials you can build things. The Gm will have the call on whether or not the character can execute what they want to build and how difficult it will be.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Naval Occupation",
        description: "You were enlisted in one of the many human fleets throughout the galaxy, you have a broad knowledge of how to behave, and be productive on a military star-ship.",
        attribute: "",
        specialty: [
            {
                name: "Large ship Navigation",
                description: "You know how to pilot large star ships.",
                attribute: "Academics"
            },
            {
                name: "Star ship weapons",
                description: "Targeting and firing ships weapons systems.",
                attribute: "Academics"
            },
            {
                name: "Ship systems",
                description: "You know how all the parts of a ship work together to keep the vacuum of space from killing all of us. (repair Life support, Scanners, Navigation.)",
                attribute: "Knowledge"
            },
            {
                name: "Large ship operations",
                description: "You know the day to day logistics of large non military space fairing ships. (repair Crew Morale)",
                attribute: "Knowledge"
            },
            {
                name: "Ships engineering systems",
                description: "Dealing specifically with operating and repairing the massive, complicated engines it takes to move a space ship around. (repair engines, superstructure)",
                attribute: "Academics"
            },
            {
                name: "Scanning systems",
                description: "You can use and repair ships scanners effectively. (repair scanners)",
                attribute: "Academics"
            }
        ]
    },
    {
        name: "Climbing",
        description: "Both with ropes and free climbing.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Occupation Scout",
        description: "You are a trained scout, you have a broad knowledge concerning reconnaissance and the gathering of information concerning your surroundings.",
        attribute: "",
        specialty: [
            {
                name: "Tracking",
                description: "You can identify and follow tracks created by known animals, people, and newly discovered species.",
                attribute: "Knowledge"
            },
            {
                name: "Secure communications",
                description: "You are skilled at setting up encrypted communications.",
                attribute: "Academics"
            },
            {
                name: "Hunting",
                description: "You are skilled at finding food in the wild.",
                attribute: "Knowledge"
            },
            {
                name: "Wilderness survival",
                description: "You are skilled at building shelters, fires, and generally staying alive in situations where no normal shelter is available.",
                attribute: "Knowledge"
            },
            {
                name: "Xeno survival",
                description: "You are skilled as in wilderness survival however this skill focuses more on dealing with alien environments where the atmosphere may be unsafe and the flora / fauna unfamiliar.",
                attribute: "Knowledge"
            },
            {
                name: "Ranged weapons",
                description: "You are skilled in the use of rifle class weapons.",
                attribute: "Athletics"
            }
        ]
    },
    {
        name: "Size up",
        description: "You can physically access another human. A successful roll will get info from the GM, the better the effect roll the more detailed the information.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Streetwise",
        description: "You have been around and know the customs and lingo of the criminal underworld. This includes finding people, and information from a network of contacts.",
        attribute: "Attractiveness",
        specialty: []
    },
    {
        name: "Occupation solider",
        description: "You have been in the military. You know the customs and procedures involved in being a soldier.",
        attribute: "",
        specialty: [
            {
                name: "Pistols",
                description: "You are skilled with any type of “Pistol” Ballistic or energy based.",
                attribute: "Athletics"
            },
            {
                name: "Conditioning",
                description: "You may add {1d10} to your resolve pool.",
                attribute: "NA"
            },
            {
                name: "Rifles",
                description: "You are skilled with any kind of “rifle” weapon ballistic or energy based.",
                attribute: "Athletics"
            },
            {
                name: "Light Combat vehicles Ground",
                description: "You can drive, repair, and operate the systems on ground based combat vehicles. (AkA: Jeeps tanks, and the like)",
                attribute: "Knowledge"
            },
            {
                name: "Armor use",
                description: "Any armor gives you +2 base armor score.",
                attribute: "NA"
            },
            {
                name: "Demolitions",
                description: "You know the proper placement and amounts to make the boom a more effective boom.",
                attribute: "Academics"
            },
            {
                name: "Hand to hand combat training",
                description: "You have been trained to “Be the weapon” You may add your Brawn to hand to hand attack damage.",
                attribute: "Brawn"
            },
            {
                name: "Airborne training",
                description: "You are trained how to use parachutes or jump packs to get from a vehicle to the ground faster than you are probably comfortable with.",
                attribute: "Athletics"
            }
        ]
    },
    {
        name: "Zero G",
        description: "You are trained to handle your self in Zero or low gravity environments.",
        attribute: "Athletics",
        specialty: []
    },
    {
        name: "Cooking",
        description: "You are a trained cook.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Concealment",
        description: "You can conceal small items on your person with a degree of skill. This includes anything up to the size of a shoe box, AKA pistols, small packages and the like. The smaller the easier naturally.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Physical lock picking",
        description: "People still use locks, and the locks still work, mostly.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Pick Pocket",
        description: "You are a person who likes to filch things from peoples pockets. You nasty thing you.",
        attribute: "Athletics",
        specialty: []
    },
    {
        name: "Astronomy",
        description: "You’re well versed in how the universe is laid out. You are a great help in ship navigation. ",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Sex Appeal",
        description: "You are naturally and unusually physically attractive to others.",
        attribute: "Attractiveness",
        specialty: []
    },
    {
        name: "Weapon smith",
        description: "You know how to repair, maintain, and build ballistic fire arms (Use electronics repair for beam weapons)",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Brewing / distilling",
        description: "You’re popular because you know how to make EtOH, out of sugar and yeast.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Intimidation",
        description: "You can use your physicality to intimidate others into doing what you want.",
        attribute: "Brawn",
        specialty: []
    },
    {
        name: "Occupation Mecha",
        description: "Mecha are large robotic vehicles used for myriad of purposes and existing in nearly unlimited forms. Mecha are used in every facet of human en devour from industry, and construction, to exploration and combat. Anyone can pilot a mecha but having this occupation means you are more comfortable doing so than most.",
        specialty: [
            {
                name: "Mecha Pilot",
                description: "You are especially skilled at steering mecha in difficult situations.",
                attribute: "Athletics"
            },
            {
                name: "Mecha repair",
                description: "You are skilled at repairing the complicated systems involved in keeping a giant robot moving.",
                attribute: "Academics"
            },
            {
                name: "Mecha weapons",
                description: "You’re skilled in the used of mecha based weapon platforms.",
                attribute: "Knowledge"
            },
            {
                name: "Mecha Identification",
                description: "You are knowledgeable in many types of mecha and the signatures of most manufactures.",
                attribute: "Knowledge"
            },
            {
                name: "Mecha in Zero G",
                description: "Operating a giant robot in zero gravity is a whole different experience, you are pretty good at it.",
                attribute: "Knowledge"
            },
            {
                name: "Mecha combat Pilot",
                description: "You have experienced that singular type of hell that is Mecha combat. This makes you better at it than most.",
                attribute: "Athletics"
            }
        ]
    },
    {
        name: "Veterinary",
        description: "You can provide medical assistance to a variety of animals.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Lying",
        description: "You are skilled at lying right in someone's face",
        attribute: "Attractiveness",
        specialty: []
    },
    {
        name: "Occupation Physicist",
        description: "You have trained in the discipline of physics. Unlocking the mysteries of the universe one massive equation at a time.",
        attribute: "Academics",
        specialty: [
            {
                name: "Astrophysicist",
                description: "You are out to ascertain the nature of objects in space.",
                attribute: ""
            },
            {
                name: "Quantum Physics",
                description: "You study the fundamental theory of energy at the small scale of subatomic particles.",
                attribute: ""
            },
            {
                name: "Theoretical Physics",
                description: "Abstractions and mathematical models opening up the fringes of the universe.",
                attribute: ""
            },
            {
                name: "Sci-Fi Physics",
                description: "It's a thing, the far future could have any number of theories and truths that aren't covered by our current physics knowledge. That's where your character lives, steeped in future knowledge.",
                attribute: ""
            }
        ]
    },
    {
        name: "Archaeologist",
        description: "The study of ancient cultures through the recovery and study of their artifacts.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Military logistics",
        description: "Planning and carrying out the movement and maintenance of military forces.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Acrobatics",
        description: "You’re a trained acrobat, and have exceptional body control.",
        attribute: "Athletics",
        specialty: []
    },
    {
        name: "Archery",
        description: "You are skilled with bow style weapons both modern and archaic.",
        attribute: "Athletics",
        specialty: []
    },
    {
        name: "Riding",
        description: "You are adept at riding animals such as Horses, Camels, and giant space Beatles.",
        attribute: "Athletics",
        specialty: []
    },
    {
        name: "Forgery",
        description: "A knowledge of documents and techniques involved in producing fakes of those documents.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Spelunking",
        description: "In archaic times this was the exploration of terrestrial caves, and it still is. It can also apply to exploring the hulk of a crashed space ship half buried on an asteroid.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Electronics repair",
        description: "You are skilled at repairing common damaged electronic devices.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Occupation, Biologist",
        description: "You have a level of training in general biology.",
        attribute: "Academics",
        specialty: [
            {
                name: "Geneticist",
                description: "You are trained in Genes, heredity, and mutations in organisms.",
                attribute: ""
            },
            {
                name: "Microbiologist",
                description: "You study microscopic life.",
                attribute: ""
            },
            {
                name: "Toxicology",
                description: "You study the harmful effects of chemical, biological and physical agents in biological systems.",
                attribute: ""
            },
            {
                name: "Zoologist",
                description: "You study the evolution, classification, and habits of land based animals, both terrestrial and alien.",
                attribute: ""
            },
            {
                name: "Marine Biologist",
                description: "You study the evolution, classification, and habits of water based animals, both terrestrial and alien.",
                attribute: ""
            },
            {
                name: "Botanist",
                description: "You study and classify features of plants.",
                attribute: ""
            },
            {
                name: "Xeno Biologist",
                description: "You study the biology of alien flora and fauna specifically, It’s a BIG job.",
                attribute: ""
            },
            {
                name: "Psychic Biologist",
                description: "You study psychic powers and psychic effects.",
                attribute: ""
            }
        ]
    },
    {
        name: "Occupation Computer-tech",
        description: "You have advanced training in the use of computer systems. This goes beyond the general sense of electronics or simple computer usage and involves all aspects of hacking,  AI, and advanced programming.",
        attribute: "",
        specialty: [
            {
                name: "Hacking",
                description: "You are skilled at subverting computer security systems.",
                attribute: "Academics"
            },
            {
                name: "Programming",
                description: "Once you have access to a computer you are skilled at adding your own functions to it.",
                attribute: "Academics"
            },
            {
                name: "AI",
                description: "There are millions of human created AI’s throughout the galaxy, you know how they work and can manipulate them if you have access to their programming.",
                attribute: "Academics"
            },
            {
                name: "Virtua-Net usage",
                description: "You can get on and manipulate the virtual-web which is essentially the vast network of paired particle linked computers which allow virtual avatars of people to meet over vast distances.",
                attribute: "Knowledge"
            },
            {
                name: "Build Computer",
                description: "You can use parts to create a computer as long as you have them at hand.",
                attribute: "Academics"
            },
            {
                name: "Secure computer",
                description: "The opposite of hacking you can secure your computer against prying eyes.",
                attribute: "Academics"
            }
        ],
    },
    {
        name: "Physical Security systems",
        description: "Cameras, alarms, and laser grids, you know how to set them up, operate them. and naturally how to get around them.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Stealth",
        description: "This is the classic Hide in shadows / Move silently combination. You are skilled at hiding in your environment and moving with out alerting others.",
        attribute: "Athletics",
        specialty: []
    },
    {
        name: "Ambush",
        description: "You are skilled at setting up and identifying possible ambushes.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Escape artist",
        description: "You are skilled at slipping out of binds, handcuffs and ropes. The better the binding the harder the roll.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Forensics",
        description: "You can gain information through the examination of a crime scene or a cadaver.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Animal Training",
        description: "If you have an animal and some time you can train it to do simple tasks.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Lore",
        description: "This is a catch all, the player can pick a subject ad be confident that they have higher than normal knowledge about the subject. It can be anything form sports, to planetary history. Keep in mind this is Lore, not hard scientific knowledge. Taking Computer lore doesn’t grant you the ability to use the skill when repairing a broken computer terminal. You may however be able to tell the type of computer and give the person repairing it a bit of insight. While this might be a bit annoying to the expert doing the repairs it also makes Lore an excellent support skill.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Sports",
        description: "Another catch all.. Pick a sport. You Are skilled at that sport. It can be a known real world sport or some fancy sci-fi sport.",
        attribute: "Athletics or Brawn",
        specialty: []
    },
    {
        name: "Jeweler",
        description: "You can cut, set, and appraise jewelry.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Heraldry",
        description: "You might think this is outdated, but space ships are just as festooned with flags, symbols and placards as any knights shield. This skill allows you to recognize other factions flags and markers.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Law",
        description: "You are knowledgeable in the labyrinthine verbiage, concepts, and applications of law with in you section of space. Nothing screams 'adventure' like space Lawyers!",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Occupation Psychology",
        description: "You are a trained psychologist. You have a broad knowledge of how and why humans arrive at the emotional reactions that lead to their actions.",
        attribute: "Academics",
        specialty: [
            {
                name: "Abnormal Psychology",
                description: "You study unusual patterns of behavior, which in this game might be the most useful skill ever written down in a role playing game.",
                attribute: ""
            },
            {
                name: "Behavioral Psychology",
                description: "The study of Behavior and how it is influenced by environmental factors.",
                attribute: ""
            },
            {
                name: "Xeno Psychology",
                description: "The study of alien thought.  A difficult field considering some aliens are intelligent moss.",
                attribute: ""
            },
            {
                name: "Cognitive Psychology",
                description: "The study of thought processes, such as memory, perception and creativity.",
                attribute: ""
            },
            {
                name: "Psy-metrics",
                description: "The study of mental powers, and manifestations of though in the physical world.",
                attribute: ""
            },
            {
                name: "Counseling",
                description: "You have been trained in interviewing, listening, and counseling skills.",
                attribute: ""
            }
        ]
    },
    {
        name: "Plumbing",
        description: "This might seem extraneous, but space ships need running water too.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Artillery training",
        description: "A military specialty you are skilled with the big guns both ground based and ship based.",
        attribute: "Academics",
        specialty: []
    },
    {
        name: "Theology",
        description: "The study of different cultures ideas involving the existence or non existence of a power beyond science.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Damage Control (ship based)",
        description: "You are skilled at operating automatic repair devices that are installed on many large ships. If these systems are available you can bolster their effects.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Martial Arts",
        description: "You have trained in one of the thousands of martial arts out there: You can swap Athletics or brawn as a bonus when attacking in melee and add 2 to your Armour score during melee. Furthermore if you make successful Martial arts based attack you may add your brawn to any melee attacks damage. This is the best of all worlds for melee attackers.",
        attribute: "Athletics or Brawn",
        specialty: []
    },
    {
        name: "Boating",
        description: "You know the basics of sailing both under power and via wind.",
        attribute: "Knowledge",
        specialty: []
    },
    {
        name: "Launchers",
        description: "You are trained in the use of grenade launchers and similar personal weapons.",
        attribute: "Athletics",
        specialty: []
    },
];
