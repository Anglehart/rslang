import addMultiColorResult from './multi-color-result';
import getRandomWord from './get-random-word';
// import checkInput from './check-word';/

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
  input.style.width = `${length / 2 + 0.4}rem`;
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

async function addCardFields(word, wordLength) {
  // const randomWord = await getRandomWord();
  // const splittedWord = randomWord.textExample.split('<b>')[1].split('</b>')[0];
  // const splittedWordLength = splittedWord.length;

  addImg(word);

  addTextExampleInCard(word);
  addInputInTextExample(wordLength);

  addTextExampleTranslateInCard(word);

  addMultiColorResult();

  addWordMeaningInCard(word);
  addInputInWordMeaning();

  addWordMeaningTranslateInCard(word);

  addWordTranslateInCard(word);

  addWordTranscriptionInCard(word);
}

export default addCardFields;
