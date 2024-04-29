// $('.tela-final').hide();
// $('.tela-2').hide();
// $('.game-container').hide();
// $('.start-btn').click(function () {
//     $('.tela-inicial').fadeOut();
// })
// $('.init').click(() => {
//     removerBackdrop();
// })
// function removerBackdrop() {
//     let i = 4;
//     $('#counter').text(i--)
//     setInterval(() => {
//         $('#counter').text(i--)
//     }, 900);
//     let height = $('.fluxograma-container').height();
//     $('.fluxograma-container').height(height);
//     setTimeout(() => {
//         $('.model').fadeOut();
//         setTimeout(() => {
//             $('.game-container').removeClass('absolute');
//             $('.game-container').fadeIn();
//         }, 600);
//     }, 3500);
// }

window.onload = () => {
    $('.loader').fadeOut();
    setTimeout(() => {
        $('.oda-fluxograma .tela-inicial .msg').fadeIn();
    }, 700);

}

$('.btn-start').click(function () {
    $('.tela-inicial').fadeOut();
    $('.tela-1 .msg').removeClass('hidden');
})

$('.start-fluxograma-1').click(function () {
    $('.tela-1 .backdrop').fadeOut();
    $('.tela-1 .load').addClass('loading')
    setTimeout(() => {
        $('.fluxograma-1.modelo').fadeOut();
        setTimeout(() => {
            $('.fluxograma-1.game-container').fadeIn();
        }, 800);
    }, 3000);
})