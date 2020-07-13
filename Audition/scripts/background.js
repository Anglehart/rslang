/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function score() {
  const nums = Math.floor(100 / Number(localStorage.allCounter));
  if (typeof verification === 'undefined' || verification === 0) {
    sessionStorage.numeric = 100 - nums;
    verification = 1;
    document.querySelector('.acting').style.backgroundPositionY = `${sessionStorage.numeric}%`;
  } else if (verification === 1) {
    sessionStorage.numeric -= nums;
    document.querySelector('.acting').style.backgroundPositionY = `${sessionStorage.numeric}%`;
  }
}

function changeImage(imageUrl) {
  const image = new Image();
  image.src = imageUrl;
  image.onload = () => {
    document.querySelector('.photo').innerHTML = `<img class = "personPhoto" alt="pic" src ='${imageUrl}'></img>`;
  };
}
