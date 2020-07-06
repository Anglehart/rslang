import addCardFields from './layout/scripts/add-fields';
import getRandomWord from './layout/scripts/get-random-word';

// import checkInput from './layout/scripts/check-word';
import getUserWords from './layout/scripts/get-user-words';
import getWordById from './layout/scripts/get-word-by-id';

import createUserWord from './layout/scripts/create-user-word';
import updateUserWord from './layout/scripts/update-user-word';

const userId = '5eefa4639896e10017eea40c';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWZhNDYzOTg5NmUxMDAxN2VlYTQwYyIsImlhdCI6MTU5NDAyNDg2MywiZXhwIjoxNTk0MDM5MjYzfQ.1pFogLqXLdx3Ca_jU0cfOhodyRL_0Fd-JFuoqfQz2XQ';

const newWordsPerDay = 10; // min words
const maxCardsPerDay = 20; // max words


// const showAnswerBtn = document.getElementById('show-answer');


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

//   const { token } = content;
//   const { userId } = content;
//   console.log(content, token, userId);
// };

// loginUser({ email: 'team17@mail.ru', password: 'RsSchool2020!' });


const now = new Date();

async function startApp() {
  const allUserWods = await getUserWords(token);
  const arrayOfWordsForToday = [];


  for (let i = 0; i < newWordsPerDay; i += 1) {
    const randomWord = await getRandomWord();
    arrayOfWordsForToday.push(randomWord);
  }

  const allUserWodsId = allUserWods.map((elem) => elem.wordId);
  console.log(allUserWodsId);
  for (let i = 0; i < arrayOfWordsForToday.length; i += 1) {
    if (allUserWodsId.includes(arrayOfWordsForToday[i].wordId)) {
      console.log('повторка');
    } else {
      console.log(allUserWodsId.includes(arrayOfWordsForToday[i].wordId), 'повторок нет');
    }
  }

  const difficultUserWords = allUserWods.filter((item) => +item.difficulty === 3);
  for (let i = 0; i < difficultUserWords.length; i += 1) {
    if (arrayOfWordsForToday.length <= maxCardsPerDay) {
      const difficultUserWord = await getWordById(difficultUserWords[i].wordId);
      arrayOfWordsForToday.push(difficultUserWord);
    }
  }

  const notEasyUserWords = allUserWods.filter((item) => +item.difficulty === 2);
  for (let i = 0; i < notEasyUserWords.length; i += 1) {
    if (arrayOfWordsForToday.length <= maxCardsPerDay
      && (now.getTime() - notEasyUserWords[i].optional.time) / 60000 / 60 > 22) { // если больше 22 часов не повторялось
      const notEasyUserWord = await getWordById(notEasyUserWords[i].wordId);
      arrayOfWordsForToday.push(notEasyUserWord);
    }
  }

  const easyUserWords = allUserWods.filter((item) => +item.difficulty === 1);
  for (let i = 0; i < easyUserWords.length; i += 1) {
    if (arrayOfWordsForToday.length <= maxCardsPerDay
      && (now.getTime() - easyUserWords[i].optional.time) / 60000 / 60 > 70) { // если больше 70 часов не повторялось
      const easyUserWord = await getWordById(easyUserWords[i].wordId);
      arrayOfWordsForToday.push(easyUserWord);
    }
  }

  console.log(difficultUserWords);
  console.log(notEasyUserWords);
  console.log(easyUserWords);
  console.log(arrayOfWordsForToday);
}

startApp();

async function changeInputValue() {
  // const word = await addCardFields();
  const randomWord = await getRandomWord();
  const allUserWods = await getUserWords(token);
  const sortedFromNewAllUserWods = allUserWods.sort((a, b) => (a.optional.time < b.optional.time ? 1 : -1));
  console.log(sortedFromNewAllUserWods);


  const allUserWodsId = allUserWods.map((elem) => elem.wordId);
  console.log(allUserWodsId.includes(randomWord.id));

  const differenseOfTimeInMinuts = (now.getTime() - sortedFromNewAllUserWods[0].optional.time) / 60000;
  console.log(differenseOfTimeInMinuts);

  const splittedWord = randomWord.textExample.split('<b>')[1].split('</b>')[0];
  const splittedWordLength = splittedWord.length;

  addCardFields(randomWord, splittedWordLength);

  const multiColorResultWrapper = document.querySelector('.multi-color');
  const input = document.querySelector('.card_phrase > b > input');
  console.log(input.value);
  input.onchange = function () {
    // input.oninput = function () {

    multiColorResultWrapper.textContent = '';
    if (splittedWord === input.value) {
      console.log(true, splittedWord);

      // createUserWord({
      //   userId,
      //   token,
      //   wordId: randomWord.id,
      //   word: { difficulty: '3', optional: { time: now.getTime() } },
      // });
    } else {
      console.log(false, splittedWord);

      for (let i = 0; i < input.value.length; i += 1) {
        const span = document.createElement('span');
        span.textContent = input.value[i];

        if (input.value[i] === splittedWord[i]) {
          span.style.color = 'green';
        } else {
          span.style.color = 'red';
        }
        multiColorResultWrapper.append(span);
      }
    }
    console.log(input.value);
    input.value = '';
  };
}

changeInputValue();

// updateUserWord({
//   userId,
//   token,
//   wordId: '5efe34e3635aec001764d725',
//   word: { difficulty: '-1', optional: { time: now.getTime() } },
// });
