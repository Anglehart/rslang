import GameCard from './GameCard.js';

/* eslint no-new: "off" */
const cards = document.getElementById('cards');

function createGamesStatistics(stats) {
  new GameCard(
    cards, 'Millionaire', '../../millionaire/src/app/assets/bg.jpg',
    '../../millionaire/dist/index.html',
    stats.millionaireAll, stats.millionaireWin,
    stats.millionaireLose, stats.millionaireLast,
  );
  new GameCard(
    cards, 'Audition', '../../Audition/img/b.jpg',
    '../../Audition/index.html',
    stats.audioAll, stats.audioWin,
    stats.audioLose, stats.audioLast,
  );
  new GameCard(
    cards, 'English-puzzle', '../../english-puzzle/src/app/assets/bg.jpg',
    '../../english-puzzle/dist/index.html',
    stats.puzzleAll, stats.puzzleWin,
    stats.puzzleLose, stats.puzzleLast,
  );
  new GameCard(
    cards, 'Savannah', '../../savannah/src/images/Jungle.jpg',
    '../../savannah/src/index.html',
    stats.savannaAll, stats.savannaWin,
    stats.savannaLose, stats.savannaLast,
  );
  new GameCard(
    cards, 'Speakit', '../../speakit/src/app/assets/bg.png',
    '../../speakit/dist/index.html',
    stats.speakitAll, stats.speakitWin,
    stats.speakitLose, stats.speakitLast,
  );
}

function getUserId() {
  return localStorage.getItem('userId');
}

function getToken() {
  return localStorage.getItem('token');
}

let userId;
let token;

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
  userId = getUserId();
  token = getToken();
  getUserWord();
  getUseraggregatedWords();
  getGameStatistic();
});
