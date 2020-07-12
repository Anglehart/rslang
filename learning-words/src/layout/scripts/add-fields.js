import getSettings from './get-settings';

function addImg(wordInfo) {
  const imageWrapper = document.querySelector('.card_img');
  imageWrapper.textContent = '';
  const img = document.createElement('img');
  if (wordInfo.image.length > 100) {
    img.src = `data:image/jpg;base64,${wordInfo.image}`;
  } else {
    img.src = `https://raw.githubusercontent.com/svirskia/rslang-data/master/${wordInfo.image}`;
  }
  imageWrapper.append(img);
}

function addTextExampleInCard(wordInfo) {
  const cardPhrase = document.querySelector('.card_phrase');
  cardPhrase.innerHTML = wordInfo.textExample;

  const cardPhraseB = document.querySelector('.card_phrase b');

  cardPhraseB.textContent = '';
  const span = document.createElement('span');
  span.textContent = '[ ? ]';
  cardPhraseB.append(span);
}

function addWordMeaningInCard(wordInfo) {
  const cardMeaning = document.querySelector('.card_meaning');
  cardMeaning.innerHTML = wordInfo.textMeaning;

  const cardMeaningI = document.querySelector('.card_meaning i');
  cardMeaningI.textContent = '';

  const span = document.createElement('span');
  span.textContent = '[ ? ]';
  span.style.fontStyle = 'normal';
  span.style.fontWeight = 'bold';
  cardMeaningI.append(span);
}

function addWordTranslateInCard(wordInfo) {
  const wordTranslate = document.querySelector('.card_word-translate');
  wordTranslate.textContent = wordInfo.wordTranslate;
}

function addWordTranscriptionInCard(wordInfo) {
  const wordTranscription = document.querySelector('.card_word-transcription');
  wordTranscription.textContent = wordInfo.transcription;
}

function addTextExampleTranslateInCard(wordInfo) {
  const cardTranslate = document.querySelector('.card_phrase-translate');
  cardTranslate.textContent = wordInfo.textExampleTranslate;
}

function addWordMeaningTranslateInCard(wordInfo) {
  const cardMeaningTranslate = document.querySelector('.card_meaning-translate');
  cardMeaningTranslate.textContent = wordInfo.textMeaningTranslate;
}

async function addCardFields(word, userId, token) {
  const settings = await getSettings(userId, token);

  if (settings.optional.showImage) {
    addImg(word);
  }

  if (settings.optional.showTextExample) {
    addTextExampleInCard(word);
  }

  if (settings.optional.showTextMeaning) {
    addWordMeaningInCard(word);
  }

  if (settings.optional.showTranslation) {
    addWordTranslateInCard(word);
  }

  if (settings.optional.showTranscription) {
    addWordTranscriptionInCard(word);
  }
}

export {
  addCardFields, addTextExampleTranslateInCard,
  addWordMeaningTranslateInCard, addWordTranslateInCard,
};
