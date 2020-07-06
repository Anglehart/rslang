/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
function getWords(arrTrue, arrFalse) {
  const page = this.randomInteger(0, 29);
  const halfOfArray = this.randomInteger(0, 19);
  const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${localStorage.level}`;
  fetch(url)
    .then((response) => {
      if (response.ok) return response;
      return Promise.reject();
    })
    .then((response) => response.json())
    .then((data) => {
      const trueCh = arrTrue.length;
      const falseCh = arrFalse.length;
      let mini = [];
      mini.push(data[halfOfArray].audio, data[halfOfArray].word, data[halfOfArray].wordTranslate);

      let array = [];
      array.push(data[halfOfArray].wordTranslate);
      const url1 = `https://rhymebrain.com/talk?function=getRhymes&maxResults=4&lang=ru&word=${data[halfOfArray].wordTranslate}`;
      fetch(url1)
        .then((response) => {
          if (response.ok) return response;
          return Promise.reject();
        })
        .then((response) => response.json())
        .then((data1) => {
          for (let q = 0; q < data1.length; q += 1) {
            array.push(data1[q].word);
          }
          shuffle(array);
          document.querySelectorAll('.cell').forEach((n, i) => n.textContent = array[i]);
          render(data[halfOfArray]);
        });
      const sound = document.querySelector('.sound');
      sound.onclick = function soundrend() {
        render(data[halfOfArray]);
      };

      const soundForSmall = document.querySelector('.little-sound');
      soundForSmall.onclick = function smallsoundrend() {
        renderForSmall(data[halfOfArray]);
      };

      const imageUrl = `${this.dataLink}${data[halfOfArray].image}`;
      sessionStorage.truefalse = 0;
      document.querySelectorAll('.cell').forEach((item, i) => {
        item.onclick = function slova() {
          const zzz = event.target.id;
          slova1(data[halfOfArray], item, imageUrl, mini, zzz);
        };
      });

      const next1 = document.querySelector('.dontKnow');
      next1.addEventListener('click', () => {
        if (trueCh === arrTrue.length && falseCh === arrFalse.length) {
          arrFalse.push(mini);
        }
      });

      document.onkeypress = function pressenter() {
        const obj1 = document.getElementById('igra');
        const display = window.getComputedStyle(obj1, null).getPropertyValue('display');
        if (display === 'flex') {
          if (event.keyCode === 13) {
            if (document.querySelector('.dontKnow').classList.contains('hide') === true) {
              schet();
              contin();
            } else if (trueCh === arrTrue.length && falseCh === arrFalse.length) {
              arrFalse.push(mini);
            }
          }

          const objz = document.getElementById('words');
          const pointEvent = window.getComputedStyle(objz, null).getPropertyValue('pointer-events');
          if (pointEvent !== 'none') {
            if (event.keyCode === 49) {
              const item = document.getElementById('c1');
              const zzz = 'c1';
              slova1(data[halfOfArray], item, imageUrl, mini, zzz);
            }
            if (event.keyCode === 50) {
              const item = document.getElementById('c2');
              const zzz = 'c2';
              slova1(data[halfOfArray], item, imageUrl, mini, zzz);
            }
            if (event.keyCode === 51) {
              const item = document.getElementById('c3');
              const zzz = 'c3';
              slova1(data[halfOfArray], item, imageUrl, mini, zzz);
            }
            if (event.keyCode === 52) {
              const item = document.getElementById('c4');
              const zzz = 'c4';
              slova1(data[halfOfArray], item, imageUrl, mini, zzz);
            }
            if (event.keyCode === 53) {
              const item = document.getElementById('c5');
              const zzz = 'c5';
              slova1(data[halfOfArray], item, imageUrl, mini, zzz);
            }
          }
        }
      };
    });
}
