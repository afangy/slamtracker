function onClickHandler(info, tab) {
    chrome.tabs.executeScript(tab.id, {
        file:'js/slamtracker.js'
        }
    );
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        'id':'slamtracker-menu',
        'title': 'Cattura Slamtracker'
    });
});
