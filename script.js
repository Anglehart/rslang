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
const safeUserInfo = document.getElementById('check');
const passwordConfirm= document.getElementById('password-confirm');
const hints = document.querySelectorAll('small');

const responsesSignUp = {
  422: 'incorrect e-mail or password',
  200: 'successful creation',
  417: 'current email is already used'
}

const responsesSignIn = {
  200: 'Successful operation',
  401: 'Access token is missing or invalid',
  404: 'User not found'
}
let checkmarkHtml = document.querySelectorAll('complete');
modalWindow.addEventListener('click', (event) => {
  if (event.target === togglerSignIn) {
      transformPassword(togglerSignIn,passwordSignIn);
  } else if (event.target === togglerSignUp) {
      transformPassword(togglerSignUp,passwordSignUp);
      transformPassword(togglerSignUp,passwordConfirm);
  } else if (event.target ===  tabSignIn) {
      emailSignIn.focus();
      formSignUp.reset();
      signInFormAnswer.innerText = '';
      checkmarkHtml.forEach((element) => {
        element.classList.remove('active');
      })
      hints.forEach((element) => {
        element.innerHTML = '';
      });
  } else if (event.target ===  tabSignUp) {
      emailSignUp.focus();
      formSignIn.reset();
      signUpFormAnswer.innerText = '';
      checkmarkHtml.forEach((element) => {
        element.classList.remove('active');
      })
      hints.forEach((element) => {
        element.innerHTML = '';
      });
  } else if (event.target === buttonSignUp){
      event.preventDefault();
      createUser({ "email": `${emailSignUp.value}`, "password": `${passwordSignUp.value}` });
  } else if (event.target === buttonSignIn){
      event.preventDefault();
      loginUser({ "email": `${emailSignIn.value}`, "password": `${passwordSignIn.value}` })
  }
});

function validateEmail(data) {
  let testData = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return testData.test(data);
}

function validatePassword(data) {
  const testData = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[+-_@$!%*?&#.,;:])[A-Za-z\d+-_@$!%*?&#.,;:]{8,}$/;
  return testData.test(data);
}

let checkmark = document.getElementsByClassName('complete');
emailSignIn.onblur = function() {
  if (!validateEmail(emailSignIn.value)) {
    document.getElementById('alert-email-sign-in').innerHTML = 'Invalid email address!';
    checkmark[0].classList.remove('active');
    buttonSignIn.disabled = true;
  } else {
    document.getElementById('alert-email-sign-in').innerHTML = '';
    checkmark[0].classList.add('active');
    buttonSignIn.disabled = false;
  }
}

passwordSignIn.onblur = function() {
  if (!validatePassword(passwordSignIn.value)) {
    document.getElementById('alert-password-sign-in').innerHTML = 'Invalid password';
    checkmark[1].classList.remove('active');
    buttonSignIn.disabled = true;
  } else {
    document.getElementById('alert-password-sign-in').innerHTML = '';
    checkmark[1].classList.add('active');
    buttonSignIn.disabled = false;
  }
}

emailSignUp.onblur = function() {
  let status = emailSignUp.value;
  if (!validateEmail(status)) {
    document.getElementById('alert-email-sign-up').innerHTML = 'Invalid email address!';
    checkmark[2].classList.remove('active');
    buttonSignUp.disabled = true;
  } else {
    document.getElementById('alert-email-sign-up').innerHTML = '';
    checkmark[2].classList.add('active');
    buttonSignUp.disabled = false;
    }
}

passwordSignUp.onblur = function() {
  if (!validatePassword(passwordSignUp.value)) {
    document.getElementById('alert-password-sign-up').innerHTML = 'Must contain minimum 8 characters, at least one number,one uppercase and lowercase letter and one special character';
    checkmark[3].classList.remove('active');
    buttonSignUp.disabled = true;
  } else {
    document.getElementById('alert-password-sign-up').innerHTML = '';
    checkmark[3].classList.add('active');
    buttonSignUp.disabled = false;
  }
}
passwordConfirm.onblur = function(event) {
  if(event.target === iconEye) {
    transformPassword(togglerSignUp, passwordSignUp);
    transformPassword(togglerSignUp, passwordConfirm);
  } else if (passwordSignUp.value != passwordConfirm.value) {
    document.getElementById('alert-confirm-password').innerHTML = "Passwords don't match";
      checkmark[4].classList.remove('active');
      buttonSignUp.disabled = true;
  } else {
    document.getElementById('alert-confirm-password').innerHTML = '';
    checkmark[4].classList.add('active');
  }
}

function answerSignUpForm(value) {
  signUpFormAnswer.innerText = value;
}

function answerSignInForm(value) {
  signInFormAnswer.innerText = value;
}

function transformPassword(toggler,password) {
  if (toggler.checked) {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
  iconEye.forEach((element) => {
    element.classList.toggle('fa-eye-slash');
  });
}

function createUser(user) {
  const url = 'https://afternoon-falls-25894.herokuapp.com/users';
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then((res) => {
    answerSignUpForm(responsesSignUp[res.status]);
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

function loginUser (user) {
  const url = 'https://afternoon-falls-25894.herokuapp.com/signin';
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then((res) => {
    answerSignInForm(responsesSignIn[res.status]);
    if (res.status === 200) {
      return res.json();
    }
    })
    .then((data) => {
      console.log(data);
      sessionStorage.setItem('email', user.email);
      sessionStorage.setItem('userId', data.userId);
      sessionStorage.setItem('token', data.token);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

console.log(sessionStorage.getItem('email'));
console.log(sessionStorage.getItem('userId'));
console.log(sessionStorage.getItem('token'));

