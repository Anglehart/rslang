function loginUser(user) {
  const url = 'https://afternoon-falls-25894.herokuapp.com/signin';
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((res) => {
   return res.json();
  })
    .then((data) => {
      console.log(data);
      getUserWord(data);
      getUseraggregatedWords(data);
    })
}
let user = document.getElementById('user');

document.addEventListener('click', () => {
  loginUser({ email: 'team17@mail.ru', password: 'RsSchool2020!' });
});

function getUserWord(data) {
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${data.userId}/words`;
  return fetch(url, {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${data.token}`,
      'Accept': 'application/json',
    }
  }).then((res) => {
   return res.json();
  })
    .then((data) => {
      console.log(data);
    })
}
let array = [];
function getUseraggregatedWords(data) {
  const url = `https://afternoon-falls-25894.herokuapp.com/users/${data.userId}/aggregatedWords?wordsPerPage=20&onlyUserWords=true&filter={"userWord.difficulty":"0"}`;
  return fetch(url, {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${data.token}`,
      'Accept': 'application/json',
    filter: {
      "$or": [
      {"userWord.difficulty": 2},
      {"userWord":null}
      ]
    }
    }
  }).then((res) => {
   return res.json();
  })
    .then((data) => {
      console.log(data);
      let words = data;
      words[0].paginatedResults.forEach((result) => {
        array.push(new Date(result.userWord.optional.lastTime));
        points.push({x:new Date(result.userWord.optional.lastTime), y:result.wordsPerExampleSentence});
      })
      points.sort((a, b) => {
        return a.x-b.x;
      });

      console.log(points);
      console.log(unique(array));
      drawChart();      
    })
}
function unique(arr) {
  let result = [];

  for (let element of arr) {
    if (!result.includes(element)) {
      result.push(element);
    }
  }
  return result;
}


let points = [];
let chart;
function drawChart() {

  chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title:{
      text: "Simple Line Chart"
    },
    axisX: {
      title: 'time',
      valueFormatString: 'DD MMM HH:mm'
    },
    axisY:{
      title: 'Percentage',
      suffix: '%',
      
    },
    data: [{      
      type: "spline",
      includeZero: false,
      xValueType: "dateTime",
		  yValueFormatString: "#,##0.##\"%\"",
      dataPoints: points
    }]
  });
  chart.render();
  }
