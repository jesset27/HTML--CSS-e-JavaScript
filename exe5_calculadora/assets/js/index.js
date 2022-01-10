const display = document.querySelector('.display');

function clickBotao() {
    document.addEventListener('click', function(e){
        const event = e.target;
        if (event.classList.contains('btn-num')){
            btnParaDisplay(event.innerText);
        }

    });

    function btnParaDisplay(valor) {
        display.value += valor;
    }
}

clickBotao();