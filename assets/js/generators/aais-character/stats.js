function generateGravity()
{
    character.gravity = Math.floor(Math.random() * GRAVITIES.length);
}

function generatePlanet()
{
    character.planet = Math.floor(Math.random() * PLANETS.length);
}

function generateStats()
{
    for(var b = 0; b < GRAVITIES[character.gravity].brawnDice; b++)
    {
        character.brawn += Math.floor(Math.random() * GRAVITIES[character.gravity].brawnSides) + 1;
    }

    for(var a = 0; a < GRAVITIES[character.gravity].athleticismDice; a++)
    {
        character.athleticism += Math.floor(Math.random() * GRAVITIES[character.gravity].athleticismSides) + 1;
    }

    for(var r = 0; r < GRAVITIES[character.gravity].resolveDice; r++)
    {
        character.resolve += Math.floor(Math.random() * GRAVITIES[character.gravity].resolveSides) + 1;
    }

    for(var ac = 0; ac < PLANETS[character.planet].academicsSides; ac++)
    {
        character.academics += Math.floor(Math.random() * PLANETS[character.planet].academicsDice) + 1;
    }

    for(var k = 0; k < PLANETS[character.planet].knowledgeSides; k++)
    {
        character.knowledge += Math.floor(Math.random() * PLANETS[character.planet].knowledgeDice) + 1;
    }

    for(var f = 0; f < PLANETS[character.planet].mutationLimitSides; f++)
    {
        character.mutationLimit += Math.floor(Math.random() * PLANETS[character.planet].mutationLimitDice) + 1;
    }

    for(var at = 0; at < PLANETS[character.planet].attractivenessSides; at++)
    {
        character.attractiveness += Math.floor(Math.random() * PLANETS[character.planet].attractivenessDice) + 1;
    }

    character.resolvePool = character.resolve * 5;

    character.mutationCount += PLANETS[character.planet].mutations;
}
