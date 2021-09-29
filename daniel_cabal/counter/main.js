const input = document.querySelector('input');
const button = document.querySelector('button');
const counters = document.querySelector('#counters');

input.addEventListener('keyup', (e)=>{
    const seconds = e.target.value;
    button.textContent=`Contar ${seconds} segundos`;

    if (e.target.value==="") {
        button.textContent=`Contar`;
    }
    if (e.key==="Enter") {
        input.focus();
        input.select();
        añadir();
    }
});

button.addEventListener('click', ()=>{
    input.focus();
    input.select();
    añadir();
})

function añadir() {
    let contador=0;
    if (input.value!="") {

        let numero=Number(input.value);
        const li=document.createElement('li');
        li.textContent='0/'+numero;
        counters.appendChild(li);

        const interval = setInterval(() => {
            contador++;
            console.log(`counter: ${contador}/${numero}`)
            li.textContent = `${contador}/${numero}`;
            if(numero===contador){
                parar();
            }
        }, 1000);

        counters.appendChild(li);

        function parar() {
            clearInterval(interval);
            li.remove();
        }
        
        li.addEventListener('click', ()=>{
            parar();
        })
    }
}