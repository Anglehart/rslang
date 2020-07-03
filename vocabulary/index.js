import * as words from '../words';
import addRow from './tableContent';
import css from './index.css';
import table from './table.css';

words.setLocalStorage();

// const testData = {
//   idWord: 1,
//   word: 'cat',
//   transkription: '[cat]',
//   translate: 'кот',
//   created: '21.12.2012',
//   last: '03.07.2020',
// }
// addRow(testData);

const del = document.querySelector('button.del-button');
const add = document.querySelector('button.add-button');

function drawTable(){
  const data = words.getWords();

}
words.getWords();
// drawTable();

function changeTable(color) {
  // here request to dataBase with userID and rules for words
  console.log(`change to ${color}`);

  if (color === 'red') {
    del.classList.add('none');
    add.classList.remove('none');
  }
  else if (color === 'green' || 'blue') {
    del.classList.remove('none');
    add.classList.add('none');
  }
}

function change() {
  const active_color_element = document.querySelector('div.active-bg');
  const active_color = active_color_element.getAttribute('data-mode_color');
  const change_on_element = event.target;
  const change_on = change_on_element.getAttribute('data-mode_color')
  const main = document.querySelector('main.main');

  if (active_color !== change_on && event.target.nodeName === 'DIV') {
    active_color_element.classList.remove('active-bg');
    change_on_element.classList.add('active-bg');
    main.classList = (`main bg-${change_on}`);
    changeTable(change_on);
  }
}

document.querySelector('div.tabs-row').addEventListener("click", change)