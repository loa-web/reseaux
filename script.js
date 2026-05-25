// LOADER

window.addEventListener("load", () => {

  setTimeout(() => {

    document.getElementById("loader").style.opacity = "0";

    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 1000)

  }, 1800)

})
  
 // MUSIC
const audio = document.getElementById("audio");
const musicBtn = document.getElementById("music-btn");

// volume
audio.volume = 0.5;

// état réel de la musique
let playing = true;

// essaie autoplay
window.addEventListener("load", () => {
  audio.play().catch(() => {
    playing = false;
    musicBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  });
});

// bouton
musicBtn.addEventListener("click", () => {

  if (playing) {

    audio.pause();
    playing = false;

    musicBtn.innerHTML =
      '<i class="fa-solid fa-volume-xmark"></i>';

  } else {

    audio.play();

    playing = true;

    musicBtn.innerHTML =
      '<i class="fa-solid fa-volume-high"></i>';
  }

});

// TYPING EFFECT

const text = [
  "developer",
  "cats lover",
  "guns.lol aesthetic",
  "frontend designer"
]

let speed = 90
let textIndex = 0
let charIndex = 0

const typedText = document.getElementById("typed-text")

function typeEffect(){

  if(charIndex < text[textIndex].length){

    typedText.textContent +=
    text[textIndex].charAt(charIndex)

    charIndex++

    setTimeout(typeEffect, speed)

  } else {

    setTimeout(eraseEffect, 1600)
  }
}

function eraseEffect(){

  if(charIndex > 0){

    typedText.textContent =
    text[textIndex].substring(0, charIndex - 1)

    charIndex--

    setTimeout(eraseEffect, 50)

  } else {

    textIndex++

    if(textIndex >= text.length){
      textIndex = 0
    }

    setTimeout(typeEffect, 400)
  }
}

window.onload = () => {
  typeEffect()
}

// CURSOR

const cursor = document.querySelector('.cursor')
const cursorBlur = document.querySelector('.cursor-blur')

window.addEventListener('mousemove', (e) => {

  cursor.style.left = e.clientX + 'px'
  cursor.style.top = e.clientY + 'px'

  cursorBlur.style.left = e.clientX + 'px'
  cursorBlur.style.top = e.clientY + 'px'

})
