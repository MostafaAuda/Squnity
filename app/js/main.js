/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
  if ($(window).scrollTop() > 700) {
    $('#back2Top').slideDown();
  } else {
    $('#back2Top').slideUp();
  }
});

$(document).ready(function() {

  let app = document.getElementById('header__text--typing');

  let typewriter = new Typewriter(app, {
      autoStart: true,
      delay: 50,
      loop: true,
  });
  
  typewriter.typeString('risk management.')
    .pauseFor(2000)
    .deleteAll()
    .typeString('attacks mitigation.')
    .pauseFor(2000)
    .deleteAll()
    .typeString('security training.')
    .pauseFor(2000)
    .deleteAll()
    .typeString('more professional.')
    .pauseFor(2000)
    .deleteAll()
    .typeString('penetration testing.')
    .pauseFor(2000)
    .deleteAll()
    .typeString('attacks simulation.')
    .pauseFor(2000)
    .deleteAll()
    .start();

/*--------------------------------------------------------------------------------------------------------------------*/
//Owl carousel

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: true,
    autoplay: true,
    stagePadding: 25,
    responsive:{
        0:{
            items:2
        },
        767:{
            items:3
        },
        1024:{
            items:5
        }
    }
  })

/*--------------------------------------------------------------------------------------------------------------------*/
//Year Function

    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("getYear").innerHTML = n;
  
/*--------------------------------------------------------------------------------------------------------------------*/
  
  $("#back2Top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

/*--------------------------------------------------------------------------------------------------------------------*/
//Scroll to position animation

  $(function() {
    $("a[href*='#']:not([href='#'])").click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 60
        }, 1000);
        return false;
      }
    }
  });
  });

/*--------------------------------------------------------------------------------------------------------------------*/

});


