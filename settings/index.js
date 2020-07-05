window.onload = function() {
  // Временное внесение авторищационных данных
  localStorage.setItem('userId', '5eefa4639896e10017eea40c');
  localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWZhNDYzOTg5NmUxMDAxN2VlYTQwYyIsImlhdCI6MTU5MzkzNTc0OCwiZXhwIjoxNTkzOTUwMTQ4fQ.8kZmR_7pppLklYNmXOlgn1Mr8upYwIsD9WYNRxIU7UM');
  // Конец
  
  loadSettings();
  document.querySelector('.save-btn').addEventListener('click', () => {
    setSettings();
  })
}

function saveSettings() {
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
  document.querySelector('.wordsPerDay').innerHTML = data.wordsPerDay;
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