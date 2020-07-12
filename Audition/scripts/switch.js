/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const but = document.querySelector('.intro-btn');
but.addEventListener('click', () => {
  document.querySelector('.intro').style.display = 'none';
  document.querySelector('.wordСount').style.display = 'flex';
});

document.querySelectorAll('.continue-btn').forEach((item, i) => {
  if (Number(localStorage.levelForAudition) === 0) { document.getElementById('level1').classList.add('active'); }
  if (Number(localStorage.levelForAudition) === 1) { document.getElementById('level2').classList.add('active'); }
  if (Number(localStorage.levelForAudition) === 2) { document.getElementById('level3').classList.add('active'); }
  if (Number(localStorage.levelForAudition) === 3) { document.getElementById('level4').classList.add('active'); }
  if (Number(localStorage.levelForAudition) === 4) { document.getElementById('level5').classList.add('active'); }
  if (Number(localStorage.levelForAudition) === 5) { document.getElementById('level6').classList.add('active'); }
  item.addEventListener('click', () => {
    document.querySelectorAll('.continue-btn').forEach((el) => el.classList.remove('active'));
    event.target.classList.add('active');
  });
});

document.querySelectorAll('.continue-btn2').forEach((item1, i1) => {
  if (Number(localStorage.allCounter) === 5) { document.getElementById('five').classList.add('active'); }
  if (Number(localStorage.allCounter) === 10) { document.getElementById('ten').classList.add('active'); }
  if (Number(localStorage.allCounter) === 15) { document.getElementById('fifteen').classList.add('active'); }
  if (Number(localStorage.allCounter) === 20) { document.getElementById('twenty').classList.add('active'); }
  if (Number(localStorage.allCounter) === 25) { document.getElementById('twentyfive').classList.add('active'); }
  if (Number(localStorage.allCounter) === 30) { document.getElementById('thirty').classList.add('active'); }
  item1.addEventListener('click', () => {
    document.querySelectorAll('.continue-btn2').forEach((el1) => el1.classList.remove('active'));
    event.target.classList.add('active');
  });
});

document.querySelector('.start').addEventListener('click', () => {
  document.querySelector('.wordСount').style.display = 'none';
  document.querySelector('.acting').style.display = 'flex';
  repeat();
  document.querySelector('.sound').innerHTML = '<img class = "poster" alt="sound" src ="img/sound.png"></img>';
});
