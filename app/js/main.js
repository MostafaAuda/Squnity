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
});

/*--------------------------------------------------------------------------------------------------------------------*/

$(document).ready(function() {

  // When the user scrolls down 20px from the top of the document, slide down the navbar
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {

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

});

/*--------------------------------------------------------------------------------------------------------------------*/
