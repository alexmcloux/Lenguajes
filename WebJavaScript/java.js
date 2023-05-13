// Redes sociales
document.addEventListener('DOMContentLoaded', function () {
  const facebookButton = document.getElementById('facebook');
  const twitterButton = document.getElementById('twitter');
  const instagramButton = document.getElementById('instagram');
  const githubButton = document.getElementById('github');

  if (facebookButton) {
    facebookButton.addEventListener('click', function () {
      window.location.href = 'https://www.facebook.com/eldiadellibro/?locale=es_ES';
    });
  }

  if (twitterButton) {
    twitterButton.addEventListener('click', function () {
      window.location.href = 'https://twitter.com/diadellibro?lang=es';
    });
  }

  if (instagramButton) {
    instagramButton.addEventListener('click', function () {
      window.location.href = 'https://www.instagram.com/diadellibrochile/';
    });
  }

  if (githubButton) {
    githubButton.addEventListener('click', function () {
      window.location.href = 'https://github.com/alexmcloux/Lenguajes.git';
    });
  }
});


//Carrusel
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;
let slides;
let totalSlides;

if (carousel) {
  slides = carousel.getElementsByTagName('img');
  totalSlides = slides.length;
}

function showSlide(index) {
  if (slides) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[index].style.display = 'block';
  }
}

function showNextSlide() {
  currentSlide++;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function showPreviousSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  showSlide(currentSlide);
}

if (prevButton && nextButton) {
  prevButton.addEventListener('click', showPreviousSlide);
  nextButton.addEventListener('click', showNextSlide);
}

if (carousel) {
  showSlide(currentSlide);
}
//Reloj
showSlide(currentSlide);
function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
  var time = setTimeout(function () { startTime() }, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// Formulario
const form = document.getElementById('formulario');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (validateForm()) {
    sendForm();
  }
})
function validateForm() {
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const mensaje = document.getElementById('mensaje').value;

  if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
    alert('Por favor, complete todos los campos.');
    return false;
  }
  return true;
}
function sendForm() {
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const mensaje = document.getElementById('mensaje').value;
  const datos = `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`;
  alert(datos);


}
//Mensaje de alerta
const alertButton = document.getElementById('alertButton');
alertButton.addEventListener('click', function () {
  alert('¡Mensaje emergente!');
});




