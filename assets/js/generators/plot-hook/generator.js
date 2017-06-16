function generatePlotHooks(formObject)
{
    var numberOfPlotHooks = $("#numberOfPlotHooks").val();

    plotHooks = [];

    for(var i = 0; i < numberOfPlotHooks; i++)
    {
        var plotHook = "";
        var hook1 = Math.floor(Math.random() * ACTIONS.length);
        var hook2 = Math.floor(Math.random() * TARGETS.length);
        var hook3 = Math.floor(Math.random() * PLACES.length);
        var hook4 = Math.floor(Math.random() * LOCATIONS.length);

        plotHook = ACTIONS[hook1].toString()
                    + " " + TARGETS[hook2].toString().toLowerCase()
                    + " " + PLACES[hook3].toString().toLowerCase()
                    + " " + LOCATIONS[hook4].toString().toLowerCase();
        plotHooks.push(plotHook);
    }

    var output = generateOutput();
    $('#plot-hook-table-body').html(output);
    $('#plot-hook-table').show();
}

function generateOutput()
{
    var output = "";

    for(var i = 0; i < plotHooks.length; i++)
    {
        output += "<tr>";
        output += "<td>" + plotHooks[i] + "</td>";
        output += "</tr>";
    }

    return output;
}
