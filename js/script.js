$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});

$(window).on("load",function() {
  function fade(pageLoad) {
    var windowBottom = $(window).scrollTop() + $(window).innerHeight();
    var min = 0.3;
    var max = 0.7;
    var threshold = 0.01;
    
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")<=min+threshold || pageLoad) {$(this).fadeTo(500,max);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")>=max-threshold || pageLoad) {$(this).fadeTo(500,min);}
      }
    });
  } fade(true); //fade elements on page-load
  $(window).scroll(function(){fade(false);}); //fade elements on scroll
});