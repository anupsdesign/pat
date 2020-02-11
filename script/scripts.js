$('.menu-icon').click(function(){
  if ($(window).width() <= 900) {
      $('.one').toggleClass('opacity')
      $('.three').toggleClass('opacity')
      $('nav').toggleClass('showNav') 
      $('nav a').on('click', function() {
          $('.one').removeClass('opacity')
          $('.three').removeClass('opacity')
          $("nav").removeClass('showNav');  
      })
  }
})

$(window).scroll(function() {
  if ($(this).scrollTop()>300)
  {
      $('.scrollTop').fadeIn(300)
  }
  else
  {
      $('.scrollTop').fadeOut(300)
  }
});

$(".scrollTop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "medium")
  return false
})

/* inserted "NEW" jquery code below [line 31-47]*/
jQuery(function ($) {
    $.fn.hScroll = function (amount) {
        amount = amount || 120;
        $(this).bind("DOMMouseScroll mousewheel", function (event) {
            var oEvent = event.originalEvent, 
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
                position = $(this).scrollLeft();
            position += direction > 0 ? -amount : amount;
            $(this).scrollLeft(position);
            event.preventDefault();
        })
    };
});

$(document).ready(function() {
    $('.items').hScroll();
});
/*NEW jquery code ends*/