const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 0; i < 5; i ++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + (i+1) + '.jpg');
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', newImage.getAttribute('src'));
    })
}

/* Wiring up the Darken/Lighten button */

const buttonDark = document.querySelector('.dark');

buttonDark.addEventListener('click',  () => {

    if (buttonDark.classList.contains('dark')) {
        displayedImage.style.filter = 'brightness(50%)';
        buttonDark.textContent = 'Lightest';
        buttonDark.classList.remove('dark');
        buttonDark.classList.add('light');

    } else {
        displayedImage.style.filter = 'brightness(100%)';
        buttonDark.textContent = 'Darken';
        buttonDark.classList.remove('light');
        buttonDark.classList.add('dark');
    }
    
})
