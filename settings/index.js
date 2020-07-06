window.onload = function() {
  loadSettings();
}

function saveSettings() {
  const WordsPerDay = Number(document.getElementById('wordsPerDay').value);
  const CardsPerDay = Number(document.getElementById('cardsPerDay').value);
  if (WordsPerDay < 10 || WordsPerDay > 50 || CardsPerDay < 10 || CardsPerDay > 50) {
    showMessage(false);
    return false;
  }
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  let data = {};
  data.optional = {};
  data.wordsPerDay = WordsPerDay;
  data.optional.cardsPerDay = CardsPerDay;
  document.querySelectorAll('input[type=checkbox]').forEach((item) => {
    data.optional[item.id] = item.checked; 
  });
      
  fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/settings`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
  .then(() => {
    showMessage(true);
    document.getElementById('wordsPerDay').value = WordsPerDay;
    document.getElementById('cardsPerDay').value = CardsPerDay;
  });
}

function loadSettings() {
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/settings`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  .then((response) => response.json())
  .then((data) => {
    drawForm(data);
  })
  .catch(() => {
    console.log(new Error);
  })
}

function drawForm(data) {
  document.querySelector('#wordsPerDay').value = data.wordsPerDay;
  document.querySelector('#cardsPerDay').value = data.optional.cardsPerDay;
  
  for (key in data.optional) {
    if (key !== 'cardsPerDay') {
      document.getElementById(key).checked = data.optional[key];
      document.getElementById(key).addEventListener('click', () => { checkRequired(); })
    } 
  }
  checkRequired();
}

function checkRequired() {
  const a = document.getElementById('showTranslation');
  const b = document.getElementById('showTextMeaning');
  const c = document.getElementById('showTextExample');
  a.disabled = '';
  b.disabled = '';
  c.disabled = '';
  if (a.checked == false && b.checked == false) { 
    c.disabled = 'true';
  } else if(a.checked == false && c.checked == false) {
    b.disabled = 'true';
  } else if(b.checked == false && c.checked == false) {
    a.disabled = 'true';
  }
}

function showMessage(boolean) {
  const Message = document.querySelector('.message');
  Message.innerHTML = '<p class="error">Number of words and cards must be between 10 and 50.</p>';
  if (boolean) Message.innerHTML = '<p class="success">Settings saved!</p>';
  Message.classList.add('showMessage');
  setTimeout(() => { Message.classList.remove('showMessage') }, 3000);
}
