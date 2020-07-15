/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

import wordLibrary from '../words';
import tableContent from './tableContent';
import css from './index.css';
import table from './table.css';
import header from './header.css';

document.onclick = function change() {
  if (event.target.className !== 'p_menu'
    && event.target.className !== 'link'
    && event.target.className !== 'nav-toggle expanded'
    && event.target.className !== 'nav-toggle-bar') {
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
  document.getElementById('butExit').textContent = 'Вход';
  localStorage.removeItem('email');
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  document.getElementById('autorization').textContent = 'Вход';
  document.getElementById('but-autorization').classList.remove('button-input-autorization');
  document.location.href = '../../index.html';
}

// -----------------login-------------
if (localStorage.getItem('userId') !== null) {
  document.getElementById('but-autorization').onclick = '';
  document.getElementById('autorization').textContent = localStorage.email;
  document.getElementById('but-autorization').classList.add('button-input-autorization');
  document.getElementById('butExit').textContent = 'Выход';
  document.getElementById('but-autorization').onclick = function remove() {
    deleteInform();
  };
}

function changePageSide() {
  if (localStorage.getItem('userId') === null) {
    document.location.href = '../../index.html';
  } else {
    deleteInform();
  }
}

// -----------------changePage-------------

function changePage(href) {
  if (localStorage.getItem('userId') === null) {
    document.location.href = '../../index.html';
  } else { document.location.href = href; }
}



const del = document.querySelector('button.del-button');
const add = document.querySelector('button.add-button');

async function changeTable(color) {
  const addMoreButton = document.querySelector('div.addMoreButton');
  let page = 1;
  let filter = [];
  if (color === 'red') {
    del.classList.add('none');
    add.classList.remove('none');
    filter = '-1';
  } else if (color === 'green') {
    del.classList.remove('none');
    add.classList.add('none');
    filter = '1,2,3';
  } else if (color === 'blue') {
    del.classList.remove('none');
    add.classList.add('none');
    filter = '3';
  }
  tableContent.clearTable();

  const allWords = await wordLibrary.loadAggregatedWords(filter, page);
  allWords.forEach(async (element) => { await tableContent.addRow(element); });

  async function loadMoreWords() {
    addMoreButton.classList.add('none');
    const newWords = await wordLibrary.loadAggregatedWords(filter, page + 1);
    newWords.forEach(async (element) => {
      await tableContent.addRow(element);
    });
    page += 1;
  }
  addMoreButton.addEventListener('click', loadMoreWords);
  window.addEventListener('scroll', async () => {
    if (window.scrollY + 1 >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
      addMoreButton.classList.remove('none');
    } else {
      addMoreButton.classList.add('none');
    }
  });
}

function change() {
  const activeColorElement = document.querySelector('div.active-bg');
  const activeColor = activeColorElement.getAttribute('data-mode_color');
  const changeOnElement = window.event.target;
  const changeOn = changeOnElement.getAttribute('data-mode_color');
  const main = document.querySelector('main.main');

  if (activeColor !== changeOn && window.event.target.nodeName === 'DIV' && changeOn !== null) {
    activeColorElement.classList.remove('active-bg');
    changeOnElement.classList.add('active-bg');
    main.classList = (`main bg-${changeOn}`);
    changeTable(changeOn);
    tableContent.checkButton();
  }
}

function deletWords() {
  const delButton = document.querySelector('button.del-button');
  const words = tableContent.checkActiveRow();
  if (words) {
    words.forEach((element) => {
      const wordId = element.getAttribute('data-wordid');
      wordLibrary.remove(wordId);
      tableContent.removeRow(element);
    });
    tableContent.countWords();
    delButton.classList.remove('allowed');
  } else {
    wordLibrary.showError('Nothing to delet!');
  }
}

function restoreWords() {
  const addButton = document.querySelector('button.add-button');
  const words = tableContent.checkActiveRow();
  if (words) {
    words.forEach((element) => {
      const wordId = element.getAttribute('data-wordid');
      wordLibrary.restore(wordId);
      tableContent.removeRow(element);
    });
    tableContent.countWords();
    addButton.classList.remove('allowed');
  } else {
    wordLibrary.showError('Nothing to restore!');
  }
}

changeTable('green');

document.querySelector('button.del-button').addEventListener('click', deletWords);
document.querySelector('button.add-button').addEventListener('click', restoreWords);
document.querySelector('div.tabs-row').addEventListener('click', change);
