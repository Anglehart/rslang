function addMultiColorResult() {
  const inputContainer = document.querySelector('.card_phrase > b');
  inputContainer.style.position = 'relative';

  const multiColorResultWrapper = document.createElement('div');
  multiColorResultWrapper.classList.add('multi-color');

  multiColorResultWrapper.style.position = 'absolute'; // TODO: add to CSS
  multiColorResultWrapper.style.top = '0';
  multiColorResultWrapper.style.left = '3px';
  multiColorResultWrapper.style.fontSize = '1.1em';
  multiColorResultWrapper.style.fontWeight = 'normal';

  inputContainer.append(multiColorResultWrapper);
}

export default addMultiColorResult;
