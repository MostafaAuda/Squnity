$(document).ready(function() {

  if (window.location.pathname == '/index.html') {
    
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
  } 

/*--------------------------------------------------------------------------------------------------------------------*/
//Owl carousel

  $('#training-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots: true,
    autoplay: false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1024:{
            items:3
        },
        1025:{
          items:4
        }
    }
  });

  $('#acknowledgment-slider').owlCarousel({
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
/*Scroll to top when arrow up clicked BEGIN*/

  $(window).scroll(function() {
    if ($(window).scrollTop() > 700) {
      $('#back2Top').slideDown();
    } else {
      $('#back2Top').slideUp();
    }
  });

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
//AOC initialize 

AOS.init({

  offset: 200, // offset (in px) from the original trigger point
  delay: 50, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

});


