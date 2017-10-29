//$(document).ready(function(){
//  $(".owl-carousel").owlCarousel();
//});
//
//$('.loop').owlCarousel({
//    center: true,
//    items:2,
//    loop:true,
//    margin:10,
//    responsive:{
//        600:{
//            items:4
//        }
//    }
//});
//$('.nonloop').owlCarousel({
//    center: true,
//    items:2,
//    loop:false,
//    margin:10,
//    responsive:{
//        600:{
//            items:4
//        }
//    }
//});


/*
$(document).ready(function(){
  $('.carou-says').slick({
      autoplay: true,
	  autoplaySpeed: 4000,
	  arrows: true,
	  dots: true,
  });
});

$('.carou-says').slick({
	slideToShow: 1,
	autoplay: true,
});

*/



$(document).ready(function(){
	$('.gallery-menu a').on('click', function(){
		// Current class assignement
		$('.gallery-menu li.current').removeClass('current');
		$(this).parent().addClass('current');
		
		// set the heading text
		$("h3#heading").text($(this).text());
		
		// get  & filter link text 
		var category = $(this).text().toLowerCase().replace(' ', '-');
	
		// remove hidden class if "all projects" is seclected
		if(category === 'all-projects'){
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('ul#gallery li').each(function(){
				if(!$(this).hasClass(category)){
					$(this).hide().addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		// stop link behaviour
		return false;
	});
	
	//mouseenter overlay
	$('ul#gallery li').on ('mouseenter', function(){
		// get data attribute values
		var title = $(this).children().data('title');
		var desc = $(this).children().data('desc');
		// validation
		if(desc == null){
			desc = 'click to enlarge';
		}
		if(title == null){
			title = "";
		}
		// create overlay div
		$(this).append('<div class="overlay-work"></div>');
		// get the overlay div
		var overlay = $(this).children('.overlay-work');
		//add html to overlay 
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
		
		// fade in overlay
		overlay.fadeIn(800);
	});
	//mouseleave overlay
	$('ul#gallery li').on('mouseleave', function(){
		// create overlay div
		$(this).append('<div class="overlay-work"></div>');
		// get the overlay div
		var overlay = $(this).children('.overlay-work');
		
		//fadeOut overlay
		overlay.fadeOut(500);
	});
});


/************************************
GOOGLE MAP
*****************************************/


      function initMap() {
        var uluru = {lat: 51.507698, lng: -0.124884};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
 
















