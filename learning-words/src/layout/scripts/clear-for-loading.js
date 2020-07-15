function clearCard() {
  const card = document.querySelector('.card');
  card.classList.add('card-hide');

  const bars = document.querySelector('.bars');
  bars.classList.add('bars-hide');
}

function showCard() {
  const card = document.querySelector('.card');
  card.classList.remove('card-hide');

  const bars = document.querySelector('.bars');
  bars.classList.remove('bars-hide');

  const preloader = document.querySelector('.preloader-container');
  preloader.classList.add('preloader-hide');
}

export { clearCard, showCard };
