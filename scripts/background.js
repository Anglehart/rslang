/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function schet() {
  const nums = Math.floor(100 / Number(localStorage.allCounter));
  if (typeof cot === 'undefined' || cot === 0) {
    sessionStorage.chis = 100 - nums;
    cot = 1;
    document.querySelector('.igra').style.backgroundPositionY = `${sessionStorage.chis}%`;
  } else if (cot === 1) {
    sessionStorage.chis -= nums;
    document.querySelector('.igra').style.backgroundPositionY = `${sessionStorage.chis}%`;
  }
}

function changeImage(imageUrl) {
  const image = new Image();
  image.src = imageUrl;
  image.onload = () => {
    document.querySelector('.photo').innerHTML = `<img class = "personPhoto" alt="pic" src ='${imageUrl}'></img>`;
  };
}
