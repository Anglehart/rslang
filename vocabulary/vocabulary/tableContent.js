/* eslint-disable no-param-reassign */
/* eslint-disable dot-notation */
/* eslint-disable class-methods-use-this */

class TableContent {
  rowCount() {
    const tableBody = document.querySelector('div.tableBody');
    return tableBody.childNodes.length - 2;
  }

  getDate(time) {
    // console.log(`time ${time}`);
    let rowtime = new Date();
    rowtime.setTime(time);
    if (isNaN(rowtime)) {
      rowtime = new Date(time);
    }
    // console.log(`is number? ${Number.isInteger(time)}`);
    // console.log(`rowtime ${time}`);
    // console.log(`rowtime ${rowtime.getMonth()}`);
    // console.log(`gettime ${rowtime.getTime()}`);
    const day = rowtime.getDate() > 9 ? rowtime.getDate() : `0${rowtime.getDate()}`;
    const month = rowtime.getMonth() + 1 > 9 ? rowtime.getMonth() + 1 : `0${rowtime.getMonth() + 1}`;
    const year = rowtime.getFullYear();
    return `${day}/${month}/${year}`;
  }

  clearTable() {
    const tableBody = document.querySelector('div.tableBody');
    tableBody.innerHTML = `
    <div class="tableRow">
      <div class="tableCell checkboxCell">Выбрать</div>
      <div class="tableCell idCell">№ п/п </div>
      <div class="tableCell audioCell">Иконка прослушивания</div>
      <div class="tableCell wordCell">Слово</div>
      <div class="tableCell transcriptCell">Транскрипция</div>
      <div class="tableCell translateCell">Перевод</div>
      <div class="tableCell statistic_1Cell">Дата добавления</div>
      <div class="tableCell statistic_2Cell">Дата изменения</div>
    </div>
    `;
  }

  checkActiveRow() {
    const tableBody = document.querySelector('div.tableBody');
    const words = tableBody.querySelectorAll('div.active-row');
    return words;
  }

  checkButton() {
    const addButton = document.querySelector('button.add-button');
    const delButton = document.querySelector('button.del-button');
    const parentRow = window.event.target.parentNode.parentNode.parentNode;
    if (!window.event.target.classList.contains('tab--link')
      || document.querySelector('.active-row')) {
      parentRow.classList.toggle('active-row');
      addButton.classList.add('allowed');
      delButton.classList.add('allowed');
    } else {
      addButton.classList.remove('allowed');
      delButton.classList.remove('allowed');
    }
  }

  removeRow(row) {
    const tableBody = document.querySelector('div.tableBody');
    tableBody.removeChild(row);
  }

  countWords() {
    const cells = document.querySelectorAll('.numberCell');
    cells.forEach((item, index) => {
      item.innerHTML = index + 1;
    });
  }

  addRow(data) {
    console.log(data.userWord.optional);
    const tableBody = document.querySelector('div.tableBody');
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('tableRow');
    rowDiv.innerHTML = `
      <div class="tableCell checkboxCell">
        <label class='checkbox--label for='${data['_id']}'>
          <input type='checkbox' class='cell--checkbox' id='${data['_id']}'>
        </label>
      </div>
      <div class="tableCell idCell numberCell" data-wordId='${data['_id']}'>${this.rowCount()}</div>
      <div class="tableCell audioCell "><i class="fas fa-play"></i></div>
      <div class="tableCell wordCell">${data.word}</div>
      <div class="tableCell transcriptCell">${data.transcription}</div></div>
      <div class="tableCell translateCell">${data.wordTranslate}</div>
      <div class="tableCell statistic_1Cell">${this.getDate(data.userWord.optional.firstTime)}</div>
      <div class="tableCell statistic_2Cell">${this.getDate(data.userWord.optional.lastTime)}</div>
    `;
    rowDiv.setAttribute('data-wordId', `${data['_id']}`);
    tableBody.appendChild(rowDiv);

    rowDiv.querySelector('i.fa-play').addEventListener('click', () => {
      const audio = new Audio();
      audio.src = `https://raw.githubusercontent.com/Anglehart/rslang-data/master/${data.audio}`;
      audio.play();
    });

    rowDiv.querySelector('.checkboxCell').addEventListener('click', this.checkButton);
  }
}

const table = new TableContent();
export default table;
