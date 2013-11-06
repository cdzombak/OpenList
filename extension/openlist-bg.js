chrome.contextMenus.create({"title": "OpenList", "id": "OpenList-ContextMenuOpen", "contexts":["selection"]});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    openList(info.selectionText);
})
