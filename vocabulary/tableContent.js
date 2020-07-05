
const tableBody = document.querySelector('div.tableBody');

function addRow(data) {
  const rowDiv = document.createElement('div');
  rowDiv.classList.add('tableRow');
  rowDiv.innerHTML = `
    <div class="tableCell checkboxCell">&nbsp;</div>
    <div class="tableCell audioCell "><i class="fas fa-play"></i></div>
    <div class="tableCell idCell">${data.id}</div>
    <div class="tableCell wordCell">${data.word}</div>
    <div class="tableCell transcriptCell">${data.transcription}</div></div>
    <div class="tableCell translateCell">${data.wordTranslate}</div>
    <div class="tableCell statistic_1Cell">${data.created}</div>
    <div class="tableCell statistic_2Cell">${data.last}</div>
  `;
  tableBody.appendChild(rowDiv);
  rowDiv.querySelector('div.audioCell').addEventListener('click', () => {
    const audio = new Audio(`data:audio/mpeg;base64,${data.audio}`);
    audio.play();
  })
}

export default addRow;