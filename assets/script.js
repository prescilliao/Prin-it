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
const TexteSlide = document.getElementById("photo");
const ImageSlide = document.getElementById("texte");
const PositionBoxDots = document.querySelector(".dots");

let valeur = 0;

slides.forEach(() => {
  let bullet = document.createElement("div");
  bullet.classList.add("dot");
  PositionBoxDots.appendChild(bullet);
});

const StyleBullets = document.querySelectorAll(".dot");
StyleBullets[valeur].classList.add("dot_selected");

Flechedoite.addEventListener("click", () => {});

Flechegauche.addEventListener("click", () => {});
