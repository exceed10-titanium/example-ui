function SearchBar() {
	var win = Titanium.UI.createWindow({
		backgroundColor: 'white',
		fullscreen: true,
		modal: true
	});
	
	var search = Titanium.UI.createSearchBar({
    	barColor:'#000', 
    	showCancel:true,
    	height:43,
    	top:0,
	});
	
	win.add(search);
	return win;
}

module.exports = SearchBar;