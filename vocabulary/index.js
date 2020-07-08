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
  console.log(await wordLibrary.getWords());

  await wordLibrary.updateWordTest('5e9f5ee35eb9e72bc21af716', '0', 1);
  await wordLibrary.updateWordTest('5e9f5ee45eb9e72bc21b020e', '0', 1);
  await wordLibrary.updateWordTest('5e9f5ee35eb9e72bc21af4b4', '0', 1 * 2);
  await wordLibrary.updateWordTest('5e9f5ee35eb9e72bc21af4b5', '0', 1 * 3);
  await wordLibrary.updateWordTest('5e9f5ee35eb9e72bc21af4b6', '0', 1 * 3);
  await wordLibrary.updateWordTest('5e9f5ee35eb9e72bc21af4b7', '0', 1 * 3);
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
