const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const Flechegauche = document.getElementById("left");
const Flechedoite = document.getElementById("right");
const TexteSlide = document.getElementById("texte");
const ImageSlide = document.getElementById("photo");
const PositionBoxDots = document.querySelector(".dots");

let valeur = 0;

slides.forEach(() => {
  let bullet = document.createElement("div");
  bullet.classList.add("dot");
  PositionBoxDots.appendChild(bullet);
});

const StyleBullets = document.querySelectorAll(".dot");
StyleBullets[valeur].classList.add("dot_selected");

Flechedoite.addEventListener("click", () => {
  ChangeSlide(+1);
});

Flechegauche.addEventListener("click", () => {
  ChangeSlide(-1);
});

function ChangeSlide(sens) {
  StyleBullets[valeur].classList.remove("dot_selected");
  valeur = valeur + sens;
  if (valeur < 0) {
    valeur = slides.length - 1;
  }
  if (valeur > slides.length - 1) {
    valeur = 0;
  }
  ImageSlide.src = slides[valeur].image;
  TexteSlide.innerHTML = slides[valeur].tagLine;
  StyleBullets[valeur].classList.add("dot_selected");
}
