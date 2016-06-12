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

	//Specifing map properties 
	var mapProp = {
		center:new google.maps.LatLng(24.7136, 46.6753),
		zoom:15,
		mapTypeId:google.maps.MapTypeId.TERRAIN,
		styles: styleArray
	};

	var map = new google.maps.Map(document.getElementById("location"), mapProp);

	var marker=new google.maps.Marker({
		position:mapProp.center,
		icon:'images/map-icon.png'
	});

	marker.setMap(map);
}

// Initializing map on window load
google.maps.event.addDomListener(window, 'load', initialize);
