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