/* eslint-disable no-use-before-define */
import './layout/css/style.css';
import './layout/css/progress.css';


import {
  addCardFields, addTextExampleTranslateInCard,
  addWordMeaningTranslateInCard, addWordTranslateInCard,
} from './layout/scripts/add-fields';
import { showFullTextExample, showFullTextMeaning } from './layout/scripts/show-full-text';
import {
  showDifficultyBtns, hideDifficultyBtns, showAnswerBtn, showDifficultWordBtn, showDeleteWordBtn,
} from './layout/scripts/show-btns';

import setInputWidth from './layout/scripts/set-input-width';
import addMultiColorResult from './layout/scripts/multi-color-result';

import createWordsArrayForToday from './layout/scripts/create-words-array-for-today';

import getSettings from './layout/scripts/get-settings';

import createOrUpdateWord from './layout/scripts/create-or-update-word';

import progress from './layout/scripts/progress';


// eslint-disable-next-line import/no-cycle
import sayWord from './layout/scripts/say';

import loginUser from './layout/scripts/login-test';
/*
const userId = localStorage.getItem('userId');
const token = localStorage.getItem('token');
*/
const userId = '5eefa4639896e10017eea40c';

async function getToken() {
  const token = await loginUser({ email: 'team17@mail.ru', password: 'RsSchool2020!' });
  return token.token;
}
const token = getToken();


async function seeSettings() {
  const myToken = await token;
  const settings = await getSettings(userId, myToken);
  return settings;
}
const settings = seeSettings();

async function createArray() {
  const myToken = await token;
  const setSettings = await settings;
  const wordsArrayForToday = await createWordsArrayForToday(
    setSettings.wordsPerDay, setSettings.optional.cardsPerDay, myToken, userId,
  );
  const shufledWordsArrayForToday = wordsArrayForToday.sort((a, b) => (a.group > b.group ? 1 : -1));
  return shufledWordsArrayForToday;
}
const wordsArrayForToday = createArray();

async function startApp() {
  const arrayOfWords = await wordsArrayForToday;
  const myToken = await token;

  if (arrayOfWords.length === 0) {
    progress(myToken, userId);
  } else {
    const word = arrayOfWords[arrayOfWords.length - 1];
    app(word, arrayOfWords);
  }
}
startApp();

async function correctAnswer(wordInfo, arrayOfWords, myToken) {
  const setSettings = await settings;
  const isSoundOn = document.getElementById('sound').checked;
  const isTranslateOn = document.getElementById('translate').checked;
  const arr = arrayOfWords.slice(0, arrayOfWords.length - 1);

  if (setSettings.optional.showWordsStatusButtons && arr.length > 0) {
    if (isSoundOn) {
      sayWord(wordInfo, arr, userId, myToken, false);
    }

    showDifficultyBtns();
    const diff3btn = document.getElementById('difficulty_3_btn');
    diff3btn.onclick = () => {
      createOrUpdateWord(wordInfo.id, myToken, userId, '3');
      hideDifficultyBtns();
      app(arr[arr.length - 1], arr);
    };

    const diff2btn = document.getElementById('difficulty_2_btn');
    diff2btn.onclick = () => {
      createOrUpdateWord(wordInfo.id, myToken, userId, '2');
      hideDifficultyBtns();
      app(arr[arr.length - 1], arr);
    };

    const diff1btn = document.getElementById('difficulty_1_btn');
    diff1btn.onclick = () => {
      createOrUpdateWord(wordInfo.id, myToken, userId, '1');
      hideDifficultyBtns();
      app(arr[arr.length - 1], arr);
    };

    const diff0btn = document.getElementById('difficulty_0_btn');
    diff0btn.onclick = () => {
      createOrUpdateWord(wordInfo.id, myToken, userId, '0');
      hideDifficultyBtns();
      app(arr[arr.length - 1], arr);
    };
  } else if (isSoundOn) {
    createOrUpdateWord(wordInfo.id, myToken, userId);
    sayWord(wordInfo, arr, userId, myToken, true);
  } else if (arr.length > 0) {
    createOrUpdateWord(wordInfo.id, myToken, userId);
    app(arr[arr.length - 1], arr);
  } else if (arr.length === 0) {
    startApp();
  }
  if (arr.length > 0) {
    if (setSettings.optional.showTextExample) { showFullTextExample(wordInfo); }
    if (setSettings.optional.showTextMeaning) { showFullTextMeaning(wordInfo); }

    if (isTranslateOn) {
      addWordTranslateInCard(wordInfo);
    }
    if (isTranslateOn && setSettings.optional.showTextExample) {
      addTextExampleTranslateInCard(wordInfo);
    }
    if (isTranslateOn && setSettings.optional.showTextMeaning) {
      addWordMeaningTranslateInCard(wordInfo);
    }
  }
}

