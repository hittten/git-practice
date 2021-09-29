//Actualizar boton:
//seleccionar elementos del DOM y crear los que necesito
const butContar = document.querySelector("#butContar")
const input = document.querySelector("input")

input.addEventListener("keyup",()=>{
    let segundos = input.value
    butContar.textContent = `Contar ${segundos} segundos`
    if(segundos == ''){
        butContar.textContent = `Contar`
    }
})
