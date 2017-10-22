function generateEquipment()
{
    var equipment = Math.floor(Math.random() * EQUIPMENT.length);

    character.equipment.push(EQUIPMENT[equipment].name);
}
