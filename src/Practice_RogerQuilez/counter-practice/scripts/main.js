/* TASK 1 - Al ir escribiendo los segundos, se debe actualizar el botón con "Contar x segundos" */
/* TASK 2 - Si el input está vacío el botón debe decir solo "Contar" */
const input = document.querySelector('input');
const button = document.querySelector('button');

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