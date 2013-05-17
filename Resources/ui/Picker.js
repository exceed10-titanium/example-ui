function Picker() {
	var win = Titanium.UI.createWindow({
		backgroundColor: 'white',
		fullscreen: true,
		modal: true,
		layout: 'vertical'
	});

	var picker = Ti.UI.createPicker({
  		top:50
	});

	var data = [];
	data[0]=Ti.UI.createPickerRow({title:'Bananas'});
	data[1]=Ti.UI.createPickerRow({title:'Strawberries'});
	data[2]=Ti.UI.createPickerRow({title:'Mangos'});
	data[3]=Ti.UI.createPickerRow({title:'Grapes'});

	picker.add(data);
	picker.selectionIndicator = true;

	win.add(picker);
	return win;
}

module.exports = Picker;