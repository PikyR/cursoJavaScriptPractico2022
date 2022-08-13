const title = document.querySelector('h1');
const parrafo = document.querySelector('p');
const segundoParrafo = document.querySelector('.segundoParrafo');
const tercerParrafo = document.querySelector('#tercerParrafo');
const input = document.querySelector('input');

console.log({
  title,
  parrafo,
  segundoParrafo,
  tercerParrafo,
  input
});


// title
title.innerText = 'El Titulo JS';

// Por cuestiones de seguridad no es recomendable utilizar .innerHTML
// title.innerHTML = 'El Titulo <br> JS'; 

title.getAttribute('class'); // main-title
title.setAttribute('class', 'main-title--underline');

title.classList.add('main-title');
title.classList.remove('main-title--underline');
// title.classList.toggle('main-title');
// title.classList.contains('main-title');

/***************/

// input
input.value = 'Value desde JS';

// document
const image = document.createElement('img');
image.setAttribute('src', 'https://via.placeholder.com/150');

tercerParrafo.innerHTML = '';
tercerParrafo.appendChild(image);
