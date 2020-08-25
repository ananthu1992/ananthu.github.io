// Code By Webdevtrick ( https://webdevtrick.com )
var $header_top = $('.header-top');
var $nav = $('nav');

$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});

$('#fullpage').fullpage({
//   sectionsColor: ['#f4bb47', '#fa4049', '#ffffff', '#97dfbd', '#000000'],
  sectionsColor: ['#ffffff', '#ffffff', '#ffffff', '#252a28'],
  sectionSelector: '.vertical-scrolling',
  navigation: false,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['about', 'works', 'resume', 'contact', 'fifthSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    if (index == 4) {
        $('.header-top').hide();
      } else {
        $header_top.css('background', 'rgba(255, 255, 255)');
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 4) {
      $('.header-top ul li a').css("color", 'inherit');
      $('.header-top').show();
    }
  },


});


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  var textWrapper = document.querySelector('.ml7 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml7 .letter',
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 50 * i
    }).add({
      targets: '.ml7',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

    var textWrapper = document.querySelector('.ml8 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: true})
      .add({
        targets: '.ml8 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
      }).add({
        targets: '.ml8',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });

// Gallery popup
const buttons = document.querySelectorAll('.project');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay__inner img');

function open(e) {
  overlay.classList.add('open');
  const src= e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
}

function close() {
  overlay.classList.remove('open');
}

buttons.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click', close);


