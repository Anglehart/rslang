function addMultiColorResult() {
  const inputContainer = document.querySelector('.card_word-hidden');
  inputContainer.style.position = 'relative';

  const multiColorResultWrapper = document.createElement('div');
  multiColorResultWrapper.classList.add('multi-color');

  inputContainer.append(multiColorResultWrapper);
}

export default addMultiColorResult;
