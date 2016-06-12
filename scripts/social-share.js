// Start: FB Share Integration
FB.init({
	appId      : '1198677423497650',
	xfbml      : true,
	version    : 'v2.6'
});

document.getElementById('fbShareBtn').onclick = function() {
	FB.ui(
	 {
	  method: 'share',
	  href: 'https://developers.facebook.com/docs/'
	}, function(response){});
}
// End: FB Share Integration