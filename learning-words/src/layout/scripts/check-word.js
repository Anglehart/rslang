function checkInput(word) {
  const multiColorResultWrapper = document.querySelector('.multi-color');
  const input = document.querySelector('.card_phrase > b > input');

  input.onchange = function () {
    multiColorResultWrapper.textContent = '';
    if (word === input.value) {
      console.log(true);
    } else {
      console.log(false);
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
    console.log(input.value);
    input.value = '';
  };
}

export default checkInput;
