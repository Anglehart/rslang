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

function animateLetterOut(useword, i) {
  setTimeout(() => {
    useword[i].className = 'letter out';
  }, i * 80);
}

function animateLetterIn(nextword, i) {
  setTimeout(() => {
    nextword[i].className = 'letter in';
  }, 340 + (i * 80));
}

words[currentWord].style.opacity = 1;
for (let i = 0; i < words.length; i += 1) {
  splitLetters(words[i]);
}

function changeWord() {
  const useword = wordArray[currentWord];
  const nextword = currentWord === words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
  for (let i = 0; i < useword.length; i += 1) {
    animateLetterOut(useword, i);
  }

  for (let i = 0; i < nextword.length; i += 1) {
    nextword[i].className = 'letter behind';
    nextword[0].parentElement.style.opacity = 1;
    animateLetterIn(nextword, i);
  }

  currentWord = (currentWord === wordArray.length - 1) ? 0 : currentWord + 1;
}

changeWord();
setInterval(changeWord, 4000);

// -----------------Click-------------

document.onclick = function change() {
  if (event.target.className !== 'p_menu' && event.target.className !== 'link' && event.target.className !== 'nav-toggle expanded' && event.target.className !== 'nav-toggle-bar') {
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

// -----------------Delete-------------
function deleteInform() {
  document.getElementById('butSide').textContent = 'Вход';
  document.getElementById('but2').textContent = 'Авторизация';
  localStorage.removeItem('email');
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  document.getElementById('autoriz').textContent = 'Вход';
  document.getElementById('but-autoriz').classList.remove('button-input-autoriz');
}

// -----------------login-------------
if (localStorage.getItem('userId') !== null) {
  document.getElementById('but-autoriz').onclick = '';
  document.getElementById('autoriz').textContent = localStorage.email;
  document.getElementById('but-autoriz').classList.add('button-input-autoriz');
  document.getElementById('but2').textContent = 'Выход';
  document.getElementById('butSide').textContent = 'Выход';
  document.getElementById('but-autoriz').onclick = function remove() {
    deleteInform();
  };
}

function changePageSide() {
  if (localStorage.getItem('userId') === null) {
    document.location.href = '../authorization/src/index.html';
  } else {
    deleteInform();
  }
}

// -----------------changePage-------------

function changePage(href) {
  if (localStorage.getItem('userId') === null) {
    document.location.href = '../authorization/src/index.html';
  } else { document.location.href = href; }
}
