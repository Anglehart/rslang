/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function speech1(data, item, imageUrl, mini, syllable) {
  if (data.wordTranslate === item.textContent) {
    changeImage(imageUrl);
    document.querySelector(`#${syllable}`).insertAdjacentHTML('afterBegin', '<img class = "correct" alt="correct" src ="img/correct.png"></img>');
    document.querySelector('#words').style.pointerEvents = 'none';
    document.querySelector('.photo').style.display = 'block';
    document.querySelector('.obj').style.display = 'block';
    document.querySelector('.sound').style.display = 'none';
    document.querySelector('.dontKnow').classList.add('hide');
    document.querySelector('.next').classList.remove('hide');
    document.querySelector('.little-sound').innerHTML = '<img class = "little" alt="little" src ="img/sound.png"></img>';
    document.querySelector('.word').innerHTML = `<p>${data.word}</p>`;
    const contin1 = document.querySelector('.next');
    contin1.onclick = function nextclick() {
      score();
      contin();
    };
    if (sessionStorage.truefalse !== '1') {
      arrTrue.push(mini);
      if (localStorage.getItem('userId') !== null) {
      stats.correct(data._id);}
      sessionStorage.truefalse = 0;
    } else {
      arrFalse.push(mini);
      if (localStorage.getItem('userId') !== null) {
      stats.wrong(data._id);}
      sessionStorage.truefalse = 0;
    }
  } else if (data.wordTranslate !== item.textContent) {
    sessionStorage.truefalse = 1;
    document.querySelector(`#${syllable}`).style.textDecoration = 'line-through';
    document.querySelector(`#${syllable}`).style.pointerEvents = 'none';
  }
}
