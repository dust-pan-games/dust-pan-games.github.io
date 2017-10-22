function aaisCharacter()
{
    this.gravity = 0;
    this.planet = 0;
    this.age = 0;
    this.armorType = 0;
    this.armor = 0;
    this.brawn = 0;
    this.athleticism = 0;
    this.resolve = 0;
    this.academics = 0;
    this.knowledge = 0;
    this.attractiveness = 0;
    this.resolvePool = 0;
    this.careerCount = 0;
    this.careers = [];
    this.connections = [];
    this.connectionTypes = [];
    this.equipment = [];
    this.mutations = [];
    this.mutationCount = 0;
    this.mutationLimit = 0;
    this.skills = [];
    this.weaponSkills = [];
    this.weapons = [];
    this.quirks = [];
    this.racialAbilities = [];
    this.classAbilities = [];
}

function aaisCareer()
{
    this.name = "";
    this.description = "";
    this.specialty = "";
    this.attribute = "";
}

function aaisWeapon()
{
    this.name = "";
    this.attribute = "";
    this.damage = "";
    this.damageModifier = "";
    this.rof = "";
    this.concealment = "";
    this.ammo = "";
    this.size = "";
    this.descriptors = [];
}

function aaisWeaponDescriptor()
{
    this.name = "";
    this.description = "";
}
