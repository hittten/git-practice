const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 0; i < 5; i ++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${(i+1)}.jpg`);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', newImage.getAttribute('src'));
    })
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click',  () => {

    if (btn.classList.contains('dark')) {
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        btn.textContent = 'Lightest';
        btn.setAttribute('class', 'light');
        
    } else {
        overlay.style.backgroundColor = 'rgba(0,0,0,0.0)';
        btn.textContent = 'Darken';
        btn.setAttribute('class', 'dark');
    }
    
})
