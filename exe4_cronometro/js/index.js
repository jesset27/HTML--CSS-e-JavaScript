function getTimeFromSeconds (segundos) {
    const data = new Date(segundos*1000)
    return data.toLocaleTimeString('pt-br',{
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
        timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000)
}

document.addEventListener('click', function(e) {
    const elemento = e.target;

    if(elemento.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        console.log('Cliquei no iniciar');
        clearInterval(timer);
        iniciaRelogio();

    } else if (elemento.classList.contains('pausar')) {
        relogio.classList.add('pausado');
        console.log('Cliquei no pausar');
        clearInterval(timer);

    } else if (elemento.classList.contains('zerar')){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
});

// iniciar.addEventListener('click' , function(event) {
//     relogio.classList.remove('pausado');
//     console.log('Cliquei no iniciar');
//     clearInterval(timer);
//     iniciaRelogio();
   
// })


// pausar.addEventListener('click' , function(event) {
//     relogio.classList.add('pausado');
//     console.log('Cliquei no pausar');
//     clearInterval(timer);
// })

// zerar.addEventListener('click' , function(event) {
//     console.log('Cliquei no zerar');
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     segundos = 0;
// })