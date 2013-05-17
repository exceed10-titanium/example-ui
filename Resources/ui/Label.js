function Label() {
	var win = Titanium.UI.createWindow({
		backgroundColor: 'white',
		fullscreen: true,
		modal: true,
		layout: 'vertical'
	});
	
	var label1 = Ti.UI.createLabel({
	  	color: '#900',
		font: { fontSize:48 },
	  	shadowColor: '#aaa',
	  	shadowOffset: {x:5, y:5},
	  	text: 'A simple label',
	  	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	  	top: 30,
	  	width: Ti.UI.SIZE, height: Ti.UI.SIZE
	});
	
	var label2 = Ti.UI.createLabel({
  		color:'blue',
  		text: 'A long label with\na few line breaks\nand unicode (UTF8)\nsymbols such as\na white chess piece \u2655\nand the euro symbol \u20ac\nlooks like this!\n',
  		textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  		top: 30,
  		width: 300, height: 200
	});
	
	win.add(label1)
	win.add(label2)
	return win;
}

module.exports = Label;
