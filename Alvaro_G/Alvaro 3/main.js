const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
//Creamos un for para que imprima cada imagen por el número x
for(let x = 1; x <6; x++) {
const newImage = document.createElement('img');
newImage.setAttribute('src', 'pic'+ x +'.jpg');
//Creamos el onclick para cada imagen impresa por pantalla mediante este método
thumbBar.appendChild(newImage);
newImage.onclick = function(e) {
    displayedImage.src = e.target.src;
  }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function() {
    //Hacemos que el botón tenga el atributo atr
    const btnClass = btn.getAttribute('atr');
    //Creamos el if que, si la imagen es oscura, le pone luz y cambia el texto del botón
    if(btnClass === 'dark') {
      btn.setAttribute('atr','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
      //Con el else if hacemos que la imagen iluminada se vuelva oscura, cambiando el texto también al detectar que la clase no es dark
    } else if  (btnClass != 'dark'){
      btn.setAttribute('atr','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  }