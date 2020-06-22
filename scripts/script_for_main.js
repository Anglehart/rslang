/* --------------------------------Slider------------------------------------- */
/* global Swiper */
/* eslint no-undef: "error" */
/* eslint-disable no-unused-vars */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 50,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
  mousewheel: true,
  breakpoints: {
  // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 501px
    920: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  keyboard: true,
});

/* --------------------------------Words------------------------------------- */

const words = document.getElementsByClassName('word');
const wordArray = [];
let currentWord = 0;

function splitLetters(word) {
  const content = word.innerHTML;
  word.innerHTML = '';
  const letters = [];
  for (let i = 0; i < content.length; i += 1) {
    const letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

function animateLetterOut(cw, i) {
  setTimeout(() => {
    cw[i].className = 'letter out';
  }, i * 80);
}

function animateLetterIn(nw, i) {
  setTimeout(() => {
    nw[i].className = 'letter in';
  }, 340 + (i * 80));
}

words[currentWord].style.opacity = 1;
for (let i = 0; i < words.length; i += 1) {
  splitLetters(words[i]);
}

function changeWord() {
  const cw = wordArray[currentWord];
  const nw = currentWord === words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
  for (let i = 0; i < cw.length; i += 1) {
    animateLetterOut(cw, i);
  }

  for (let i = 0; i < nw.length; i += 1) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = (currentWord === wordArray.length - 1) ? 0 : currentWord + 1;
}

changeWord();
setInterval(changeWord, 4000);


// -----------------Click-------------

document.onclick = function change() {
  if (event.target.className !== 'p_menu' && event.target.className !== 'silka' && event.target.className !== 'nav-toggle expanded' && event.target.className !== 'nav-toggle-bar') {
    document.querySelector('.nav-toggle').classList.remove('expanded');
    document.querySelector('#nav').classList.remove('expanded');
  }
};

(function menu() {
  const hamburger = {
    nav: document.querySelector('#nav'),
    navToggle: document.querySelector('.nav-toggle'),

    initialize() {
      this.navToggle.addEventListener('click',
        () => { this.toggle(); });
    },

    toggle() {
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    },
  };

  hamburger.initialize();
}());
