function initPopup() {
    chrome.windows.getCurrent( function(window) {
        chrome.tabs.getAllInWindow(window.id, function(tabs){
            if (!tabs.length) return;

            var listTextArea = document.getElementById("list");

            for (var i=0; i<tabs.length; ++i) {
                listTextArea.value += tabs[i].url + "\n";
            }

            listTextArea.select();
        });
    });
}

function openTextAreaList() {
    openList(document.getElementById("list").value);
}

window.addEventListener("load", initPopup);
document.getElementById("openButton").addEventListener("click", openTextAreaList);
