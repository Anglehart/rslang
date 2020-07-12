function showFullTextExample(wordInfo) {
  const example = document.querySelector('.card_phrase');
  example.innerHTML = wordInfo.textExample;
}

function showFullTextMeaning(wordInfo) {
  const meaning = document.querySelector('.card_meaning');
  meaning.innerHTML = wordInfo.textMeaning;
}

export { showFullTextExample, showFullTextMeaning };
