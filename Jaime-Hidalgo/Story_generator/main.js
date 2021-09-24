//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

let customName = document.querySelector("#customname");
let randomize = document.querySelector(".randomize");
let story = document.querySelector(".story");
function randomValueFromArray(array){
    let fin = Math.floor(Math.random() * 3)
    return array[fin]
};


//2. RAW TEXT STRINGS

const insertX =["coche","moto","patinete"];
const insertY =["rojo","verde","azul"];
const insertZ =["perro","gato","gaviota"];
const storyText=`Es verano, un sol brillante en el cielo, una carretera al lado de la playa y va Paco conduciendo su ${insertX} de color ${insertY} y acompañado de su inseparable mascota Toby el ${insertZ} ` ;


//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click',result);

function result(){

    let newStory=storyText;
    let xItem=randomValueFromArray(insertX);
    let yItem=randomValueFromArray(insertY);
    let zItem=randomValueFromArray(insertZ);

    newStory = newStory.replace(insertX,xItem )
    newStory = newStory.replace(insertY,yItem )
    newStory = newStory.replace(insertZ,zItem )

    
    if(customName.value !== ""){
        const name =customName.value;
        newStory = newStory.replace('Paco',name);
        console.log(name)

    }

    story.textContent  = newStory;
    story.style.visibility = 'visible';
    
}