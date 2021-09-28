const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for(i=1; i <= 5; i++) {
    const imagen = document.createElement('img');
    imagen.setAttribute('src', 'images/pic' + i + '.jpg');

    thumbBar.append(imagen);
    imagen.onclick = function (e) {
        displayedImage.src = e.target.src;
    }
}



/* Wiring up the Darken/Lighten button */
let op=1;
btn.onclick = function(){


    if (op === 1){
        document.body.style.opacity = 0.4;
        op=0.5;

    }else{
        document.body.style.opacity = 1;
        op = 1;
    }



};
