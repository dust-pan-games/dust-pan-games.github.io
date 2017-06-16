function generateOutput()
{
    var output = "";

    for(var i = 0; i < monsters.length; i++)
    {
        output += "<tr>";
        output += "<td class='monster-name'>&nbsp;" + monsters[i].name + "</td>";
        output += "<td>&nbsp;" + monsters[i].level + "</td>";
        output += "<td>&nbsp;" + monsters[i].resolveDice + "</td>";
        output += "<td>&nbsp;" + monsters[i].resolvePool + "</td>";
        output += "<td>&nbsp;" + monsters[i].armor + "</td>";
        output += "<td>&nbsp;" + monsters[i].attackDice + "</td>";
        output += "<td>&nbsp;" + monsters[i].attacksPerRound + "</td>";

        if(monsters[i].specialAttacks.length > 0)
        {
            output += "<td class='attack-name'><ul>";

            for(var j = 0; j < monsters[i].specialAttacks.length; j++)
            {
                output += "<li>" + monsters[i].specialAttacks[j] + "</li>";
            }

            output += "</ul></td>";
        }
        else
        {
            output += "<td>&nbsp;</td>";
        }
        output += "</tr>";
    }

    return output;
}
