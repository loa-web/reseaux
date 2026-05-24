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

const audio = document.getElementById("audio")
const musicBtn = document.getElementById("music-btn")

let playing = false

musicBtn.addEventListener("click", () => {

  if(!playing){

    audio.play()

    musicBtn.innerHTML =
    '<i class="fa-solid fa-volume-xmark"></i>'

    playing = true

  } else {

    audio.pause()

    musicBtn.innerHTML =
    '<i class="fa-solid fa-volume-high"></i>'

    playing = false
  }

})

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