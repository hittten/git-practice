const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = "Willy the Goblin Big Daddy Father Christmas";
let insertY = " the soup kitchen \n Disneyland \n the White House";
let insertZ = " spontaneously combusted \n melted into a puddle on the sidewalk \n turned into a slug and crawled away ";