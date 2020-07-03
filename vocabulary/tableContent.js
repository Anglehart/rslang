
const tableBody = document.querySelector('div.tableBody');

function addRow(data) {
  console.log(data);
  const rowDiv = document.createElement('div');
  rowDiv.classList.add('tableRow');
  rowDiv.innerHTML = `
    <div class="tableCell checkboxCell">&nbsp;</div>
    <div class="tableCell audioCell">&nbsp;</div>
    <div class="tableCell idCell">${data.idWord}</div>
    <div class="tableCell wordCell">${data.word}</div>
    <div class="tableCell transkriptCell">${data.transkription}</div></div>
    <div class="tableCell translateCell">${data.translate}</div>
    <div class="tableCell statistic_1Cell">${data.created}</div>
    <div class="tableCell statistic_2Cell">${data.last}</div>
  `;
  tableBody.appendChild(rowDiv);
}


// addRow(testData);
// addRow(testData);
// addRow(testData);
// addRow(testData);

export default addRow;