function Notification() {
	var win = Titanium.UI.createWindow({
		backgroundColor: 'white',
		fullscreen: true,
		modal: true
	});
	
	var button = Titanium.UI.createButton({
		title: 'Show'
	});
	
	var toast = Ti.UI.createNotification({
    	message:"Please Stand By",
    	duration: Ti.UI.NOTIFICATION_DURATION_LONG
	});
	
	button.addEventListener('click', function() {
		toast.show();
	});
	
	win.add(button);
	return win;
}

module.exports = Notification;