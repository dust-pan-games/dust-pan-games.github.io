// Taken from: https://echostation57.wordpress.com/2014/03/02/d100-miscellaneous-gear-table-for-your-sci-fi-game/
var EQUIPMENT = [
    {
        name: "Macrobinoculars"
    },
    {
        name: "Walking stick/pimp cane with silver head"
    },
    {
        name: "Rad detector"
    },
    {
        name: "Righteous hat"
    },
    {
        name: "Cool jewelry (ring, disco medallion, etc) with secret compartment"
    },
    {
        name: "Thermal Detonator (heavy weapon)"
    },
    {
        name: "Omnitool"
    },
    {
        name: "Gloves (choice of cool driving gloves or armored gauntlets)"
    },
    {
        name: "Awesome pet (space monkey, dragondog, astro-hawk, etc)"
    },
    {
        name: "Mysterious dark cloak"
    },
    {
        name: "Pack of cards, marked"
    },
    {
        name: "Spaceship, model"
    },
    {
        name: "Grappling hook belt"
    },
    {
        name: "Daynight goggles"
    },
    {
        name: "Cool boots (cowboy, swashbuckler, go-go, etc) – roll again if you got crazy alien feet"
    },
    {
        name: "Tricorder"
    },
    {
        name: "Commlink"
    },
    {
        name: "TAS membership (or other useful or funny membership card)"
    },
    {
        name: "Flashlight"
    },
    {
        name: "Small hookah and 6 doses of some semi-legal herb"
    },
    {
        name: "3 Ninja smokebombs"
    },
    {
        name: "Oxyfilter Mask"
    },
    {
        name: "Fancy change of clothes"
    },
    {
        name: "Toolkit"
    },
    {
        name: "Hi tech vacc suit (non-bulky, collapsable balloon helmet)"
    },
    {
        name: "Cool vest or jacket"
    },
    {
        name: "Boot knife (light weapon)"
    },
    {
        name: "Bottle of Proximan whiskey"
    },
    {
        name: "Medkit"
    },
    {
        name: "Vehicle keys (van, speeder, motorcycle, etc)"
    },
    {
        name: "Jetpack"
    },
    {
        name: "Grenade (medium weapon)"
    },
    {
        name: "Ninja throwing stars (light weapon)"
    },
    {
        name: "Programmable remote hover-globe with sting guns"
    },
    {
        name: "Force pike (heavy weapon)"
    },
    {
        name: "Stun grenade"
    },
    {
        name: "Portable music player with headphones"
    },
    {
        name: "Awesome cape"
    },
    {
        name: "Big shiny beltbuckle"
    },
    {
        name: "Electro-whip (medium weapon)"
    },
    {
        name: "Silver flute"
    },
    {
        name: "Binder cuffs"
    },
    {
        name: "Saddle and tack for local riding beast"
    },
    {
        name: "Backpack"
    },
    {
        name: "Synthrope"
    },
    {
        name: "Entrenching tool"
    },
    {
        name: "Pocket tent"
    },
    {
        name: "Pocket water purifier"
    },
    {
        name: "Pocket computer"
    },
    {
        name: "Power winch, wearable on belt"
    },
    {
        name: "Cheap bottle of wine"
    },
    {
        name: "Fancy bottle of wine"
    },
    {
        name: "Rocket backpack"
    },
    {
        name: "Magnet gun (pulls things in)"
    },
    {
        name: "Microlight backpack wings"
    },
    {
        name: "Holoprojector watch"
    },
    {
        name: "Personal shield generator"
    },
    {
        name: "Shoulder rocket launcher (heavy weapon)"
    },
    {
        name: "Voice scrambler"
    },
    {
        name: "View masker"
    },
    {
        name: "Sawed-off shotgun (medium weapon)"
    },
    {
        name: "Gotal electromagnetic scanner (+1D to find lifeforms)"
    },
    {
        name: "Handheld laser welder"
    },
    {
        name: "Fusion cutter"
    },
    {
        name: "Repulsorlift hoverboard"
    },
    {
        name: "Omni-bond grapple gun"
    },
    {
        name: "Grav boots"
    },
    {
        name: "Pair of big fuzzy dice"
    },
    {
        name: "Inertial direction-finder"
    },
    {
        name: "Super-high-bounce grenade (set 1-5 bounce fuze)"
    },
    {
        name: "Remote-control frisbee"
    },
    {
        name: "Folding pocket solar gun-and-gadget recharger"
    },
    {
        name: "Bowel capitulator pistol (medium weapon)"
    },
    {
        name: "Flashbang grenade (light weapon)"
    },
    {
        name: "Small tube of molecular bond ultraglue"
    },
    {
        name: "Squirt bottle of universal solvent"
    },
    {
        name: "Set of wrist lasers (light weapon)"
    },
    {
        name: "Mouse droid"
    },
    {
        name: "Bounty hunter skull drone with laser eyes (programmable, medium weapon)"
    },
    {
        name: "Wampa-skin rug"
    },
    {
        name: "Electronic riflescope (Shoot with advantage)"
    },
    {
        name: "Therm-optic invisibility camouflage cloak (a la Ghost in the Shell)"
    },
    {
        name: "Case with flare gun and five flares (medium weapon)"
    },
    {
        name: "Fireworks–pack of Roman candles, fountains, rockets"
    },
    {
        name: "EMP bomb, 1 block radius"
    },
    {
        name: "Droid popper EMP grenade"
    },
    {
        name: "1-meter-square grav plate (program or remote, -10 to 10 gravities)"
    },
    {
        name: "Hypoinjector with truth serum, 3 shots"
    },
    {
        name: "Anti-sensor camo cloak"
    },
    {
        name: "Wrist-mounted rope shooter (wraps target, like Boba Fett’s)"
    },
    {
        name: "Net gun"
    },
    {
        name: "Parachute"
    },
    {
        name: "Aerogel grenade (15′ diameter sphere fills with translucent aerogel, can cushion landing, block corridor, immobilize everyone in a turbolift car, etc.)"
    },
    {
        name: "10,000 in fake credits"
    },
    {
        name: "Forged electronic search warrant"
    },
    {
        name: "Roll of duck tape (Yes, it only adheres to water fowl)"
    },
    {
        name: "Slingshot and steel BBs (light weapon)"
    },
    {
        name: "Bag of water balloons and fill pump"
    },
    {
        name: "Translator earplugs with pocket language computer"
    },
    {
        name: "Exploding cigar"
    }
];
/*
    Neal's equipment list:
    - Roll of duck tape (Yes, it only adheres to water fowl)
    - Model spaceship (Accurate to the last detail! Look at this paint job!)
    - Keys for a ground-based vehicle (Hey, these will come in handy if you can find the matching vehicle)
*/
