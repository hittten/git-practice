let body=document.querySelector('body');
let ul1=document.createElement('ul');
let valor=0;

fetch('data/persons.json')
.then((response) => response.json())
.then((json) => {
    let resultados = json;

    for (let i = 0; i < resultados.length; i++) {
        const element = resultados[i].name;
        let li_1=document.createElement('li');
        li_1.textContent=element;
            
            fetch('data/kittens.json')
            .then((response) => response.json())
            .then((json) => {
            ul1.appendChild(li_1);
            let ul2=document.createElement('ul');

                if (valor===0) {
                    let Lindy = json.Lindy;
                    for (let i = 0; i < Lindy.length; i++) {
                        const element = Lindy[i].name;
                        let li=document.createElement('li');
                        li.textContent=element;
                        ul2.appendChild(li);
                    }
                    ul1.appendChild(ul2);
                }
                if (valor===1) {
                    let Mina = json.Mina;
                    for (let i = 0; i < Mina.length; i++) {
                        const element = Mina[i].name;
                        let li=document.createElement('li');
                        li.textContent=element;
                        ul2.appendChild(li);
                    }
                    ul1.appendChild(ul2);
                }
                if (valor===2) {
                    let Antonia = json.Antonia;
                    for (let i = 0; i < Antonia.length; i++) {
                        const element = Antonia[i].name;
                        let li=document.createElement('li');
                        li.textContent=element;
                        ul2.appendChild(li);
                    }
                    ul1.appendChild(ul2);
                }
                valor++;
            });
    }
    body.appendChild(ul1);
});