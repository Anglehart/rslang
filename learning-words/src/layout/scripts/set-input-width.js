function setInputWidth(word) {
  const input = document.querySelector('.word-hidden_input');
  input.style.width = `${word.word.length / 1.5}em`;
}

export default setInputWidth;
