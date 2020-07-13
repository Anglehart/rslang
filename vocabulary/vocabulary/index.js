/* eslint-disable no-unused-vars */
import wordLibrary from '../words';
import tableContent from './tableContent';
import css from './index.css';
import table from './table.css';

const del = document.querySelector('button.del-button');
const add = document.querySelector('button.add-button');

async function changeTable(color) {
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

  window.addEventListener('scroll', async () => {
    if (window.scrollY + 1 >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
      const newWords = await wordLibrary.loadAggregatedWords(filter, page + 1);
      newWords.forEach(async (element) => { 
        await tableContent.addRow(element);
      });
      page += 1;
    };
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
    console.log(tableContent.checkActiveRow());
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

function onScroll() {
  if (window.scrollY + 1 >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
    tableContent.loadPaginator();
  }
}

changeTable('green');


document.querySelector('button.del-button').addEventListener('click', deletWords);
document.querySelector('button.add-button').addEventListener('click', restoreWords);
document.querySelector('div.tabs-row').addEventListener('click', change);
