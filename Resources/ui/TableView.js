function TableView() {
	var win = Titanium.UI.createWindow({
		backgroundColor: 'white',
		fullscreen: true,
		modal: true,
		layout: 'vertical'
	});
	
	var sectionFruit = Ti.UI.createTableViewSection({ headerTitle: 'Fruit' });
	sectionFruit.add(Ti.UI.createTableViewRow({ title: 'Apples' }));
	sectionFruit.add(Ti.UI.createTableViewRow({ title: 'Bananas' }));

	var sectionVeg = Ti.UI.createTableViewSection({ headerTitle: 'Vegetables' });
	sectionVeg.add(Ti.UI.createTableViewRow({ title: 'Carrots' }));
	sectionVeg.add(Ti.UI.createTableViewRow({ title: 'Potatoes' }));

	var table = Ti.UI.createTableView({
  		data: [sectionFruit, sectionVeg]
	});

	win.add(table);
	return win;
}

module.exports = TableView;
