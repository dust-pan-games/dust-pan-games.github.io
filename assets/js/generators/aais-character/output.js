function generateOutput()
{
    var type = document.getElementById("char-sheet");
    var typeValue = type.options[type.selectedIndex].value;

    if(typeValue == "html")
    {
        generateHTMLOutput();
    }
    else
    {
        generateTextOutput();
    }
}

function generateHTMLOutput()
{
    var output = document.getElementById("generator-output");
    var outputHTML = "";

    // Character basics section
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td colspan="2" style="text-align:center;height:19px"><b>Character Basics</b></td></tr>';
    outputHTML += '<tr>';
    outputHTML += '<td style="width:100px;height:19px">&nbsp;<b>Name</b></td>';
    outputHTML += '<td style="width:250px;height:19px">&nbsp;</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Age</b></td>';
    outputHTML += '<td>&nbsp;' + ages[character.age].name + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Race</b></td>';
    outputHTML += '<td>&nbsp;' + races[character.race].name + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Class</b></td>';
    outputHTML += '<td>&nbsp;' + classes[character.class].name + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Diety</b></td>';
    outputHTML += '<td>&nbsp;' + character.diety + '</td>';
    outputHTML += '</tr>';
    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<br>';

    // Character stats
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;float:left;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td colspan="2" style="text-align:center;height:19px"><b>Stats</b></td></tr>';
    outputHTML += '<tr>';
    outputHTML += '<td style="width:150px;height:19px">&nbsp;<b>Stat name</b></td>';
    outputHTML += '<td style="width:100px;height:19px">&nbsp;<b>Value</b></td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Brawn</b></td>';
    outputHTML += '<td>&nbsp;' + character.brawn + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Athleticism</b></td>';
    outputHTML += '<td>&nbsp;' + character.athleticism + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Resolve</b></td>';
    outputHTML += '<td>&nbsp;' + character.resolve + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Academics</b></td>';
    outputHTML += '<td>&nbsp;' + character.academics + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Knowledge</b></td>';
    outputHTML += '<td>&nbsp;' + character.knowledge + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Focus</b></td>';
    outputHTML += '<td>&nbsp;' + character.focus + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Leadership</b></td>';
    outputHTML += '<td>&nbsp;' + character.leadership + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Attractiveness</b></td>';
    outputHTML += '<td>&nbsp;' + character.attractiveness + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Mysticism</b></td>';
    outputHTML += '<td>&nbsp;' + character.mysticism + '</td>';
    outputHTML += '</tr>';
    outputHTML += '</tbody>';
    outputHTML += '</table>';

    // Character secondary stats
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;float:left;margin-left:10px;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td colspan="3" style="text-align:center;height:19px"><b>Secondary Stats</b></td></tr>';
    outputHTML += '<tr>';
    outputHTML += '<td style="width:150px;height:19px">&nbsp;<b>Stat name</b></td>';
    outputHTML += '<td style="width:100px;height:19px">&nbsp;<b>Current Value</b></td>';
    outputHTML += '<td style="width:100px;height:19px">&nbsp;<b>Max Value</b></td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Resolve Pool</b></td>';
    outputHTML += '<td>&nbsp;' + character.resolvePool + '</td>';
    outputHTML += '<td>&nbsp;' + character.resolvePool + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Focus Pool</b></td>';
    outputHTML += '<td>&nbsp;' + character.focusPool + '</td>';
    outputHTML += '<td>&nbsp;' + character.focusPool + '</td>';
    outputHTML += '</tr><tr>';
    outputHTML += '<td>&nbsp;<b>Mysticism Pool</b></td>';
    outputHTML += '<td>&nbsp;' + character.mysticismPool + '</td>';
    outputHTML += '<td>&nbsp;' + character.mysticismPool + '</td>';
    outputHTML += '</tr>';
    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<div style="clear:both;"></div>';
    outputHTML += '<br>';

    // Careers
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;float:left;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td style="text-align:center;width:250px;height:19px"><b>Careers</b></td></tr>';

    for(var c = 0; c < character.careers.length; c++)
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;' + careers[character.careers[c]].name + '</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';

    // Skills
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;float:left;margin-left:10px;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td style="text-align:center;width:250px;height:19px"><b>Skills</b></td></tr>';

    // Add check for no skills
    for(var s = 0; s < character.skills.length; s++)
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;' + character.skills[s] + '</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<div style="clear:both;"></div>';
    outputHTML += '<br>';

    // Connections
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td colspan="2" style="text-align:center;height:19px"><b>Connections</b></td></tr>';
    outputHTML += '<tr>';
    outputHTML += '<td style="width:150px;height:19px">&nbsp;<b>Connection Type</b></td>';
    outputHTML += '<td style="width:450px;height:19px">&nbsp;<b>Connection Details</b></td>';
    outputHTML += '</tr>';

    if(character.connectionTypes.length > 0)
    {
        for(var i = 0; i < character.connectionTypes.length; i++)
        {
            outputHTML += '<tr>';
            outputHTML += '<td>&nbsp;' + character.connectionTypes[i] + '</td>';

            switch(character.connections[i].type)
            {
                case "Underworld":
                    outputHTML += "<td>&nbsp;"
                                + character.connections[i].nickName + " "
                                + character.connections[i].name + " who "
                                + character.connections[i].fact + "</td>";
                    break;
                case "Common":
                    outputHTML += "<td>&nbsp;"
                                + character.connections[i].name + " the "
                                + character.connections[i].job + " who "
                                + character.connections[i].fact + "</td>";
                    break;
                case "Noble":
                    outputHTML += "<td>&nbsp;"
                                + character.connections[i].title + " "
                                + character.connections[i].name + " of "
                                + character.connections[i].from + " who "
                                + character.connections[i].fact + "</td>";
                    break;

            }
            outputHTML += '</tr>';

        }
    }
    else
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<br>';

    // Abilities
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td colspan="4" style="text-align:center;height:19px"><b>Abilities</b></td></tr>';
    outputHTML += '<tr>';
    outputHTML += '<td style="width:100px;height:19px">&nbsp;<b>Ability Type</b></td>';
    outputHTML += '<td style="width:150px;height:19px">&nbsp;<b>Ability Name</b></td>';
    outputHTML += '<td style="width:200px;height:19px">&nbsp;<b>Short Description</b></td>';
    outputHTML += '<td style="width:300px;height:19px">&nbsp;<b>Long Description</b></td>';
    outputHTML += '</tr>';

    for(var i = 0; i < character.racialAbilities.length; i++)
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;Racial</td>';
        outputHTML += '<td>&nbsp;' + races[character.race].name + '</td>';
        outputHTML += '<td>&nbsp;' + character.racialAbilities[i] + '</td>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '</tr>';
    }

    for(var j = 0; j < character.classAbilities.length; j++)
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;Class</td>';
        outputHTML += '<td>&nbsp;' + character.classAbilities[j].name + '</td>';
        outputHTML += '<td>&nbsp;' + character.classAbilities[j].shortDescription + '</td>';
        outputHTML += '<td>' + character.classAbilities[j].description + '</td>';
        //outputHTML += '<td>&nbsp;</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<br>';

    // Mutations


    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td colspan="2" style="text-align:center;height:19px"><b>Mutations</b></td></tr>';
    outputHTML += '<tr>';
    outputHTML += '<td style="width:150px;height:19px">&nbsp;<b>Mutation Name</b></td>';
    outputHTML += '<td style="width:200px;height:19px">&nbsp;<b>Description</b></td>';
    outputHTML += '</tr>';

    if(character.mutationCount > 0)
    {
        for(var j = 0; j < character.mutations.length; j++)
        {
            outputHTML += '<tr>';
            outputHTML += '<td>&nbsp;' + character.mutations[j].name + '</td>';
            outputHTML += '<td>&nbsp;' + character.mutations[j].description + '</td>';
            outputHTML += '</tr>';
        }
    }
    else
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<br>';

    // Weapons
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td colspan="6" style="text-align:center;height:19px"><b>Weapons</b></td></tr>';
    outputHTML += '<tr>';
    outputHTML += '<td style="width:200px;height:19px">&nbsp;<b>Weapon Name</b></td>';
    outputHTML += '<td style="width:60px;height:19px">&nbsp;<b>Damage</b></td>';
    outputHTML += '<td style="width:75px;height:19px">&nbsp;<b>Attribute</b></td>';
    outputHTML += '<td style="width:100px;height:19px">&nbsp;<b>Perks</b></td>';
    outputHTML += '<td style="width:60px;height:19px">&nbsp;<b>Range</b></td>';
    outputHTML += '<td style="width:60px;height:19px">&nbsp;<b>Skilled?</b></td>';
    outputHTML += '</tr>';

    for(var j = 0; j < character.weapons.length; j++)
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;' + character.weapons[j].name + '</td>';
        outputHTML += '<td>&nbsp;' + character.weapons[j].damage + '</td>';
        outputHTML += '<td>&nbsp;' + character.weapons[j].attribute + '</td>';
        outputHTML += '<td>';

        for(var k = 0; k < character.weapons[j].perks.length; k++)
        {
            if(k >= (character.weapons[j].perks.length - 1))
            {
                outputHTML += character.weapons[j].perks[k];
            }
            else
            {
                outputHTML += character.weapons[j].perks[k] + '<br>';
            }
        }

        outputHTML += '</td>';
        outputHTML += '<td>&nbsp;' + character.weapons[j].range + '</td>';
        outputHTML += '<td>&nbsp;' + character.weapons[j].skilled + '</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<br>';

    // Armor
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr><td colspan="4" style="text-align:center;height:19px"><b>Armor</b></td></tr>';
    outputHTML += '<tr>';
    outputHTML += '<td style="width:200px;height:19px">&nbsp;<b>Armor Name</b></td>';
    outputHTML += '<td style="width:75px;height:19px">&nbsp;<b>Attribute</b></td>';
    outputHTML += '<td style="width:60px;height:19px">&nbsp;<b>Score</b></td>';
    outputHTML += '<td style="width:60px;height:19px">&nbsp;<b>Armor<br>&nbsp;Value</b></td>';
    outputHTML += '</tr>';
    outputHTML += '<tr>';
    outputHTML += '<td>&nbsp;' + armors[character.armorType].name + '</td>';
    outputHTML += '<td>&nbsp;' + armors[character.armorType].attribute + '</td>';
    outputHTML += '<td>&nbsp;' + armors[character.armorType].score + '</td>';
    outputHTML += '<td>&nbsp;' + character.armor + '</td>';
    outputHTML += '</tr>';
    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<br>';

    // Equipment
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;float:left;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr>';
    outputHTML += '<td style="text-align:center;width:400px;height:19px">&nbsp;<b>Equipment</b></td>';
    outputHTML += '</tr>';

    for(var j = 0; j < character.equipment.length; j++)
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;' + character.equipment[j] + '</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';

    // Quirks
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;float:left;margin-left:10px;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr>';
    outputHTML += '<td style="text-align:center;width:250px;height:19px">&nbsp;<b>Quirks</b></td>';
    outputHTML += '</tr>';

    for(var j = 0; j < character.quirks.length; j++)
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;' + character.quirks[j] + '</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<div style="clear:both;"></div>';
    outputHTML += '<br>';

    /*
    // Spells
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr>';
    outputHTML += '<td style="width:200px;height:19px">&nbsp;<b>Spell Name</b></td>';
    outputHTML += '<td style="width:60px;height:19px">&nbsp;<b>Type</b></td>';
    outputHTML += '<td style="width:75px;height:19px">&nbsp;<b>Effect Die</b></td>';
    outputHTML += '<td style="width:100px;height:19px">&nbsp;<b>Effects</b></td>';
    outputHTML += '<td style="width:150px;height:19px">&nbsp;<b>Cost -<br>&nbsp;Mysticism / Focus</b></td>';
    outputHTML += '</tr>';

    if(character.spells.length > 0)
    {
        for(var j = 0; j < character.spells.length; j++)
        {
            outputHTML += '<tr>';
            outputHTML += '<td>&nbsp;' + character.spells[j].name + '</td>';
            outputHTML += '<td>&nbsp;' + character.spells[j].type + '</td>';
            outputHTML += '<td>&nbsp;' + character.spells[j].die + '</td>';
            outputHTML += '<td>&nbsp;' + character.spells[j].effect + '</td>';
            outputHTML += '<td>&nbsp;' + character.spells[j].cost + '</td>';
            outputHTML += '</tr>';
        }
    }
    else
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<br>';
    */

    // Spell keywords
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px;">';
    outputHTML += '<tbody>';
    outputHTML += '<tr>';
    outputHTML += '<td><b>Spell Keyword Name</b></td>';
    outputHTML += '</tr>';

    if(character.spellKeywords.length > 0)
    {
        for(var j = 0; j < character.spellKeywords.length; j++)
        {
            outputHTML += '<tr>';
            outputHTML += '<td>&nbsp;' + character.spellKeywords[j] + '</td>';
            outputHTML += '</tr>';
        }
    }
    else
    {
        outputHTML += '<tr>';
        outputHTML += '<td>&nbsp;</td>';
        outputHTML += '</tr>';
    }

    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<br>';

    // Background
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px">';
    outputHTML += '<tbody>';
    outputHTML += '<tr>';
    outputHTML += '<td style="text-align:center;width:732px;height:22px"><b>Background</b></td>';
    outputHTML += '</tr>';
    outputHTML += '<tr><td style="width:732px;height:150px">&nbsp;</td></tr>';
    outputHTML += '</tbody>';
    outputHTML += '</table>';
    outputHTML += '<br>';

    // Notes
    outputHTML += '<table border="1" bordercolor="#888" cellspacing="0" style="border-collapse:collapse;border-color:rgb(136,136,136);border-width:1px">';
    outputHTML += '<tr>';
    outputHTML += '<td style="text-align:center;width:732px;height:22px"><b>Notes</b></td>';
    outputHTML += '</tr>';
    outputHTML += '<tr><td style="width:732px;height:150px">&nbsp;</td></tr>';
    outputHTML += '</tbody>';
    outputHTML += '</table>';

    output.innerHTML = outputHTML;
}

