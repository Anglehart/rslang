/* eslint-disable no-unused-vars */
import wordLibrary from '../words';
import tableContent from './tableContent';
import css from './index.css';
import table from './table.css';

const del = document.querySelector('button.del-button');
const add = document.querySelector('button.add-button');

async function changeTable(color) {
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
  const allWords = await wordLibrary.loadAggregatedWords(filter);
  allWords.forEach(async (element) => { await tableContent.addRow(element); });
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
    console.log(tableContent.checkActiveRow());
    tableContent.checkButton();
  }
}

function deletWords() {
  const words = tableContent.checkActiveRow();
  if (words) {
    words.forEach((element) => {
      const wordId = element.getAttribute('data-wordid');
      wordLibrary.remove(wordId);
      tableContent.removeRow(element);
    });
    tableContent.countWords();
  } else {
    wordLibrary.showError('Nothing to delet!');
  }
}

function restoreWords() {
  const words = tableContent.checkActiveRow();
  if (words) {
    words.forEach((element) => {
      const wordId = element.getAttribute('data-wordid');
      wordLibrary.restore(wordId);
      tableContent.removeRow(element);
    });
    tableContent.countWords();
  } else {
    wordLibrary.showError('Nothing to restore!');
  }
}

changeTable('green');

document.querySelector('button.del-button').addEventListener('click', deletWords);
document.querySelector('button.add-button').addEventListener('click', restoreWords);
document.querySelector('div.tabs-row').addEventListener('click', change);
