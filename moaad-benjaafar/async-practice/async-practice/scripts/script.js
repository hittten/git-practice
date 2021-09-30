//PRIMERO CREAMOS ELEMENTOS
const personList = document.createElement('ul');
 //hacemos las funciones
async function downloadInfo(){
    const personsData = fetch('data/persons.json').then(response=>response.json());
    const kittensData = fetch('data/kittens.json').then(response=>response.json());

    return await Promise.all([personsData, kittensData]);
}
function printList (persons, kittens){
    for (let person of persons){
        personList.innerHTML +=`
            <li>
                ${person.name}
                <ul>
                    ${
                    kittens[person.name]
                        .map(kitten=> `<li>${kitten.name}, ${kitten.gender}</li>`)
                        .join()
                }
                </ul>
            </li>`;
    }
    document.body.append(personList);
}
async function main (){
    const[persons, kittens] = await downloadInfo();
    console.log(persons, kittens);

    printList(persons, kittens);
    
 }
main();