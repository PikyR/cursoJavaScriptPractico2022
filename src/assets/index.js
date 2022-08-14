// const title = document.querySelector('h1');
// const parrafo = document.querySelector('p');
// const segundoParrafo = document.querySelector('.segundoParrafo');
// const tercerParrafo = document.querySelector('#tercerParrafo');
// const input = document.querySelector('input');

// console.log({
//   title,
//   parrafo,
//   segundoParrafo,
//   tercerParrafo,
//   input
// });


// // title
// title.innerText = 'El Titulo JS';

// // Por cuestiones de seguridad no es recomendable utilizar .innerHTML
// // title.innerHTML = 'El Titulo <br> JS'; 

// title.getAttribute('class'); // main-title
// title.setAttribute('class', 'main-title--underline');

// title.classList.add('main-title');
// title.classList.remove('main-title--underline');
// // title.classList.toggle('main-title');
// // title.classList.contains('main-title');

// /***************/

// // input
// input.value = 'Value desde JS';

// // document
// const image = document.createElement('img');
// image.setAttribute('src', 'https://via.placeholder.com/150');

// tercerParrafo.innerHTML = '';
// tercerParrafo.appendChild(image);


/* Clase 12 */
// suma
const title = document.querySelector('.main-title');
const input1 = document.querySelector('#input-1');
const input2 = document.querySelector('#input-2');
const btnCalc = document.querySelector('#btn-sumar');
const resultContainer = document.querySelector('#resultContainer');
// resta
const form = document.querySelector('#resta')
const restaInput1 = document.querySelector('#resta__input-1')
const restaInput2 = document.querySelector('#resta__input-2')
const restaResultContainer = document.querySelector('#resultContainerResta')

// Solo poner el nombre de la función! 
btnCalc.addEventListener('click', sumar); 

function sumar() {
  const num1 = parseInt(input1.value);
  const num2 = parseInt(input2.value);
  const result = num1 + num2;

  resultContainer.innerText = `${num1} + ${num2} = ${result}`
}

form.addEventListener('submit', restar);

function restar(event) {
  event.preventDefault();

  const num1 = parseInt(restaInput1.value);
  const num2 = parseInt(restaInput2.value);
  const result = num1 - num2;

  restaResultContainer.innerText = `${num1} - ${num2} = ${result}`;
}