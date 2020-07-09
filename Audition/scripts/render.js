/* eslint-disable no-unused-vars */
function render(data) {
  const audioUrl = `${this.dataLink}${data.audio}`;
  const aud = new Audio(`${audioUrl}`);
  document.querySelector('.poster').style.opacity = '1';
  document.querySelector('.poster').style.boxShadow = '0 0 30px rgba(0,0,0,0.6)';
  aud.play();
  aud.onended = function ending() {
    document.querySelector('.poster').style.opacity = '.6';
    document.querySelector('.poster').style.boxShadow = 'none';
  };
}

function renderForSmall(data) {
  const audioUrl = `${this.dataLink}${data.audio}`;
  const aud = new Audio(`${audioUrl}`);
  document.querySelector('.little').style.opacity = '1';
  document.querySelector('.little').style.boxShadow = '0 0 30px rgba(0,0,0,0.6)';
  aud.play();
  aud.onended = function littleEnding() {
    document.querySelector('.little').style.opacity = '.6';
    document.querySelector('.little').style.boxShadow = 'none';
  };
}

function renderSound(data) {
  const audioUrl = `${this.dataLink}${data}`;
  const aud = new Audio(`${audioUrl}`);
  aud.play();
}
