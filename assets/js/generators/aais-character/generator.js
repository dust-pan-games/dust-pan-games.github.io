// Character object
var character = null;

var ages = [];

function generate()
{
    character = new aaisCharacter();

    generateGravity();
    generatePlanet();
    generateStats();
    generateAge();
    generateCareers();
    generateEquipment();
    generateWeapons();
    /*
    generateArmor();
    generateConnections();
    generateClass();
    generateAbilities();
    generatePersonality();
    generateDiety();
    generateMutations();
    statCheck();
    */
    generateOutput();
}
