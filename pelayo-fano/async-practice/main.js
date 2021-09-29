const defList = document.querySelector("#defList")


fetch('data/persons.json')
	.then(response => response.json())
	.then((data) =>{
        let personas = []
        for (const names of data) {
            const dt = document.createElement("dt")
            defList.appendChild(dt)
            dt.textContent = names.name
            dt.id = names.name
            personas.push(names.name)
        }
        console.log(personas[0])
        fetch('data/kittens.json')
            .then(response => response.json())
            .then((gatos =>{              
                
              for (const persona of personas) {
                console.log(gatos[persona])
                    
            }
                
            }))
    } )
  