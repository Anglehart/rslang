import GameCard from './GameCard.js';

/* eslint no-new: "off" */
const chart = document.getElementById('chartContainer');
const cards = document.getElementById('cards');
const container = document.getElementById('container');

function createGamesStatistics(stats) {
  new GameCard(
    cards, 'Millionaire', '../millionaire/src/app/assets/bg.jpg',
    '../millionaire/dist/index.html',
    stats.millionaireAll, stats.millionaireWin,
    stats.millionaireLose, stats.millionaireLast,
  );
  new GameCard(
    cards, 'Audition', '../Audition/img/b.jpg',
    '../Audition/index.html',
    stats.audioAll, stats.audioWin,
    stats.audioLose, stats.audioLast,
  );
  new GameCard(
    cards, 'English-puzzle', '../english-puzzle/src/app/assets/bg.jpg',
    '../english-puzzle/dist/index.html',
    stats.puzzleAll, stats.puzzleWin,
    stats.puzzleLose, stats.puzzleLast,
  );
  new GameCard(
    cards, 'Savannah', '../savannah/src/images/Jungle.jpg',
    '../savannah/src/index.html',
    stats.savannaAll, stats.savannaWin,
    stats.savannaLose, stats.savannaLast,
  );
  new GameCard(
    cards, 'Speakit', '../speakit/src/app/assets/bg.jpg',
    '../speakit/dist/index.html',
    stats.speakitAll, stats.speakitWin,
    stats.speakitLose, stats.speakitLast,
  );
}
const userId = '5eefa4639896e10017eea40c';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWZhNDYzOTg5NmUxMDAxN2VlYTQwYyIsImlhdCI6MTU5NDYzMzYzMSwiZXhwIjoxNTk0NjQ4MDMxfQ.R8xH4rPd8RH02ZkEz5US2YfHPxB3Ydv2AWF-gczuS_Q';
function getUserId() {
  return localStorage.getItem('userId');
}

function getToken() {
  return localStorage.getItem('token');
}

// const userId = getUserId();
// const token = getToken();

function getUserWord() {
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${userId}/words`;
  return fetch(url, {
    method: 'GET',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  }).then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

const points = [];
function getPoints(data) {
  const words = data;
  points.splice(0, points.length);
  words[0].paginatedResults.forEach((result) => {
    points.push({ x: new Date(result.userWord.optional.lastTime), y: 1 });
  });
  points.sort((a, b) => a.x - b.x);
  points.forEach((point) => {
    point.x = point.x.toDateString();
  });
  for (let i = 0; i < points.length; i += 1) {
    for (let j = i + 1; j < points.length;) {
      if (points[i].x !== points[j].x) {
        break;
      }
      points[i].y += points[j].y;
      points.splice(j, 1);
    }
  }
  points.forEach((point) => {
    point.x = new Date(point.x);
  });
  console.log(points);
}

function drawChart() {
  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    theme: 'light2',
    axisX: {
      valueFormatString: 'DD MMM',
    },
    axisY: {
      title: 'Words',

    },
    data: [{
      type: 'spline',
      includeZero: false,
      xValueType: 'dateTime',
      dataPoints: points,
    }],
  });
  chart.render();
}

function getUseraggregatedWords() {
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${userId}/aggregatedWords?wordsPerPage=100&onlyUserWords=true&filter={"userWord.difficulty":"0"}`;
  return fetch(url, {
    method: 'GET',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json())
    .then((responsesData) => {
      console.log(responsesData);
      getPoints(responsesData);
      drawChart();
    });
}

function getGameStatistic() {
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${userId}/statistics`;
  return fetch(url, {
    method: 'GET',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  }).then((res) => res.json())
    .then((data) => {
      console.log(data);
      createGamesStatistics(data.optional);
    });
}

window.addEventListener('load', () => {
  getUserWord();
  getUseraggregatedWords();
  getGameStatistic();
});

// -----------------Click-------------

document.onclick = function change() {
  if (event.target.className !== 'p_menu' && event.target.className !== 'link' && event.target.className !== 'nav-toggle expanded' && event.target.className !== 'nav-toggle-bar') {
    document.querySelector('.nav-toggle').classList.remove('expanded');
    document.querySelector('#nav').classList.remove('expanded');
  }
};

(function menu() {
  const hamburger = {
    nav: document.querySelector('#nav'),
    navToggle: document.querySelector('.nav-toggle'),

    initialize() {
      this.navToggle.addEventListener('click',
        () => { this.toggle(); });
    },

    toggle() {
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    },
  };

  hamburger.initialize();
}());

// -----------------Delete-------------
function deleteInform() {
  document.getElementById('butExit').textContent = 'Вход';
  localStorage.removeItem('email');
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  document.getElementById('autorization').textContent = 'Вход';
  document.getElementById('but-autorization').classList.remove('button-input-autorization');
}

// -----------------login-------------
if (localStorage.getItem('userId') !== null) {
  document.getElementById('but-autorization').onclick = '';
  document.getElementById('autorization').textContent = localStorage.email;
  document.getElementById('but-autorization').classList.add('button-input-autorization');
  document.getElementById('butExit').textContent = 'Выход';
  document.getElementById('but-autorization').onclick = function remove() {
    deleteInform();
  };
}

function changePageSide() {
  if (localStorage.getItem('userId') === null) {
    document.location.href = '../authorization/src/index.html';
  } else {
    deleteInform();
  }
}

// -----------------changePage-------------

function changePage(href) {
  if (localStorage.getItem('userId') === null) {
    document.location.href = '../authorization/src/index.html';
  } else { document.location.href = href; }
}
