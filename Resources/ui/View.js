function View() {
	var win = Titanium.UI.createWindow({
		backgroundColor: 'white',
		fullscreen: true,
		modal: true
	});
	
	var view = Titanium.UI.createView({
   		borderRadius:10,
   		backgroundColor:'red',
   		width:50,
   		height:50
	});
	
	win.add(view)
	return win;
}

module.exports = View;
