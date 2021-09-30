/* TASK 1 - Al ir escribiendo los segundos, se debe actualizar el botón con "Contar x segundos" */
/* TASK 2 - Si el input está vacío el botón debe decir solo "Contar" */
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#counters');

input.addEventListener('keyup', (e) => {
    (input.value ? button.textContent =
        `Contar ${input.value} segundos` : button.textContent = `Contar`);

    /* TASK 3 - Al presionar la tecla "Enter" se debe accionar el botón "Contar" */
    if (e.key === 'Enter') {
        button.click();
    }
})



/* TASK 4 - Al momento de contar debe quedar enfocado el input con todo el valor seleccionado para que no se tenga que borrar */
/* Cuando se haga clic en el botón se debe agregar un nuevo elemento a la lista con los "segundos/cantidad" */
/* TASK 6 - Al hacer clic en el contador, se debe eliminar */
const stopCounter = (intervalTime) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(resolve);
        }, intervalTime);
    })
}

button.addEventListener('click', () => {

    input.focus();
    input.select();

    if (!input.value) {
        return;
    }

    let cont = 0;
    let inputValue = input.value;
    const listCount = document.createElement('li');
    listCount.textContent = `${cont}/${inputValue}`;

    
    const printList = setInterval(() => {
        cont++;
        listCount.textContent = `${cont}/${inputValue}`;
        console.log(`${cont}/${inputValue}`);

    }, 1000)

    list.prepend(listCount);

    listCount.addEventListener('click', stopInterval);

    function stopInterval() {
        clearInterval(printList);
        listCount.remove();
    }
    
    stopCounter(inputValue * 1200).then(stopInterval);

})



