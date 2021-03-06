function ListView() {
	var win = Titanium.UI.createWindow({
		backgroundColor: 'white',
		fullscreen: true,
		modal: true
	});

	// Create a custom template that displays an image on the left, 
	// then a title next to it with a subtitle below it.
	var myTemplate = {
    	childTemplates: [
        	{                            // Title 
            	type: 'Ti.UI.Label',     // Use a label for the title 
            	bindId: 'info',          // Maps to a custom info property of the item data
            	properties: {            // Sets the label properties
                	color: 'black',
                	font: { fontFamily:'Arial', fontSize: '20dp', fontWeight:'bold' },
                	left: '60dp', top: 0,
            	}
        	},
        	{                            // Subtitle
            	type: 'Ti.UI.Label',     // Use a label for the subtitle
            	bindId: 'es_info',       // Maps to a custom es_info property of the item data
            	properties: {            // Sets the label properties
                	color: 'gray',
                	font: { fontFamily:'Arial', fontSize: '14dp' },
                	left: '60dp', top: '25dp',
            	}
        	}
    	]
	};

	var listView = Ti.UI.createListView({
    	// Maps myTemplate dictionary to 'template' string
    	templates: { 'template': myTemplate },
    	// Use 'template', that is, the myTemplate dict created earlier
    	// for all items as long as the template property is not defined for an item.
    	defaultItemTemplate: 'template'
	});
	var sections = [];

	var fruitSection = Ti.UI.createListSection({ headerTitle: 'Fruits / Frutas'});
	var fruitDataSet = [
    	// the text property of info maps to the text property of the title label
    	// the text property of es_info maps to text property of the subtitle label
    	// the image property of pic maps to the image property of the image view
    	{ info: {text: 'Apple'}, es_info: {text: 'Manzana'}},
    	{ info: {text: 'Banana'}, es_info: {text: 'Banana'}}
	];
	fruitSection.setItems(fruitDataSet);
	sections.push(fruitSection);

	var vegSection = Ti.UI.createListSection({ headerTitle: 'Vegetables / Verduras'});
	var vegDataSet = [
    	{ info: {text: 'Carrot'}, es_info: {text: 'Zanahoria'}},
    	{ info: {text: 'Potato'}, es_info: {text: 'Patata'}}
	];
	vegSection.setItems(vegDataSet);
	sections.push(vegSection);

	var grainSection = Ti.UI.createListSection({ headerTitle: 'Grains / Granos'});
	var grainDataSet = [
    	{ info: {text: 'Corn'}, es_info: {text: 'Maiz'}},
    	{ info: {text: 'Rice'}, es_info: {text: 'Arroz'}}
	];
	grainSection.setItems(grainDataSet);
	sections.push(grainSection);

	listView.setSections(sections);
	win.add(listView);
	return win;
}

module.exports = ListView;
