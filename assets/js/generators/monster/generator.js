var monsters = null;

function generateMonsters()
{
    var numberOfMonsters = $("#numberOfMonsters").val();

    monsters = [];

    for(var i = 0; i < numberOfMonsters; i++)
    {
        var monster = generateMonster();
        monsters.push(monster);
    }

    var output = generateOutput();
    $('#monster-table-body').html(output);
    $('#monster-table').show();
}

function generateMonster()
{
    var statValue = Math.floor(Math.random() * MONSTER_STATS.length);

    var monster = new aaieMonster();
    monster.name = generateName();
    monster.level = MONSTER_STATS[statValue].level;
    monster.resolveDice = MONSTER_STATS[statValue].resolveDice
                          + "d" + MONSTER_STATS[statValue].resolveDieType;

    for(var i = 0; i < MONSTER_STATS[statValue].resolveDice; i++)
    {
        monster.resolvePool += Math.ceil(Math.random() * MONSTER_STATS[statValue].resolveDieType);
    }

    monster.armor = MONSTER_STATS[statValue].armor;

    var attackStrength = Math.ceil(Math.random() * 10);
    attackStrength += monster.level;

    var attackDice = monster.level;

    if(attackDice < 1)
    {
        attackDice = 1;
    }

    if(attackStrength <= 5)
    {
        monster.attackDice = attackDice + "d4";
    }
    else if(attackStrength <= 8)
    {
        monster.attackDice = attackDice + "d6";
    }
    else if(attackStrength <= 11)
    {
        monster.attackDice = attackDice + "d8";
    }
    else if(attackStrength <= 14)
    {
        monster.attackDice = attackDice + "d10";
    }
    else if(attackStrength <= 20)
    {
        monster.attackDice = attackDice + "d12";
    }

    monster.attacksPerRound = MONSTER_STATS[statValue].attacksPerRound;

    var specialAttack = Math.ceil(Math.random() * 100);

    if(specialAttack <= MONSTER_STATS[statValue].chanceOfSpecialAttack)
    {
        var attackName = generateSpecialAttack();
        monster.specialAttacks.push(attackName);
    }

    return monster;
}

function generateName()
{
    var monsterName1 = Math.floor(Math.random() * PRIMARY_MONSTER_NAMES.length);
    var monsterName2 = Math.floor(Math.random() * SECONDARY_MONSTER_NAMES.length);

    return PRIMARY_MONSTER_NAMES[monsterName1] + " " + SECONDARY_MONSTER_NAMES[monsterName2];
}

function generateSpecialAttack()
{
    var attackName1 = Math.floor(Math.random() * PRIMARY_ATTACK_NAME.length);
    var attackName2 = Math.floor(Math.random() * SECONDARY_ATTACK_NAME.length);

    return PRIMARY_ATTACK_NAME[attackName1] + " " + SECONDARY_ATTACK_NAME[attackName2];
}

function aaieMonster()
{
    this.name = "";
    this.level = 0;
    this.resolvePool = 0;
    this.resolveDice = "";
    this.armor = 0;
    this.attackDice = "";
    this.attacksPerRound = 0;
    this.specialAttacks = [];
}
