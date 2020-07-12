function showDifficultyBtns() {
  const btnsWrapper = document.querySelector('.difficulty_btns');

  const difficulty3btn = document.createElement('button');
  difficulty3btn.setAttribute('id', 'difficulty_3_btn');
  difficulty3btn.textContent = 'Again';

  const difficulty2btn = document.createElement('button');
  difficulty2btn.setAttribute('id', 'difficulty_2_btn');
  difficulty2btn.textContent = 'Hard';

  const difficulty1btn = document.createElement('button');
  difficulty1btn.setAttribute('id', 'difficulty_1_btn');
  difficulty1btn.textContent = 'Normal';

  const difficulty0btn = document.createElement('button');
  difficulty0btn.setAttribute('id', 'difficulty_0_btn');
  difficulty0btn.textContent = 'Easy';

  btnsWrapper.append(difficulty3btn, difficulty2btn, difficulty1btn, difficulty0btn);
  return btnsWrapper;
}

function hideDifficultyBtns() {
  const btnsWrapper = document.querySelector('.difficulty_btns');
  btnsWrapper.textContent = '';
}

function showAnswerBtn() {
  const showAnswerWrapper = document.querySelector('.answer_btn');
  showAnswerWrapper.textContent = '';

  const showAnswerbtn = document.createElement('button');
  showAnswerbtn.setAttribute('id', 'answer_btn');
  showAnswerbtn.textContent = 'Show Answer';
  showAnswerWrapper.append(showAnswerbtn);
}

function showDifficultWordBtn() {
  const showDifficultWordWrapper = document.querySelector('.difficult_btn');
  showDifficultWordWrapper.textContent = '';

  const showDifficultWordbtn = document.createElement('button');
  showDifficultWordbtn.setAttribute('id', 'difficult_btn');
  showDifficultWordbtn.textContent = 'Mark as "difficult"';
  showDifficultWordWrapper.append(showDifficultWordbtn);
}

function showDeleteWordBtn() {
  const showDeleteWordWrapper = document.querySelector('.delete_btn');
  showDeleteWordWrapper.textContent = '';

  const showDeletebtn = document.createElement('button');
  showDeletebtn.setAttribute('id', 'delete_btn');
  showDeletebtn.textContent = 'Delete';
  showDeleteWordWrapper.append(showDeletebtn);
}

export {
  showDifficultyBtns, hideDifficultyBtns, showAnswerBtn, showDifficultWordBtn, showDeleteWordBtn,
};
