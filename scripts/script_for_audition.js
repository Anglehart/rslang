/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
this.dataLink = 'https://raw.githubusercontent.com/Anglehart/rslang-data/master/';
let cot;
let arrTrue = [];
let arrFalse = [];
if (localStorage.allCounter === undefined || localStorage.allCounter === null) {
  localStorage.allCounter = 5;
}
if (localStorage.level === undefined || localStorage.level === null) { localStorage.level = 0; }

function repeat() {
  const num = Number(localStorage.allCounter);
  let num1 = Number(localStorage.currentCounter);

  if (num1 < num) {
    getWords(arrTrue, arrFalse);
    num1 += 1;
    localStorage.currentCounter = num1;
  } else {
    cot = 0;
    setTimeout(statistic, 1000);
  }
}

function contin() {
  document.querySelector('.photo').style.display = 'none';
  document.querySelector('.sound').style.display = 'block';
  document.querySelector('.dontKnow').classList.remove('hide');
  document.querySelector('.next').classList.add('hide');
  document.querySelector('.obj').style.display = 'none';
  document.querySelector('#words').style.pointerEvents = '';
  document.querySelectorAll('.cell').forEach((el) => el.style.textDecoration = 'none');
  document.querySelectorAll('.cell').forEach((el) => el.style.pointerEvents = '');
  repeat();
}
