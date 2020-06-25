$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1200 );
  });
  
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      if (scrollbarLocation >= 400) {
        $('.about').parent().addClass('active');
        $('.home').parent().removeClass('active');
      } else {
        $('.about').parent().removeClass('active');
        $('.home').parent().addClass('active');
      }
    })
  })
})

$(document).ready(function() {

  $(".about").click(function(){
    var $this = $(this);
    if($this.data('clicked')) {
        this.preventDefault();
        window.location.href = 'index.html';
        $([document.documentElement, document.body]).animate({
          scrollTop: $(".about").offset().top
      }, 2000);
    }
  });
})