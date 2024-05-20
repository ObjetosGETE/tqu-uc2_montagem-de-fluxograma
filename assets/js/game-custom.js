// Aqui você adiciona ou remove os containers pra onde devem ir os cards
var containers = [
  // Container com os cards que serão realocados
  // Não mexer
  document.querySelector(".fluxograma-1 .card-container"),
  document.querySelector(".fluxograma-2 .card-container"),

  // Containers que irão receber os cards
  document.querySelector("#slot-1"),
  document.querySelector('#slot-2'),
  document.querySelector('#slot-3'),
  document.querySelector('#slot-3'),
  document.querySelector('#slot-4'),
  document.querySelector('#slot-5'),
  document.querySelector('#slot-6'),
  document.querySelector('#slot-7'),
  document.querySelector('#slot-8'),
  document.querySelector('#slot-9'),
  document.querySelector('#slot-10'),
  document.querySelector('#slot-11'),
  document.querySelector('#slot-12'),
  document.querySelector('#slot-13'),
  document.querySelector('#slot-14'),
  document.querySelector('#slot-15'),
  document.querySelector('#slot-16'),
];
var audio = new Audio();
var erro = 0;

// Solução ao dragindrop
var scrollable = true;

var listener = function (e) {
  console.log(scrollable)
  if (!scrollable) {
    e.preventDefault();
  }
}

document.addEventListener('touchmove', listener, { passive: false });

// Solução ao dragindrop

dragula({
  containers: containers,
  revertOnSpill: true,
  direction: 'vertical',
  accepts: function (el, target, source, sibling) {
    return el.dataset.target == target.id;
  }
}).on('drag', function (el, source) {
  // On mobile this prevents the default page scrolling while dragging an item.
  scrollable = false;
}).on("drop", function (el, target) {
  scrollable = true;
  console.log(el)
  $(el).parents('.elemento').addClass('correto');
  let slots = $(el).parents('.game-container').find('.slot');
  let qtCorretos = $(el).parents('.game-container').find('.correto').length;

  if (slots.length == qtCorretos) {

    // feedback positivo
    const feedback = $(el).parents('.game-container').find('.feedback-positivo');
    const btnContinuar = $(el).parents('.game-container').find('.btn-continuar')
    $(feedback).fadeIn();
    let proxTela = $(el).parents('.tela').next();
    $(btnContinuar).click(function () {
      $(el).parents('.tela').fadeOut();
      proxTela.fadeIn();
      setTimeout(() => {
        let msg = proxTela.find('.hidden')[0];
        $(msg).removeClass('hidden')
      }, 500);
    })
  }
}).on("cancel", function (el) {
  scrollable = true;
  // feedback negativo
  const feedback = $(el).parents('.game-container').find('.feedback-negativo');
  $(feedback).addClass('active');
  setTimeout(() => {
    $(feedback).removeClass('active');
  }, 3000);
  audio.setAttribute('src', 'audios/erro.mp3'); //change the source
  audio.load(); //load the new source
  audio.play(); //play
});

// document.addEventListener('touchmove', function(e) { e.preventDefault(); }, { passive:false });