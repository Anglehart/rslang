/* eslint-disable no-use-before-define */
import './layout/css/style.css';
import './layout/css/header-footer.css';
import './layout/css/progress.css';
import './layout/css/preloader.css';

import {
  addCardFields, addTextExampleTranslateInCard,
  addWordMeaningTranslateInCard, addWordTranslateInCard,
} from './layout/scripts/add-fields';
import { showFullTextExample, showFullTextMeaning } from './layout/scripts/show-full-text';
import {
  showDifficultyBtns, hideDifficultyBtns, showAnswerBtn, showDifficultWordBtn, showDeleteWordBtn,
} from './layout/scripts/show-btns';
import { clearCard, showCard } from './layout/scripts/clear-for-loading';

import setInputWidth from './layout/scripts/set-input-width';
import addMultiColorResult from './layout/scripts/multi-color-result';

import createWordsArrayForToday from './layout/scripts/create-words-array-for-today';

import getSettings from './layout/scripts/get-settings';

import createOrUpdateWord from './layout/scripts/create-or-update-word';

import progress from './layout/scripts/progress';

// eslint-disable-next-line import/no-cycle
import sayWord from './layout/scripts/say';

const userId = localStorage.getItem('userId');
const token = localStorage.getItem('token');

async function seeSettings() {
  const settings = await getSettings(userId, token);
  return settings;
}
const settings = seeSettings();

async function createArray() {
  const setSettings = await settings;
  const wordsArrayForToday = await createWordsArrayForToday(
    setSettings.wordsPerDay, setSettings.optional.cardsPerDay, token, userId,
  );
  console.log(wordsArrayForToday);
  const shufledWordsArrayForToday = wordsArrayForToday.sort((a, b) => (a.group > b.group ? 1 : -1));
  showCard();
  return shufledWordsArrayForToday;
}
const wordsArrayForToday = createArray();

async function startApp() {
  const arrayOfWords = await wordsArrayForToday;

  if (arrayOfWords.length === 0) {
    progress(token, userId);
  } else {
    const word = arrayOfWords[arrayOfWords.length - 1];
    console.log(arrayOfWords);
    app(word, arrayOfWords);
  }
}
clearCard();
startApp();

async function correctAnswer(wordInfo, arrayOfWords) {
  const setSettings = await settings;
  const isSoundOn = document.getElementById('sound').checked;
  const isTranslateOn = document.getElementById('translate').checked;
  const arr = arrayOfWords.slice(0, arrayOfWords.length - 1);

  if (setSettings.optional.showWordsStatusButtons && arr.length > 0) {
    if (isSoundOn) {
      sayWord(wordInfo, arr, userId, token, false);
    }

    showDifficultyBtns();
    const diff3btn = document.getElementById('difficulty_3_btn');
    diff3btn.onclick = () => {
      createOrUpdateWord(wordInfo.id, token, userId, '3');
      hideDifficultyBtns();
      app(arr[arr.length - 1], arr);
    };

    const diff2btn = document.getElementById('difficulty_2_btn');
    diff2btn.onclick = () => {
      createOrUpdateWord(wordInfo.id, token, userId, '2');
      hideDifficultyBtns();
      app(arr[arr.length - 1], arr);
    };

    const diff1btn = document.getElementById('difficulty_1_btn');
    diff1btn.onclick = () => {
      createOrUpdateWord(wordInfo.id, token, userId, '1');
      hideDifficultyBtns();
      app(arr[arr.length - 1], arr);
    };

    const diff0btn = document.getElementById('difficulty_0_btn');
    diff0btn.onclick = () => {
      createOrUpdateWord(wordInfo.id, token, userId, '0');
      hideDifficultyBtns();
      app(arr[arr.length - 1], arr);
    };
  } else if (isSoundOn) {
    createOrUpdateWord(wordInfo.id, token, userId);
    sayWord(wordInfo, arr, userId, token, true);
  } else if (arr.length > 0) {
    createOrUpdateWord(wordInfo.id, token, userId);
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
  const { word } = wordInfo;

  const multiColorResultWrapper = document.querySelector('.multi-color');
  const input = document.querySelector('.word-hidden_input');
  multiColorResultWrapper.textContent = '';

  if (word === input.value) { // GOOD ANSWER
    correctAnswer(wordInfo, arrayOfWords, token);
  } else { // BAD ANSWER
    createOrUpdateWord(wordInfo.id, token, userId, '3');

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
  if (arrayOfWords.length === 0) {
    startApp();
  } else {
    const cardMeaningTranslate = document.querySelector('.card_meaning-translate');
    const cardTranslate = document.querySelector('.card_phrase-translate');
    cardMeaningTranslate.textContent = '';
    cardTranslate.textContent = '';

    addCardFields(word, userId, token);
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
        correctAnswer(word, arrayOfWords, token);
      };
    }
    if (setSettings.optional.showDeleteButton) {
      showDeleteWordBtn();
      const deleteWordbtn = document.getElementById('delete_btn');
      deleteWordbtn.onclick = () => {
        createOrUpdateWord(word.id, token, userId, '-1');
        app(arrayOfWords[arrayOfWords.length - 2], arrayOfWords.slice(0, arrayOfWords.length - 1));
      };
    }
    if (setSettings.optional.showDifficultWordsButton) {
      showDifficultWordBtn();
      const difficultWordbtn = document.getElementById('difficult_btn');
      difficultWordbtn.onclick = () => {
        createOrUpdateWord(word.id, token, userId, '20');
        app(arrayOfWords[arrayOfWords.length - 2], arrayOfWords.slice(0, arrayOfWords.length - 1));
      };
    }
  }
  progress(token, userId);
}

export default app;
