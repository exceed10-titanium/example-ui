function main() {
	var window = Titanium.UI.createWindow({backgroundColor: '#fff', fullscreen: true});
	var win2 = Titanium.UI.createWindow({backgroundColor: '#000', modal: true});
	var listView = Titanium.UI.createListView();
	var data = [
		{ itemId: 1, title: 'Label', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE },
		{ itemId: 2, title: 'Button', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE },
		{ itemId: 3, title: 'TextField', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE },
		{ itemId: 4, title: 'View', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE },
		{ itemId: 5, title: 'ImageView', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE },
		{ itemId: 6, title: 'TabGroup', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE },
		{ itemId: 7, title: 'TableView', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE },
		{ itemId: 8, title: 'ListView', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE },
		{ itemId: 9, title: 'Notification', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE },
		{ itemId: 10, title: 'Slider', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE },
		{ itemId: 11, title: 'ScrollableView', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE },
		{ itemId: 12, title: 'ScrollView', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE },
		{ itemId: 13, title: 'SearchBar', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE },
		{ itemId: 14, title: 'Picker', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE },
		{ itemId: 15, title: 'Dialog', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE },
		{ itemId: 16, title: 'Switch', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE }
	];
	
	var listUI = [];
	for (var i = 0; i < data.length; i++) {
	  listUI.push({properties: data[i]});
	}
	
	var section = Ti.UI.createListSection({headerTitle: 'From docs.appcelerator.com'});
	section.setItems(listUI);
	listView.sections = [section];
	listView.addEventListener('itemclick', function(e) {
		var objectUI = require('ui/' + data[e.itemIndex].title);
		var UI = new objectUI();
		UI.open();
	})
	window.add(listView);
	window.open();
}

main()
