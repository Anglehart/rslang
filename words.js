

function setLocalStorage() {
  localStorage.setItem('email', 'team17@mail.ru');
  localStorage.setItem('password', 'RsSchool2020!');
  localStorage.setItem('userId', '5eefa4639896e10017eea40c');
  localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWZhNDYzOTg5NmUxMDAxN2VlYTQwYyIsImlhdCI6MTU5MzcxNDI5MywiZXhwIjoxNTkzNzI4NjkzfQ.ZAd9yGal3i9wAJkxa0os-8X0h0A0QFIi2QuFw6Jfo6U');
}
setLocalStorage();

function getEmail() {
  const email = localStorage.getItem('email');
  return email;
}
function getUserId() {
  const userId = localStorage.getItem('userId');
  return userId;
}
function getToken() {
  const token = localStorage.getItem('token');
  return token;
}

async function addWord(wordId) {
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${getUserId()}/words/${wordId}`;
  fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
      Accept: 'application/json',
      'Content-Type': 'applications/json',
    },
  }).then((data) => {
    console.log(data);
  })

}


async function getWords() {
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${getUserId()}/words/`
  fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
      Accept: 'application/json',
      'Content-Type': 'applications/json',
    },
  }).then((data) => {
    console.log(data);
  })
  // return
}


// проверка слова на его нахождение в базе
async function checkWord(wordId) {
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${getUserId()}/words/${wordId}`
  fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
      Accept: 'application/json',
      'Content-Type': 'applications/json',
    },
  }).then((data) => {
    console.log(data);
  })
  // return boolean
}

addWord('5e9f5ee35eb9e72bc21af4a1');
getWords();

function checkDifficulty(wordId) {
  // проверка сложности слова

  // retrun int
}


function delet(wordId) {
  // задаем слову difficult: -1 

  // return "Done!"
}

function restore(wordId) {
  // задаем слову difficult: 2(?)

  // return "Done!"
}

function upDifficulty(wordId) {
  // изменяем текущий 'difficult' на '3'

  // return "Done!"
}

function downDifficulty(wordId) {
  // отнимаетм от текущего значения 'difficult'  1
  // если 0, то оставляем 0

  // return "Done!"
}