function generateTextOutput()
{
    var output = document.getElementById("generator-output");
    var outputHTML = "";
    outputHTML += "Age: " + AGES[character.age].name;
    outputHTML += "<br>Brawn: " + character.brawn;
    outputHTML += "<br>Athleticism: " + character.athleticism;
    outputHTML += "<br>Resolve: " + character.resolve;
    outputHTML += "<br>Academics: " + character.academics;
    outputHTML += "<br>Knowledge: " + character.knowledge;
    outputHTML += "<br>Attractiveness: " + character.attractiveness;
    outputHTML += "<br>Mutation Limit: " + character.mutationLimit;
    outputHTML += "<br>Resolve Pool: " + character.resolvePool + "/" + character.resolvePool;
    outputHTML += "<br>Homeworld: " + GRAVITIES[character.gravity].name + " " + PLANETS[character.planet].name + " - "
                    + PLANETS[character.planet].description;
    outputHTML += "<br>Physical description: " + GRAVITIES[character.gravity].description;

    outputHTML += "<br><br><b>Careers</b>";

    for(var c = 0; c < character.careers.length; c++)
    {
        outputHTML += "<br>" + character.careers[c].name + " - " + character.careers[c].attribute + " - " + character.careers[c].description;

        if(character.careers[c].specialty != "")
        {
            outputHTML += "<br>- Specialty: " + character.careers[c].specialty.name + " - " + character.careers[c].specialty.description;
        }
    }

    /*
    outputHTML += "<br><br><b>Connection</b>";

    for(var i = 0; i < character.connections.length; i++)
    {
        switch(character.connections[i].type)
        {
            case "Underworld":
                outputHTML += "<br>Your connection is "
                            + character.connections[i].nickName + " "
                            + character.connections[i].name + " who "
                            + character.connections[i].fact;
                break;
            case "Common":
                outputHTML += "<br>Your connection is "
                            + character.connections[i].name + " the "
                            + character.connections[i].job + " who "
                            + character.connections[i].fact;
                break;
            case "Noble":
                outputHTML += "<br>Your connection is "
                            + character.connections[i].title + " "
                            + character.connections[i].name + " of "
                            + character.connections[i].from + " who "
                            + character.connections[i].fact;
                break;
        }
    }
    */

    if(character.mutationCount > 0)
    {
        outputHTML += "<br><br><b>Mutations</b><br>";
        for(var j = 0; j < character.mutations.length; j++)
        {
            outputHTML += character.mutations[j].name + " - " +
                            character.mutations[j].description + "<br>";
        }
    }

    /*
    outputHTML += "<br><br><b>Weapon Skills</b>";

    for(var j = 0; j < character.weaponSkills.length; j++)
    {
        outputHTML += "<br>" + character.weaponSkills[j];
    }
    */

    outputHTML += "<br><br><b>Weapons</b>";

    for(var j = 0; j < character.weapons.length; j++)
    {
        /*
        x this.name = "";
        x this.attribute = "";
        x this.damage = "";
        x this.damageModifier = "";
        x this.rof = "";
        x this.concealment = "";
        x this.ammo = "";
        x this.size = "";
        this.descriptors = [];
        */
        outputHTML += "<br><ul>";
        outputHTML += "<li>" + character.weapons[j].size + " " + character.weapons[j].name + "</li>";
        outputHTML += "<li>Attribute: " + character.weapons[j].attribute + "</li>";
        outputHTML += "<li>Range: " + character.weapons[j].range + "</li>";
        outputHTML += "<li>Ammo: " + character.weapons[j].ammo + "</li>";
        outputHTML += "<li>Damage: " + character.weapons[j].damage + ", " + character.weapons[j].damageModifier + "</li>";
        outputHTML += "<li>Rate of fire: " + character.weapons[j].rof + "</li>";
        outputHTML += "<li>Concealment: " + character.weapons[j].concealment + "</li>";

        if( character.weapons[j].descriptors.length > 0)
        {
            outputHTML += "<li>Descriptors:";
            outputHTML += "<ul>";

            for(var k = 0; k < character.weapons[j].descriptors.length; k++)
            {
                outputHTML += "<li>" + character.weapons[j].descriptors[k].name
                                + " - " + character.weapons[j].descriptors[k].description
                                + "</li>";
            }

            outputHTML += "</ul></li>";
        }

        outputHTML += "</ul>"
    }


    outputHTML += "<br><br><b>Equipment</b>";
    outputHTML += "<br>" + character.equipment[0];

    /*
    outputHTML += "<br><br><b>Personality quirks</b>";

    for(var j = 0; j < character.quirks.length; j++)
    {
        outputHTML += "<br>" + character.quirks[j];
    }
    */

    output.innerHTML = outputHTML;
}
