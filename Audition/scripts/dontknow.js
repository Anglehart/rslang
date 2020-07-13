/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
const next = document.querySelector('.dontKnow');
next.addEventListener('click', () => {
  document.querySelectorAll('.cell').forEach((el) => el.style.textDecoration = 'none');
  document.querySelectorAll('.cell').forEach((el) => el.style.pointerEvents = '');
  score();
  repeat();
});

document.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    const obj1 = document.getElementById('acting');
    const display = window.getComputedStyle(obj1, null).getPropertyValue('display');
    if (display === 'flex') {
      if (document.querySelector('.dontKnow').classList.contains('hide') === false) {
        document.querySelectorAll('.cell').forEach((el) => el.style.textDecoration = 'none');
        document.querySelectorAll('.cell').forEach((el) => el.style.pointerEvents = '');
        score();
        repeat();
      }
    }
  }
});
