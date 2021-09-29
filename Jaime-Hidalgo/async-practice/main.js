const myList = document.querySelector('.lista');

async function datos() {
    let res = await fetch("data/persons.json");
    let personas = await res.json();
    //console.log(personas);
    
    let res1 = await fetch("data/kittens.json");
    let gatos = await res1.json();
    //console.log(gatos);


    for (let i = 0; i < personas.length; i++) {
        let nomb = personas[i].name
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let nombre = document.createTextNode(personas[i].name);
        li.appendChild(nombre);
        li.className = "name";
        document.querySelector('.lista').appendChild(li)


       
        for (let j = 0; j < gatos[nomb].length; j++) {
           
            let lii = document.createElement('li');
            let nombre = document.createTextNode(gatos[nomb][j].name);
            lii.appendChild(nombre);
            document.querySelector('ul').appendChild(ul).appendChild(lii)

        }


    }

}


datos();




