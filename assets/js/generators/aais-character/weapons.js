function generateWeapons()
{
    var weapon = new aaisWeapon();
    var weaponDescriptor = new aaisWeaponDescriptor();

    var typeNumber                  = Math.floor(Math.random() * WEAPON_TYPES.length);
    var ammoNumber                  = Math.floor(Math.random() * WEAPON_AMMO.length);
    var damageNumber                = Math.floor(Math.random() * WEAPON_DAMAGE.length);
    var descriptorNumber            = Math.floor(Math.random() * WEAPON_DESCRIPTORS.length);

    weapon.name                     = WEAPON_TYPES[typeNumber].name;
    weapon.attribute                = WEAPON_TYPES[typeNumber].attribute;
    weapon.rof                      = WEAPON_TYPES[typeNumber].rof;
    weapon.damageModifier           = WEAPON_TYPES[typeNumber].damage;
    weapon.concealment              = WEAPON_TYPES[typeNumber].concealment;
    weapon.size                     = WEAPON_DAMAGE[damageNumber].name;
    weapon.damage                   = WEAPON_DAMAGE[damageNumber].damage;
    weapon.ammo                     = WEAPON_AMMO[ammoNumber];

    weaponDescriptor.name           = WEAPON_DESCRIPTORS[descriptorNumber].name;
    weaponDescriptor.description    = WEAPON_DESCRIPTORS[descriptorNumber].description;
    weapon.descriptors.push(weaponDescriptor);

    character.weapons.push(weapon);
}
