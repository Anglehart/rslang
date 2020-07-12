import GameCard from './GameCard.js';

/* eslint no-new: "off" */
function createGamesStatistics(stats) {
  new GameCard(
    document.body, 'Millionaire',
    stats.millionaireAll, stats.millionaireWin,
    stats.millionaireLose, stats.millionaireLast,
  );
  new GameCard(
    document.body, 'Audition',
    stats.audioAll, stats.audioWin,
    stats.audioLose, stats.audioLast,
  );
  new GameCard(
    document.body, 'English-puzzle',
    stats.puzzleAll, stats.puzzleWin,
    stats.puzzleLose, stats.puzzleLast,
  );
  new GameCard(
    document.body, 'Savannah',
    stats.savannaAll, stats.savannaWin,
    stats.savannaLose, stats.savannaLast,
  );
  new GameCard(
    document.body, 'Speakit',
    stats.speakitAll, stats.speakitWin,
    stats.speakitLose, stats.speakitLast,
  );
}

function getUserWord(user) {
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${user.userId}/words`;
  return fetch(url, {
    method: 'GET',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${user.token}`,
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
    title: {
      text: 'History',
    },
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

function getUseraggregatedWords(data) {
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${data.userId}/aggregatedWords?wordsPerPage=20&onlyUserWords=true&filter={"userWord.difficulty":"0"}`;
  return fetch(url, {
    method: 'GET',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${data.token}`,
      Accept: 'application/json',
      filter: {
        $or: [
          { 'userWord.difficulty': 2 },
          { userWord: null },
        ],
      },
    },
  }).then((res) => res.json())
    .then((responsesData) => {
      console.log(responsesData);
      getPoints(responsesData);
      drawChart();
    });
}

function getGameStatistic(user) {
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${user.userId}/statistics`;
  return fetch(url, {
    method: 'GET',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${user.token}`,
      Accept: 'application/json',
    },
  }).then((res) => res.json())
    .then((data) => {
      console.log(data);
      createGamesStatistics(data.optional);
    });
}

function loginUser(user) {
  const url = 'https://afternoon-falls-25894.herokuapp.com/signin';
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((res) => res.json())
    .then((data) => {
      console.log(data);
      getUserWord(data);
      getUseraggregatedWords(data);
      getGameStatistic(data);
    });
}

window.addEventListener('load', () => {
  loginUser({ email: 'team17@mail.ru', password: 'RsSchool2020!' });
  // loginUser({emeail: localStorage.getItem('email'), password: localStorage.getItem('email')});
});
