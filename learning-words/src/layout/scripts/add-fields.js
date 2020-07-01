
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

// function checkInput() {
//   const input = document.querySelector('.card_phrase b input');
//   // cardPhrase.innerHTML = wordInfo.textExample;
//   console.log(input);
//   console.log(input.value);

// }

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

export {
  addImg, addTextExampleInCard, addTextExampleTranslateInCard, addWordMeaningInCard, addWordMeaningTranslateInCard, addWordTranslateInCard, addWordTranscriptionInCard,
  addInputInTextExample, addInputInWordMeaning,
};
