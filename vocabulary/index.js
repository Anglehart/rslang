/* eslint-disable no-unused-vars */
import wordLibrary from '../words';
import addRow from './tableContent';
import css from './index.css';
import table from './table.css';


const del = document.querySelector('button.del-button');
const add = document.querySelector('button.add-button');

// wordLibrary.setLocalStorage();

async function start() {
  const allWords = await wordLibrary.getWords();
  allWords.forEach((element) => wordLibrary.getWordData(element));
  console.log( await wordLibrary.getWords());
}
start();

function changeTable(color) {
  console.log(`change to ${color}`);

  if (color === 'red') {
    del.classList.add('none');
    add.classList.remove('none');
  } else if (color === 'green' || 'blue') {
    del.classList.remove('none');
    add.classList.add('none');
  }
}

function change() {
  const activeColorElement = document.querySelector('div.active-bg');
  const activeColor = activeColorElement.getAttribute('data-mode_color');
  const changeOnElement = window.event.target;
  const changeOn = changeOnElement.getAttribute('data-mode_color');
  const main = document.querySelector('main.main');

  if (activeColor !== changeOn && window.event.target.nodeName === 'DIV') {
    activeColorElement.classList.remove('active-bg');
    changeOnElement.classList.add('active-bg');
    main.classList = (`main bg-${changeOn}`);
    changeTable(changeOn);
  }
}

document.querySelector('div.tabs-row').addEventListener('click', change);
