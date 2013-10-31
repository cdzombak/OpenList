chrome.contextMenus.create({"title": "OpenList", "contexts":["selection"], "onclick": function(info, tab) {
    openList(info.selectionText);
}});
