/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
const togglerSignIn = document.getElementById('toggler-sign-in');
const togglerSignUp = document.getElementById('toggler-sign-up');
const tabSignIn = document.getElementById('tab-sign-in');
const tabSignUp = document.getElementById('tab-sign-up');
const formSignIn = document.getElementById('form-sign-in');
const formSignUp = document.getElementById('form-sign-up');
const iconEye = document.querySelectorAll('.form-icon');
const passwordSignIn = document.getElementById('sign-in-password');
const passwordSignUp = document.getElementById('sign-up-password');
const modalWindow = document.getElementById('modal_window');
const emailSignUp = document.getElementById('email-sign-up');
const emailSignIn = document.getElementById('email-sign-in');
const buttonSignUp = document.getElementById('sign-up');
const buttonSignIn = document.getElementById('sign-in');
const signInFormAnswer = document.getElementById('sign-in-answer');
const signUpFormAnswer = document.getElementById('sign-up-answer');
const passwordConfirm = document.getElementById('password-confirm');
const hints = document.querySelectorAll('small');
const alertEmailSignIn = document.getElementById('alert-email-sign-in');
const alertPasswordSignIn = document.getElementById('alert-password-sign-in');
const alertEmailSignUp = document.getElementById('alert-email-sign-up');
const alertPasswordSignUp = document.getElementById('alert-password-sign-up');

const responsesSignUp = {
  422: 'Неверный адрес электронной почты или пароль',
  200: 'Вы успешно зарегестрированы',
  417: 'Адрес электронной почты уже используется',
};

const responsesSignIn = {
  200: 'Вы успешно зашли в систему',
  401: 'Access token is missing or invalid',
  404: 'Пользователь не найден',
};

function resetForm(formAnswer, form) {
  document.querySelectorAll('.complete').forEach((element) => {
    element.remove();
  });
  hints.forEach((element) => {
    element.innerHTML = '';
  });
  formAnswer.innerText = '';
  form.reset();
}

function validateEmail(data) {
  const testData = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return testData.test(data);
}

function validatePassword(data) {
  const testData = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[+-_@$!%*?&#.,;:])[A-Za-z\d+-_@$!%*?&#.,;:]{8,}$/;
  return testData.test(data);
}

let checkmarkIcon;
function createCheckmarkIcon(parent) {
  checkmarkIcon = document.createElement('i');
  checkmarkIcon.className = 'fa fa-check complete';
  checkmarkIcon.setAttribute('aria-hidden', 'true');
  parent.after(checkmarkIcon);
}
const answerValidation = {
  empty: 'Введите адрес электронной почты',
  invalid: 'Неверный адрес электронной почты',
  valid: '',
};
function showInvalidData(inputAlert, submit, invalidText) {
  inputAlert.innerHTML = invalidText;
  if (checkmarkIcon) {
    checkmarkIcon.remove();
  }
  submit.disabled = true;
}

function showValidData(inputAlert, submit, validText) {
  inputAlert.innerHTML = validText;
  submit.disabled = false;
}

function showAlert(input, inputAlert, submit, validateFn) {
  if (input.value === '') {
    showInvalidData(inputAlert, submit, answerValidation.empty);
  } else if (!validateFn(input.value)) {
    showInvalidData(inputAlert, submit, answerValidation.invalid);
  } else {
    showValidData(inputAlert, submit, answerValidation.valid);
    createCheckmarkIcon(input);
  }
}

function checkMatch() {
  if (passwordSignUp.value !== passwordConfirm.value) {
    document.getElementById('alert-confirm-password').innerHTML = 'Пароли не совпадают';
    if (checkmarkIcon) {
      checkmarkIcon.remove();
    }
    buttonSignUp.disabled = true;
  } else {
    document.getElementById('alert-confirm-password').innerHTML = '';
    createCheckmarkIcon(passwordConfirm);
  }
}

emailSignIn.addEventListener('blur', () => showAlert(emailSignIn, alertEmailSignIn, buttonSignIn, validateEmail));
passwordSignIn.addEventListener('blur', () => showAlert(passwordSignIn, alertPasswordSignIn, buttonSignIn, validatePassword));
emailSignUp.addEventListener('blur', () => showAlert(emailSignUp, alertEmailSignUp, buttonSignUp, validateEmail));
passwordSignUp.addEventListener('blur', () => showAlert(passwordSignUp, alertPasswordSignUp, buttonSignUp, validatePassword));
passwordConfirm.addEventListener('blur', () => checkMatch());

function transformPassword(toggler, password) {
  if (toggler.checked) {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
  iconEye.forEach((element) => {
    element.classList.toggle('fa-eye-slash');
  });
}

function answerSignUpForm(value) {
  signUpFormAnswer.innerText = value;
}

function answerSignInForm(value) {
  signInFormAnswer.innerText = value;
}

function createUser(user) {
  const url = 'https://afternoon-falls-25894.herokuapp.com/users';
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((res) => {
    answerSignUpForm(responsesSignUp[res.status]);
    if (res.status === 200) {
      signUpFormAnswer.style.color = '#BEEE62';
      return res.json();
    }
  })
    .then(() => loginUser({ email: emailSignUp.value, password: passwordSignUp.value }))
    .catch((error) => {
      console.log(error.message);
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
  }).then((res) => {
    answerSignInForm(responsesSignIn[res.status]);
    if (res.status === 200) {
      signInFormAnswer.style.color = '#BEEE62';
      return res.json();
    }
  })
    .then((data) => {
      console.log(data);
      localStorage.setItem('email', user.email);
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('token', data.token);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
function setBasicSettings() {
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  const data = {
    wordsPerDay: 20,
    optional: {
      cardsPerDay: 20,
      showImage: true,
      showTranscription: true,
      showTranslation: true,
      showTextMeaning: true,
      showTextExample: true,
      showAnswerButton: true,
      showDeleteButton: true,
      showDifficultWordsButton: true,
      showWordsStatusButtons: true,
    },
  };

  fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/settings`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  console.log(data);
}

function transition() {
  if (localStorage.userId !== undefined || localStorage.userId !== null) {
    document.location.href = '../../main/index.html';
  }
}

modalWindow.addEventListener('click', (event) => {
  if (event.target === togglerSignIn) {
    transformPassword(togglerSignIn, passwordSignIn);
  } else if (event.target === togglerSignUp) {
    transformPassword(togglerSignUp, passwordSignUp);
    transformPassword(togglerSignUp, passwordConfirm);
  } else if (event.target === tabSignIn) {
    resetForm(signUpFormAnswer, formSignUp);
    emailSignIn.focus();
  } else if (event.target === tabSignUp) {
    resetForm(signInFormAnswer, formSignIn);
    emailSignUp.focus();
  } else if (event.target === buttonSignUp) {
    event.preventDefault();
    createUser({ email: emailSignUp.value, password: passwordSignUp.value });
    setBasicSettings();
    setTimeout(transition, 2000);
  } else if (event.target === buttonSignIn) {
    event.preventDefault();
    loginUser({ email: emailSignIn.value, password: passwordSignIn.value });
    setTimeout(transition, 2000);
  }
});
console.log(localStorage.getItem('email'));
console.log(localStorage.getItem('userId'));
console.log(localStorage.getItem('token'));
