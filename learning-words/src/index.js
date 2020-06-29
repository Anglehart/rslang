
// let token;
// let userId;


// const createUser = async (user) => {
//   const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/users/5eefa4639896e10017eea40c', {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   });
//   const content = await rawResponse.json();

//   console.log(content);
// };

// createUser({ email: 'team17@mail.ru', password: 'RsSchool2020!' });

// const updateStats = async (stats) => {
//   // const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com//users/${userId}/settings`, {
//   const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/users/5eefa4639896e10017eea40c/statistics', {
//     method: 'PUT',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWZhNDYzOTg5NmUxMDAxN2VlYTQwYyIsImlhdCI6MTU5Mjg0MjA3NywiZXhwIjoxNTkyODU2NDc3fQ.2E9iVX-64pS-AK7XzM2li53S8PXrgITd9XPyXwE1y5M',
//     },
//     body: JSON.stringify(stats),
//   });
//   const content = await rawResponse.json();

//   console.log(content);
// };

// updateStats({
//   optional: {
//     test2: 2,
//     test3: 3,
//   },
// });

/*
const getStats = async (stats) => {
  // const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com//users/${userId}/settings`, {
  const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/users/5eefa4639896e10017eea40c/statistics', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWZhNDYzOTg5NmUxMDAxN2VlYTQwYyIsImlhdCI6MTU5Mjg0MjA3NywiZXhwIjoxNTkyODU2NDc3fQ.2E9iVX-64pS-AK7XzM2li53S8PXrgITd9XPyXwE1y5M',
    },
    body: JSON.stringify(stats),
  });
  const content = await rawResponse.json();

  console.log(content);
};

getStats();
*/

// const loginUser = async (user) => {
//   const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/signin', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   });
//   const content = await rawResponse.json();

//   token = content.token;
//   userId = content.userId;
//   console.log(content, token, userId);
// };

// loginUser({ email: 'team17@mail.ru', password: 'RsSchool2020!' });


/*
const getWordsCount = async (words) => {
  const rawResponse = await fetch('https://afternoon-falls-25894.herokuapp.com/words/count', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(words),
  });
  const content = await rawResponse.json();

  // token = content.token;
  console.log(content);
};

getWordsCount();
*/

/*
settings
{
  "wordsPerDay": number, // количество новых слов
  "optional": {
    "cardsPerDay": number, // количество карточек со словами на день
    "showTranslation": boolean, // перевод слова
    "showTextMeaning": boolean, // предложение с объяснением значения слова
    "showTextExample": boolean, // предложение с примером использования изучаемого слова
    "showAnswerButton": boolean, // наличие конопки "Показать ответ"
    "showDeleteButton": boolean, // наличие конопки "Удалить"
    "showDifficultWordsButton": boolean, // наличие конопки "Сложные"
    "showWordsStatusButtons": boolean, // наличие конопок "Снова", "Трудно", "Хорошо", "Легко"
    // Автоматическое воспроизведение звука можно отключать и включать на странице приложения
  }
}

Statistic
{
  "learnedWords": 0,
  "optional": {
    "lastLearnedWord": { // последнее выученное слово
      "group": number,
      "page": number,
    },
    "miniGames": { // статистика мини игр
      "speakIt": {
        "try1": {
          "date" : "date",
          "result": "result",
        }
        ...
      }
      "puzzle": {
        "try1": {
          "date" : "date",
          "result": "result",
        }
        ...
      }
      ...
    }
  }
}
*/
// ------------------------

// let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWZhNDYzOTg5NmUxMDAxN2VlYTQwYyIsImlhdCI6MTU5Mjg0MjA3NywiZXhwIjoxNTkyODU2NDc3fQ.2E9iVX-64pS-AK7XzM2li53S8PXrgITd9XPyXwE1y5M';
// let userId;

function addImg(wordInfo) {
  const imageWrapper = document.querySelector('.card_img');
  const img = document.createElement('img');
  img.src = `https://raw.githubusercontent.com/svirskia/rslang-data/master/${wordInfo.image}`;

  imageWrapper.append(img);
}

function addTextExampleInCard(wordInfo) {
  const cardPhrase = document.querySelector('.card_phrase');
  cardPhrase.innerHTML = wordInfo.textExample;
}

function addTextExampleTranslateInCard(wordInfo) {
  const cardTranslate = document.querySelector('.card_phrase-translate');
  cardTranslate.textContent = wordInfo.textExampleTranslate;
}

function addWordMeaningInCard(wordInfo) {
  const cardMeaning = document.querySelector('.card_meaning');
  cardMeaning.innerHTML = wordInfo.textMeaning;
}

function addWordMeaningTranslateInCard(wordInfo) {
  const cardMeaningTranslate = document.querySelector('.card_meaning-translate');
  cardMeaningTranslate.textContent = wordInfo.textMeaningTranslate;
}

function addWordTranslateInCard(wordInfo) {
  const wordTranslate = document.querySelector('.card_word-translate');
  wordTranslate.textContent = wordInfo.wordTranslate;
}

function addWordTranscriptionInCard(wordInfo) {
  const wordTranscription = document.querySelector('.card_word-transcription');
  wordTranscription.textContent = wordInfo.transcription;
}


function addInputInTextExample(length) {
  const cardPhrase = document.querySelector('.card_phrase b');

  cardPhrase.textContent = '';

  const input = document.createElement('input');
  input.style.width = `${length / 2 + 0.5}rem`;
  input.style.fontSize = '1em';
  cardPhrase.append(input);

  // const input = document.createElement('div');
  // input.setAttribute('contenteditable', true);
  // cardPhrase.append(input);
}

function addInputInWordMeaning() {
  const cardMeaning = document.querySelector('.card_meaning i');
  cardMeaning.textContent = '';
  // console.log(cardMeaning);

  const input = document.createElement('input');
  cardMeaning.append(input);
}

const getWords = async (words) => {
  const randomGroup = Math.floor(Math.random() * 6);
  const randomPage = Math.floor(Math.random() * 30);
  const randomWord = Math.floor(Math.random() * 20);

  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${randomPage}&group=${randomGroup}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(words),
  });
  const content = await rawResponse.json();

  // token = content.token;

  console.log(content[randomWord]);

  const word = content[randomWord].textExample.split('<b>')[1].split('</b>')[0];
  const wordLength = word.length;
  console.log(word, wordLength);

  addImg(content[randomWord]);

  addTextExampleInCard(content[randomWord]);
  addInputInTextExample(wordLength);

  addTextExampleTranslateInCard(content[randomWord]);

  addWordMeaningInCard(content[randomWord]);
  addInputInWordMeaning();

  addWordMeaningTranslateInCard(content[randomWord]);

  addWordTranslateInCard(content[randomWord]);

  addWordTranscriptionInCard(content[randomWord]);
};

getWords();
