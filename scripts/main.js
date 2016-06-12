$(document).ready(function(){
  $('.flexslider').flexslider({
    animation: "slide",
    selector: ".slides > li", 
    controlNav: false, 
	directionNav: false, 
  });

  $( "#tabs" ).tabs();
});