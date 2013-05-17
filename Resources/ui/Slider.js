function Slider() {
	var win = Titanium.UI.createWindow({
		backgroundColor: 'white',
		fullscreen: true,
		modal: true
	});
	
	var slider = Titanium.UI.createSlider({
    	top: 50,
    	min: 0,
    	max: 100,
    	width: '100%',
    	value: 50
    });
    
	var label = Ti.UI.createLabel({
    	text: slider.value,
    	width: '100%',
    	height: 'auto',
    	top: 30,
    	left: 0,
    	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });

	slider.addEventListener('change', function(e) {
    	label.text = String.format("%3.1f", e.value);
	});
	
	win.add(slider);
	win.add(label);
	return win;
}

module.exports = Slider;
