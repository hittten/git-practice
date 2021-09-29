/* TASK 1 - Al ir escribiendo los segundos, se debe actualizar el botón con "Contar x segundos" */
/* TASK 2 - Si el input está vacío el botón debe decir solo "Contar" */
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#counters');

input.addEventListener('keyup', (e) => {
    (input.value ? button.textContent =
        `Contar ${input.value} segundos` : button.textContent = `Contar`);
})

/* TASK 3 - Al presionar la tecla "Enter" se debe accionar el botón "Contar" */
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        button.click();
    }
})

/* TASK 4 - Al momento de contar debe quedar enfocado el input con todo el valor seleccionado para que no se tenga que borrar */
/* TASK 5 - Cada cambio de segundo sebe reflejarse en el elemento de la lista y en la consola de javascript */
/* TASK 6 - Al hacer clic en el contador, se debe eliminar */
button.addEventListener('click', () => {

    input.select();

    let cont = 1;
    let inputValue = input.value;
    let listCount = document.createElement('li');
    
    if (!inputValue) {
        return;
    }

    const printList = setInterval(function setCurrentTime() {

        let currentCount = `${cont}/${inputValue}`;
        
        listCount.textContent = currentCount;
        
        if (cont == 1) {
            list.prepend(listCount);
        }

        console.log(currentCount);

        (cont == inputValue ? clearInterval(printList) : cont++);

        listCount.addEventListener('click', () => {
            clearInterval(printList);
            listCount.remove();
        })

        return setCurrentTime;

    }(), 1000)
    

})




