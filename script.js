const $ = el => document.querySelector(el);
const $contador = $('.contador');
const $stick = $('.stick');
let bowlInterval = null;
let contador = 0;

function addContador() {
  if (contador < 101) {
    $contador.textContent = `${contador}%`;
    $stick.style.width = `${contador}%`;
    contador++;
  } else {
    setInterval(bowlInterval);
  }
}

setTimeout(() => {
  $contador.innerHTML = 'WELCOME';
}, 6000);

bowlInterval = setInterval(addContador, 50);
