// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//- Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click.

const buttonElement = document.getElementById('button');

const buttonEvent = () => {
  console.log(buttonElement.textContent);
};

buttonElement.addEventListener('click', buttonEvent);

//- Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"
const h1Element = document.getElementById('title');

const changeTitle = () => {
  h1Element.textContent = 'Quita de encima!!';
};

const changeTitle2 = () => {
  h1Element.textContent = 'Soy un título';
};

h1Element.addEventListener('mouseover', changeTitle);
h1Element.addEventListener('mouseout', changeTitle2);

//- Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana.

const changeWindow = () => {
  console.log(
    `el ancho de la pantalla es ${window.innerHeight} px y el alto es ${window.innerWidth} px`
  );
};

window.addEventListener('resize', changeWindow);

//- Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.

const textElement = document.getElementById('text');

const textChar = (event) => {
  textElement.textContent = `has pulsado la tecla ${event.key}`;
};
window.addEventListener('keydown', textChar);

//- Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

const subtitleElement = document.getElementById('subtitle');
const nextButton = document.getElementById('button--next');
const prevButton = document.getElementById('button--previus');
let counter = 0;
const text = ['azul', 'mocatriz', 'carapan', 'sobras', 'ñoñería'];

const prevChange = () => {
  if (counter <= 0) {
    counter = text.length - 1;
  } else {
    counter--;
  }

  subtitleElement.textContent = text[counter];
  subtitleDisabled();
};

const nextChange = () => {
  if (counter >= text.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  subtitleElement.textContent = text[counter];
  subtitleDisabled();
};

prevButton.addEventListener('click', prevChange);
nextButton.addEventListener('click', nextChange);

//- Repite el mismo ejercicio pero esta vez desactiva el botón previous si estás en el primer elemento y el botón next si estás en el último

const subtitleDisabled = () => {
  subtitleElement.textContent = text[counter];
  prevButton.disabled = counter === 0;
  nextButton.disabled = counter === text.length - 1;
};

//- Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range.

//- Crea una lista de 4 checkbox con el texto que quieras y un botón, al pulsar el botón deberá decirte cuantos checkbox están marcados y cual es su texto.
