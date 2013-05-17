function ScrollView() {
	var win = Titanium.UI.createWindow({
		backgroundColor: 'white',
		fullscreen: true,
		modal: true
	});
	
	var scrollView = Ti.UI.createScrollView({
  		contentWidth: 'auto',
  		contentHeight: 'auto',
  		showVerticalScrollIndicator: true,
  		showHorizontalScrollIndicator: true,
  		height: '80%',
  		width: '80%'
	});
	
	var view = Ti.UI.createView({
  		backgroundColor:'#336699',
  		borderRadius: 10,
  		top: 10,
  		height: 2000,
  		width: 1000
	});
	
	scrollView.add(view);
	win.add(scrollView);
	return win;
}

module.exports = ScrollView;