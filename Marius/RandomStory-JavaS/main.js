
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];

}

let storyText="I`m trying so hard to learn html,css and javascrip and i'm not good at this things because ";
let insertX =["Chocolate", "Juice", "Drugs"];
let insertY =["Kill", "Thinking" , "Flying"];
let insertZ =["in the hood","the cataclism","is a dangerous stuff to smoke"];



randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob',name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300*0.0714286) + ' stone';
        const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
        newStory = newStory.replace('94 fahrenheit',temperature);
        newStory = newStory.replace('300 pounds',weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
document.querySelector('html').style.backgroundColor = 'Pink';




