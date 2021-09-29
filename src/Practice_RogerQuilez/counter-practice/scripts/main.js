/* TASK 1 - Al ir escribiendo los segundos, se debe actualizar el botón con "Contar x segundos" */
/* TASK 2 - Si el input está vacío el botón debe decir solo "Contar" */
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#counters');

input.addEventListener('keyup', (e) => {
    if (input.value) {
        button.textContent = `Contar ${input.value} segundos`;
    } else {
        button.textContent = `Contar`;
    }
})

/* TASK 3 - Al presionar la tecla "Enter" se debe accionar el botón "Contar" */
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        button.click();
    }
})

/* TASK 4 - Al momento de contar debe quedar enfocado el input con todo el valor seleccionado para que no se tenga que borrar */
button.addEventListener('click', () => {

    input.select();

    let listCount = '';
    let cont = 1;

    const printList = setInterval(() => {

        listCount = `<li>${cont}/${input.value}</li>`;
        list.innerHTML = listCount;
        if (cont == input.value) {
            clearInterval(printList);
        }
        cont++; 
        
    }, 1000)

    
})