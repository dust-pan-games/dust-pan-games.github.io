// Character object
var character = null;

var ages = [];

function generate()
{
    character = new aaieCharacter();

    generateGravity();
    generatePlanet();
    generateStats();
    /*
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
    */
    generateOutput();
}
