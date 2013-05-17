function Dialog() {
	var win = Titanium.UI.createWindow({
		backgroundColor: 'white',
		fullscreen: true,
		modal: true
	});
	
	var button = Titanium.UI.createButton({
		title: 'Show Alert'
	})
	
	button.addEventListener('click', function(e){
  		alert('Hello, eXceed10');
	});
	
	win.add(button);
	return win;
}

module.exports = Dialog;