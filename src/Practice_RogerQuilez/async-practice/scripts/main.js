const image = document.querySelector('img');

async function loadFiles() {

    try {

        const responsePersons = await fetch('data/persons.json');
        const responseKittens = await fetch('data/kittens.json');

        return await Promise.all([responsePersons.json(), responseKittens.json()]);

    } catch(e) {

        console.error(e);
    }

    return null;
    
}

loadFiles().then(array => {

    const [persons, kittens] = array;
    printList(persons, kittens);

});

function printList(persons, kittens) {
    let lista = '<ul>';

    for (let person of persons) {

        lista += `<li>${person.name}</li>`;

        for (let key in kittens) {

            if (key === person.name) {

                let kits = kittens[key];
                lista += '<ul>';

                for (let kit of kits) {
                    lista += `<li>Nombre: ${kit.name}, Sexo: ${kit.gender == 'm' ? 'Macho' : 'Hembra'}</li>`;
                }

                lista += '</ul>';
            }
        }
    }

    lista += '</ul>';
    image.remove();
    document.querySelector('body').innerHTML += lista;
}