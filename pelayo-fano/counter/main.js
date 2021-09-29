//seleccionar elementos del DOM y crear los que necesito
const butContar = document.querySelector("#butContar")
const input = document.querySelector("input")


input.addEventListener("keyup",(e)=>{
    let segundos = input.value
    butContar.textContent = `Contar ${segundos} segundos`
    //paso 2
    if(segundos === ''){
        butContar.textContent = `Contar`
    }
    //paso 3
    if(e.key === "Enter"){     
        input.select()
        input.focus()
        aniadirLista()
     }
})

function aniadirLista(){
    const ul = document.querySelector("#counters")
    const li = document.createElement("li")
    if(input.value !== ''){
        let numero = input.value
        li.textContent = numero
        ul.appendChild(li)
        li.addEventListener("click",()=>{
            li.remove()
        })
    }     
   
}
