import addRow from './vocabulary/tableContent';

// TODO: удалить перед пулреквестом
// функция для тестов
function setLocalStorage() {
  localStorage.setItem('email', 'team17@mail.ru');
  localStorage.setItem('password', 'RsSchool2020!');
  localStorage.setItem('userId', '5eefa4639896e10017eea40c');
  localStorage.setItem('token',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWZhNDYzOTg5NmUxMDAxN2VlYTQwYyIsImlhdCI6MTU5Mzk2OTc2NiwiZXhwIjoxNTkzOTg0MTY2fQ.MTNvTizPx6UwbzpDmCbiFEOmdEM_D4MdvxsVU1Nluxo');
}
// setLocalStorage();


// TODO: не забыть потом поменять на sessionStorage
// возможно вначале стоит проверить данные на существование, а потом отдовать 
// на случай если кто-то будет баловаться и вручную удалит данные из консоли
function getEmail() {
  return localStorage.getItem('email');
}
function getUserId() {
  return localStorage.getItem('userId');
}
function getToken() {
  return localStorage.getItem('token');
}


// TODO: изменить консольлог на ретурн
// добавляет слово пользователю. возвращает слово если добавилось успешно и текст ошибки, если неуспешно
// можно не проверять слово. т.к. если слово уже существует, то будет соответсвующая ошибка
async function addWord(wordId, difficulty) {
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${getUserId()}/words/${wordId}`;
  const now = new Date();
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
      Accept: 'application/json',
      'Content-Type': 'applications/json',
    },
    body: {
      'difficulty': `${(difficulty ? difficulty : -3)}`,
      'optional': {
        'time': now.getTime()
      }
    }
  });
  const data = (await res.ok ? await res.json() : `${res.status}: ${await res.text()}`);
  console.log(data);
}


async function getWordData(id, difficulty, time) {
  const url = `https://afternoon-falls-25894.herokuapp.com/words/${id}`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
      Accept: 'application/json',
      'Content-Type': 'applications/json',
    },
  });
  let data = await res.json();
  data.difficulty = difficulty;
  data.time = time;
  addRow(data);
}

// TODO: изменить консольлог на ретурн
// выдает список (массив объектов) всех слов пользователя
async function getWords() {
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${getUserId()}/words/`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
      Accept: 'application/json',
      'Content-Type': 'applications/json',
    },
  });
  const data = await res.json();
  data.forEach(e => getWordData(e.wordId, e.difficulty, e.optional.time));
}


// TODO: изменить консольлог на ретурн
// проверка слова на его нахождение в базе
// возвращает слово если есть, и текст с ошибкой если нет
async function checkWord(wordId) {
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${getUserId()}/words/${wordId}`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
      Accept: 'application/json',
      'Content-Type': 'applications/json',
    },
  });
  const data = (await res.ok ? await res.json() : `${res.status}: ${await res.text()}`);
  console.log(data);
}


// TODO: изменить консольлог на ретурн
// изменяет слово. возвращает измененное слово, иначе возвращает ошибку
async function updateWord(wordId, difficulty) {
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${getUserId()}/words/${wordId}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${getToken()}`,
      Accept: 'application/json',
      'Content-Type': 'applications/json',
    },
    body: {
      'difficulty': `${difficulty}`,
      'optional': {}
    }
  });
  const data = (await res.ok ? await res.json() : `${res.status}: ${await res.text()}`);
  console.log(data);
}


// возвращает сложность (int)
async function checkDifficulty(wordId) {
  const data = await checkWord(wordId);
  return data.difficulty;
}


// изменяет сложность слова на "-1", что дизменяет его категорию на  "удаленные"
function delet(wordId) {
  updateWord(wordId, -1);
}


// изменяет сложность слова на "2", что изменяет его категорию на "к изучению"
function restore(wordId) {
  updateWord(wordId, 2);
}


// изменяет сложность слова на "3"
function upDifficulty(wordId) {
  updateWord(wordId, 3);
}


// уменьшает сложность слова на "1", если его текущая сложность > 0
async function downDifficulty(wordId) {
  const currDiffuculty = await checkDifficulty(wordId);
  const difficulty = (currDiffuculty > 0 ? currDiffuculty - 1 : currDiffuculty);
  updateWord(wordId, difficulty);
}

export { setLocalStorage, getWords, downDifficulty, upDifficulty, restore, delet, updateWord, addWord, checkWord, getWordData };