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