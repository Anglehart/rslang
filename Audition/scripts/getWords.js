/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
function getWords(arrTrue, arrFalse) {
    if (localStorage.getItem('userId') !== null) {
  const userId = localStorage.getItem('userId')
  const token = localStorage.getItem('token');
  // const filter = '{"$or":[{"userWord.difficulty":"0"},{"userWord.difficulty":"2"},{"userWord.difficulty":"3"}]}';
  // const url = `https://afternoon-falls-25894.herokuapp.com/users/${userId}/aggregatedWords?wordsPerPage=100&onlyUserWords=true&filter=${filter}`;
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${userId}/aggregatedWords?wordsPerPage=100&onlyUserWords=true&group=${localStorage.levelForAudition}`;
  return fetch(url, {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    },
  }).then((res) => res.json())
    .then((data) => {
  const halfOfArray = this.randomInteger(0, data[0].paginatedResults.length);
      request(data[0].paginatedResults[halfOfArray],arrTrue, arrFalse);});}
  //     Array.prototype.push.apply(this.wordsToLearn, data[0].paginatedResults);
  //     console.log(this.wordsToLearn.length);
  //   });
else{
  const page = this.randomInteger(0, 29);
  const halfOfArray = this.randomInteger(0, 19);
  const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${localStorage.levelForAudition}`;
  fetch(url)
    .then((response) => {
      if (response.ok) return response;
      return Promise.reject();
    })
    .then((response) => response.json())
    .then((data) => {request(data[halfOfArray],arrTrue, arrFalse);});}}

    function request(data,arrTrue, arrFalse) {
      console.log(data);
      const trueCh = arrTrue.length;
      const falseCh = arrFalse.length;
      let mini = [];
      mini.push(data.audio, data.word, data.wordTranslate);
      let array = [];
      array.push(data.wordTranslate);
      const url1 = `https://rhymebrain.com/talk?function=getRhymes&maxResults=4&lang=ru&word=${data.wordTranslate}`;
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
          render(data);
        });
      const sound = document.querySelector('.sound');
      sound.onclick = function soundrend() {
        render(data);
      };

      const soundForSmall = document.querySelector('.little-sound');
      soundForSmall.onclick = function smallsoundrend() {
        renderForSmall(data);
      };

      const imageUrl = `${this.dataLink}${data.image}`;
      sessionStorage.truefalse = 0;
      document.querySelectorAll('.cell').forEach((item, i) => {
        item.onclick = function speech() {
          const syllable = event.target.id;
          speech1(data, item, imageUrl, mini, syllable);
        };
      });

      const next1 = document.querySelector('.dontKnow');
      next1.addEventListener('click', () => {
        if (trueCh === arrTrue.length && falseCh === arrFalse.length) {
          arrFalse.push(mini);
            if (localStorage.getItem('userId') !== null) {
              stats.wrong(data._id);}
        }
      });

      document.onkeypress = function pressenter() {
        const obj1 = document.getElementById('acting');
        const display = window.getComputedStyle(obj1, null).getPropertyValue('display');
        if (display === 'flex') {
          if (event.keyCode === 13) {
            if (document.querySelector('.dontKnow').classList.contains('hide') === true) {
              score();
              contin();
            } else if (trueCh === arrTrue.length && falseCh === arrFalse.length) {
              arrFalse.push(mini);
                if (localStorage.getItem('userId') !== null) {
                  stats.wrong(data._id);}
            }
          }

          const objz = document.getElementById('words');
          const pointEvent = window.getComputedStyle(objz, null).getPropertyValue('pointer-events');
          if (pointEvent !== 'none') {
            if (event.keyCode === 49) {
              const item = document.getElementById('c1');
              const syllable = 'c1';
              speech1(data, item, imageUrl, mini, syllable);
            }
            if (event.keyCode === 50) {
              const item = document.getElementById('c2');
              const syllable = 'c2';
              speech1(data, item, imageUrl, mini, syllable);
            }
            if (event.keyCode === 51) {
              const item = document.getElementById('c3');
              const syllable = 'c3';
              speech1(data, item, imageUrl, mini, syllable);
            }
            if (event.keyCode === 52) {
              const item = document.getElementById('c4');
              const syllable = 'c4';
              speech1(data, item, imageUrl, mini, syllable);
            }
            if (event.keyCode === 53) {
              const item = document.getElementById('c5');
              const syllable = 'c5';
              speech1(data, item, imageUrl, mini, syllable);
            }
          }
        }
      };
    };
