// add string trim function
String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ''); }

function isProbablyUrl(string) {
	var substr = string.substring(0,4);
	substr = substr.toLowerCase();
	return (substr == 'http' || substr == 'ftp:' || substr == 'www.');
}

function doOpen(info, tab) {
	var strings = info.selectionText.split(/\r\n|\r|\n/);
	
	if (strings.length > 13) {
		if (!confirm('It looks like this will open about ' + strings.length + ' tabs. This could slow down your computer.\n\nAre you sure you want to continue?'))
			return;
	}
	
	for (var i=0; i<strings.length; i++) {
		// check empty
		strings[i] = strings[i].trim();
		if (strings[i] == '') continue;
		
		var url = strings[i];
		
		if (!isProbablyUrl(url)) {
			// if it looks like a URL we'll open it, otherwise we will do a Google search on it
			url = 'http://www.google.com/search?q=' + encodeURI(url);
		}
		
		//open the new tab
		chrome.tabs.create({'url':url,'selected':false});
	}
}

chrome.contextMenus.create({"title": "OpenList", "contexts":["selection"], "onclick": doOpen});
