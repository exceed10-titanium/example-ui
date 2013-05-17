function ImageView() {
	var win = Titanium.UI.createWindow({
		backgroundColor: 'white',
		fullscreen: true,
		modal: true
	});
	
	var image = Ti.UI.createImageView({
  		image:'../images/myimage.png'
	});
	
	win.add(image)
	return win;
}

module.exports = ImageView;
