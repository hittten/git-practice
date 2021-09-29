const defList = document.querySelector("#defList")


fetch('data/persons.json')
  .then(response => response.json())
  .then((data) => {
    let personas = []
    for (const names of data) {
      const dt = document.createElement("dt")
      defList.appendChild(dt)
      dt.textContent = names.name
      dt.id = `${names.name}`
      personas.push(names.name)
    }

    fetch('data/kittens.json')
      .then(response => response.json())
      .then((gatos => {
        for (const persona of personas) {
          console.log(gatos)
          for (const gato of gatos[persona]) {
            let asignar = document.querySelector(`#${persona}`)
            const dd = document.createElement("dd")
            dd.textContent = gato.name
            asignar.appendChild(dd)
          }

        }

      }))
  })
