
const tableBody = document.querySelector('div.tableBody');

function rowCount() {
  return tableBody.childNodes.length - 2;
}

function getDate(time) {
  const rowtime = new Date(time);
  const day = rowtime.getDate() > 9 ? rowtime.getDate() : `0${rowtime.getDate()}`;
  const month = rowtime.getMonth() + 1 > 9 ? rowtime.getMonth() + 1 : `0${rowtime.getMonth() + 1}`;
  const year = rowtime.getFullYear();
  return `${day}/${month}/${year}`;
}

function addRow(data) {
  const rowDiv = document.createElement('div');
  rowDiv.classList.add('tableRow');
  rowDiv.innerHTML = `
    <div class="tableCell checkboxCell">&nbsp;</div>
    <div class="tableCell idCell" data-wordId='${data.id}'>${rowCount()}</div>
    <div class="tableCell audioCell "><i class="fas fa-play"></i></div>
    <div class="tableCell wordCell">${data.word}</div>
    <div class="tableCell transcriptCell">${data.transcription}</div></div>
    <div class="tableCell translateCell">${data.wordTranslate}</div>
    <div class="tableCell statistic_1Cell">${getDate(data.time)}</div>
    <div class="tableCell statistic_2Cell">${data.last}</div>
  `;
  tableBody.appendChild(rowDiv);
  rowDiv.querySelector('div.audioCell').addEventListener('click', () => {
    const audio = new Audio(`data:audio/mpeg;base64,${data.audio}`);
    audio.play();
  })
}

export default addRow;