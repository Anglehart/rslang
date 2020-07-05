window.onload = function() {
  // Временное внесение авторищационных данных
  localStorage.setItem('userId', '5eefa4639896e10017eea40c');
  localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWZhNDYzOTg5NmUxMDAxN2VlYTQwYyIsImlhdCI6MTU5MzkzNTc0OCwiZXhwIjoxNTkzOTUwMTQ4fQ.8kZmR_7pppLklYNmXOlgn1Mr8upYwIsD9WYNRxIU7UM');
  // Конец
  
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
    } 
  }
}

function showMessage(boolean) {
  const Message = document.querySelector('.message');
  Message.innerHTML = 'Number of words and cards must be between 10 and 50.';
  if (boolean) Message.innerHTML = 'Settings saved!';
  Message.classList.add('showMessage');
  setTimeout(() => { Message.classList.remove('showMessage') }, 3000);
}

// Эту функцию нужно запустить сразу после регистрации пользователя. 
// Передать Вике для добавления.
/*
function setBasicSettings() {
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  const data = {
    "wordsPerDay": 20,
    "optional": {
      "cardsPerDay": 20,
      "showTranslation": true,
      "showTextMeaning": true,
      "showTextExample": true,
      "showAnswerButton": true,
      "showDeleteButton": true,
      "showDifficultWordsButton": true,
      "showWordsStatusButtons": true
    }
  }
    
  fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/settings`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
}
*/