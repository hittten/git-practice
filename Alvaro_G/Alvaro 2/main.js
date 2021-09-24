//Creamos las variabels del nombre, el botón de aleatorizar la historia y la que contiene la historia 
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
//Creamos la función encargada de introducir el contenido de los arrays de forma aleatoria
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//Aquí creamos los arrays que contienen la historia y los eventos que se aleatorizarán con la función anterior
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY = ['the soup kitchen','Disneyland','the White House'];
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

//añadimos un botón que al hacer click nos devuelve el resultado aleatorio de una historia
randomize.addEventListener('click', result);
//El resultado no está completo al copiarlo, por lo que iremos paso a paso arreglándolo
function result() {
    //Una variable para guardar cada historia
    let NewStory= storyText;

    //Creamos una variable para cada uno de los resultados de la aleatorización de los inserts de arriba
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    //hacemos que los insertx,y,z de newStory se cambien por los item x,y,z.
    //Debido a que la x se repite al principio y al final, debemos hacerlo dos veces ya que sólo cambia la primera que encuentra
    NewStory = NewStory.replace(':insertx:',xItem);
    NewStory = NewStory.replace(':inserty:',yItem);
    NewStory = NewStory.replace(':insertz:',zItem);
    NewStory = NewStory.replace(':insertx:',xItem);

  if(customName.value !== '') {
    let name = customName.value;
    //Dentro del if que se ejecuta si se rellena el campo de nombre ponemos que el nombre por defecto Bob sea cambiado por el introducido
    NewStory = NewStory.replace('Bob',name);

  }

  if(document.getElementById("uk").checked) {
    //Este if sólo ocurre cuando se selecciona uk         
    //1 pund son 0,0714 stones, así que se calcula cuánto son 300 pounds y se añade stone al final
    const weight = Math.round(300*0.0714) + ' stone';
    //La formula de conversión Fahrenheit a celsius es (°F − 32) × 5 / 9 y añadimos centigrade al final
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    //Cambiamos los textos establecidos por las variables creadas anteriormente de peso y temperatura
    NewStory = NewStory.replace('300 pounds',weight);
    NewStory = NewStory.replace('94 fahrenheit',temperature);
  }
  //para acabar, hacemos que el texto sea igual a la historia que acabamos de crear.
  story.textContent = NewStory;
  story.style.visibility = 'visible';
}