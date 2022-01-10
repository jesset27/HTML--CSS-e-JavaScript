const display = document.querySelector('.display');

function clickBotao() {
    document.addEventListener('click', function (e) {
        const event = e.target;
        if (event.classList.contains('btn-num')) {
            btnParaDisplay(event.innerText);
        }

        if (event.classList.contains('btn-clear')) {
            clear();
        }

        if (event.classList.contains('btn-del')) {
            del();
        }

        if (event.classList.contains('btn-eq')) {
            soma();
        }

    });

    function btnParaDisplay(valor) {
        display.value += valor;
    }

    function clear() {
        display.value = '';
    }

    function del() {
        display.value = display.value.slice(0, -1);
    }

    function soma() {
        let conta = display.value;

        conta = eval(conta);
        clear();
        btnParaDisplay(conta);
    }
}

clickBotao();