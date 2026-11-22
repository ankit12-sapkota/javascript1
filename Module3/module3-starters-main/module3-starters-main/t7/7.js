const effect = document.querySelector('#trigger');
const target = document.querySelector('#target');


effect.addEventListener('mouseover', function() {
    target.src = 'img/picB.jpg';
});

effect.addEventListener('mouseout', function(){
    target.src = 'img/picA.jpg';
});
