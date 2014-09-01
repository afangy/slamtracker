function onClickHandler(info, tab) {
    var slamtrackerScript = 'js/slamtracker.js';

    if (info.menuItemId == 'slamtracker-menu-usopen') {
        slamtrackerScript = "js/slamtracker.js"
    }
    chrome.tabs.executeScript(tab.id, {
        file:slamtrackerScript
        }
    );
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        'id':'slamtracker-menu-rg',
        'title': 'Cattura Roland Garros',
        'documentUrlPatterns': ['http://*.rolandgarros.com/*']
    });
    chrome.contextMenus.create({
        'id':'slamtracker-menu-usopen',
        'title': 'Cattura USOpen',
        'documentUrlPatterns': ['http://*.usopen.org/*']
    });
    chrome.contextMenus.create({
        'id':'slamtracker-menu-usopen',
        'title': 'Cattura USOpen',
        'documentUrlPatterns': ['http://*.winbledon.com/*']
    });
});
