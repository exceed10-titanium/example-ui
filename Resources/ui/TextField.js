function TextField() {
	var win = Titanium.UI.createWindow({
		backgroundColor: 'white',
		fullscreen: true,
		modal: true
	});
	
	var textField = Ti.UI.createTextField({
 		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  		color: '#336699',
  		top: 10, left: 10,
  		width: 250, height: 60
	});
	
	win.add(textField)
	return win;
}

module.exports = TextField;
