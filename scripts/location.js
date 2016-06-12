// Specify features and elements to define styles.
var styleArray = [
{
	featureType: "all",
	stylers: [
		{ saturation: -80 }
	]
}
];

function initialize() {
	var mapProp = {
		center:new google.maps.LatLng(12.9716 , 77.5946),
		zoom:15,
		mapTypeId:google.maps.MapTypeId.TERRAIN,
		styles: styleArray
	};

	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

	var marker=new google.maps.Marker({
		position:mapProp.center,
		icon:'images/map-icon.png'
	});

	marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

// End: Google Map Integration