async function checkInput(wordInfo, arrayOfWords) {
  const myToken = await token;

  const { word } = wordInfo;

  const multiColorResultWrapper = document.querySelector('.multi-color');
  const input = document.querySelector('.word-hidden_input');
  multiColorResultWrapper.textContent = '';

  if (word === input.value) { // GOOD ANSWER
    correctAnswer(wordInfo, arrayOfWords, myToken);
  } else { // BAD ANSWER
    createOrUpdateWord(wordInfo.id, myToken, userId, '3');

    for (let i = 0; i < input.value.length; i += 1) {
      const span = document.createElement('span');
      span.textContent = input.value[i];

      if (input.value[i] === word[i]) {
        span.style.color = 'green';
      } else {
        span.style.color = 'red';
      }
      multiColorResultWrapper.append(span);
    }
  }
  input.value = '';
}

async function app(word, arrayOfWords) {
  const myToken = await token;
  if (arrayOfWords.length === 0) {
    startApp();
  } else {
    const cardMeaningTranslate = document.querySelector('.card_meaning-translate');
    const cardTranslate = document.querySelector('.card_phrase-translate');
    cardMeaningTranslate.textContent = '';
    cardTranslate.textContent = '';

    addCardFields(word, userId, myToken);
    setInputWidth(word);
    addMultiColorResult();

    const input = document.querySelector('.word-hidden');


    input.onsubmit = (e) => {
      e.preventDefault();
      checkInput(word, arrayOfWords);
    };

    const colorWrapper = document.querySelector('.multi-color');
    colorWrapper.onclick = () => {
      colorWrapper.textContent = '';
      input.focus();
    };

    input.addEventListener('input', () => {
      colorWrapper.textContent = '';
      input.focus();
    });

    const setSettings = await settings;
    if (setSettings.optional.showAnswerButton) {
      showAnswerBtn();
      const answerBtn = document.getElementById('answer_btn');
      answerBtn.onclick = () => {
        correctAnswer(word, arrayOfWords, myToken);
      };
    }
    if (setSettings.optional.showDeleteButton) {
      showDeleteWordBtn();
      const deleteWordbtn = document.getElementById('delete_btn');
      deleteWordbtn.onclick = () => {
        createOrUpdateWord(word.id, myToken, userId, '-1');
        app(arrayOfWords[arrayOfWords.length - 2], arrayOfWords.slice(0, arrayOfWords.length - 1));
      };
    }
    if (setSettings.optional.showDifficultWordsButton) {
      showDifficultWordBtn();
      const difficultWordbtn = document.getElementById('difficult_btn');
      difficultWordbtn.onclick = () => {
        createOrUpdateWord(word.id, myToken, userId, '20');
        app(arrayOfWords[arrayOfWords.length - 2], arrayOfWords.slice(0, arrayOfWords.length - 1));
      };
    }
  }
  progress(myToken, userId);
}

const updateSettings = async ({
  userId, token, wordId, settings,
}) => {
  const myToken = await token;
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/settings`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${myToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(settings),
  });
  const updatedSets = await rawResponse.json();

  console.log(updatedSets, myToken);
  return updatedSets;
};

updateSettings({
  userId,
  token,
  settings: {
    wordsPerDay: 40,
    optional: {
      cardsPerDay: 40,
      showTranslation: true,
      showTextMeaning: true,
      showTextExample: true,
      showTranscription: true,
      showImage: true,
      showAnswerButton: true,
      showDeleteButton: true,
      showDifficultWordsButton: true,
      showWordsStatusButtons: true,
    },
  },
});

export default app;
