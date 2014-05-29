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

    $('#pts_content li').each(function() {
        var line;
        if ($(this).hasClass('status')) {
            line = $($(this).find('div')).text() + ';';
        } else {
            var textData = $($(this).find('.text'));
            var summary = textData.find('.summary');
            var stat = textData.find('.stat');
            line = $(summary).text() + ";" + $(stat).text();
        }
        if (lastLine != null && line == lastLine) {
            return false;
        }
        linesToAdd.push(line);
    });

    // var names = $('.matchinfo .name');
    // result = $(names[0]).text() + " vs " + $(names[1]).text() + ";\n" + result;
    $('#b13-game').val(linesToAdd.join('\n') + "\n" + text);
}

if ($('#b13-game').length == 0) {
    $('body').prepend('<textarea readonly="true" rows="10" id="b13-game" style="width:100%"/>')
    fillResult();
    window.setInterval(function() {
        var nodes = $('#pts_content ul li .text');
        var msg = $(nodes[0]).text();

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
