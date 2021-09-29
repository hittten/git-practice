let num = document.querySelector('input');
let boton = document.querySelector('button');
let ul = document.querySelector('#counters');
num.addEventListener('keyup', tecla);
boton.addEventListener('click', cliBot);



function contador(cont) {

    boton.textContent = 'Contar'
    num.value = ""
    let cant = 0
    let li = document.createElement('li');
    li.textContent = `${cant}/${cont}`
    ul.appendChild(li);

    const counter = setInterval(() => {
        cant++
        li.textContent = `${cant}/${cont}`
        console.log(li.textContent)

        if (Number(cant) === Number(cont)) {
            para(counter)
        }
    }, 1000);
    function para(e) {
        clearInterval(e)
    }

    li.addEventListener('click', borrar)
    function borrar() {
        li.remove(counter)
        para(counter)
    }

}


function tecla(e) {
    let cont = e.target.value
    // console.log(e)

    if (cont != "") {
        boton.textContent = 'Contar ' + cont + ' segundos'
    } else {
        boton.textContent = 'Contar'
    }

    if (e.key === "Enter") {
        contador(cont);
    }

}

function cliBot() {
    contador(num.value);
}
