var lastEnd = '';
function fillResult() {
    var result = '';

    var text = $('#b13-game').val();
    var lastLine = '';
    text.split('\n').some(function(line) {
        // get first line
        lastLine = line;
        return true;
    })

    var linesToAdd = [];

    $('#pointSummaryList .item').each(function() {
        var line;
        var summary = $(this).find('.score');
        var stat = $(this).find('.pointSummary');
        line = $(summary).text() + ";" + $(stat).text();
        if (lastLine != null && line == lastLine) {
            return false;
        }
        linesToAdd.push(line);
    });

    $('#b13-game').val(linesToAdd.join('\n') + "\n" + text);
}

if ($('#b13-game').length == 0) {
    $('body').prepend('<textarea readonly="true" rows="10" id="b13-game" style="width:100%"/>')
    fillResult();
    window.setInterval(function() {
        var nodes = $('#pointSummaryList .item');
        var summary = $(nodes[0]).find('.score');
        var stat = $(nodes[0]).find('.pointSummary');
        var msg = $(summary).text() + ";" + $(stat).text();

        if (lastEnd != msg) {
            lastEnd = msg;
            fillResult();
        }
        var v = new Date();
        var strDate = v.getHours() + ":" + v.getMinutes() + ":" + v.getSeconds();
        document.title = '=> ' + strDate + ' ultima lettura';
    }, 40 * 1000);
} else {
    fillResult();
}

