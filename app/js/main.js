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

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {

    if (window.innerWidth > 1024) {
      
      if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {

        document.getElementById("mainNav").style.transform = "translate3d(0, -100%, 0)";
  
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
  
          document.getElementById("mainNav").style.position = "sticky";
          document.getElementById("mainNav").style.top = "0";
          document.getElementById("mainNav").style.zIndex = "1024";
          document.getElementById("mainNav").style.transform = "unset";
        }
  
      } else if (document.body.scrollTop < 700 || document.documentElement.scrollTop < 700) {
  
        document.getElementById("mainNav").style.transform = "unset";
  
      }
    }
  }

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
  /*Scroll to top when arrow up clicked END*/

  /*--------------------------------------------------------------------------------------------------------------------*/

  //Scroll to position animation
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault()
    
    if (window.innerWidth > 1024) {
      $('html, body').animate(
        {
        scrollTop: $($(this).attr('href')).offset().top - 60,
        },
        1000,
        'linear'
      )
    } else {
      $('html, body').animate(
        {
        scrollTop: $($(this).attr('href')).offset().top,
        },
        1000,
        'linear'
      )
    }



  });

});


