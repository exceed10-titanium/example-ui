function Switch() {
	var win = Titanium.UI.createWindow({
		backgroundColor: 'white',
		fullscreen: true,
		modal: true
	});
	
	var basicSwitch = Ti.UI.createSwitch({
  		value: true 
	});
	
	win.add(basicSwitch);
	return win;
}

module.exports = Switch;