const myList = document.querySelector('ul');
let persons = [];
let cats = [] ;

const personList = document.createElement('ul');
const loadinImage = document.querySelector('img');

async function downloadInfo(){
    const personsData = fetch('data/persons.json').then(r=>r.json());
    const kittensData = fetch('data/kittens.json').then(r=>r.json());

    return await Promise.all([personsData,kittensData]);
}
function printList(persons,kittens){
    for(let person of persons){
        personList.innerHTML +=`
            <li>
                ${person.name}
                    <ul>
                    ${kittens[person.name].map(kitten =>`<li>${kitten.name}</li>`)}
                    </ul>
            </li>
        `;
    }
    document.body.append(personList);
}
async function main(){
    const [persons,kittens] = await downloadInfo();
    console.log(persons, kittens);

    printList(persons, kittens);
}




