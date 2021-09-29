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
    butContar.addEventListener("click",()=>{
        input.select()
        input.focus()
        aniadirLista()
    })
})

function aniadirLista(){
    const ul = document.querySelector("#counters")
    const li = document.createElement("li")
    if(input.value !== ''){
        let maximo = Number(input.value) 
        let numero = 0
        li.textContent = `0/${maximo}`
        ul.appendChild(li)

        const interval = setInterval(() => {
            numero++
            li.textContent = `${numero}/${maximo}`
            console.log(`${numero}/${maximo}`)
            if(numero === maximo){
                stop(interval)
            }
        }, 1000);
       
        ul.appendChild(li)        
        li.addEventListener("click",()=>{
            stop(interval)
            li.remove()
        })
    } 
}

function stop(i){
    clearInterval(i)
}