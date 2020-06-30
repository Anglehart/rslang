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

const responsesSignUp = {
  422: 'incorrect e-mail or password',
  200: 'successful creation',
  417: 'current email is already used',
};

const responsesSignIn = {
  200: 'Successful operation',
  401: 'Access token is missing or invalid',
  404: 'User not found',
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

emailSignIn.onblur = function () {
  if (!validateEmail(emailSignIn.value)) {
    document.getElementById('alert-email-sign-in').innerHTML = 'Invalid email address!';
    if (checkmarkIcon) {
      checkmarkIcon.remove();
    }
    buttonSignIn.disabled = false;
  } else {
    document.getElementById('alert-email-sign-in').innerHTML = '';
    createCheckmarkIcon(emailSignIn);
    buttonSignIn.disabled = true;
  }
};

passwordSignIn.onblur = function () {
  if (!validatePassword(passwordSignIn.value)) {
    document.getElementById('alert-password-sign-in').innerHTML = 'Invalid password';
    if (checkmarkIcon) {
      checkmarkIcon.remove();
    }
    buttonSignIn.disabled = true;
  } else {
    document.getElementById('alert-password-sign-in').innerHTML = '';
    createCheckmarkIcon(passwordSignIn);
    buttonSignIn.disabled = false;
  }
};

emailSignUp.onblur = function () {
  const status = emailSignUp.value;
  if (!validateEmail(status)) {
    document.getElementById('alert-email-sign-up').innerHTML = 'Invalid email address!';
    if (checkmarkIcon) {
      checkmarkIcon.remove();
    }
    buttonSignUp.disabled = true;
  } else {
    document.getElementById('alert-email-sign-up').innerHTML = '';
    createCheckmarkIcon(emailSignUp);
    buttonSignUp.disabled = false;
  }
};

passwordSignUp.onblur = function () {
  if (!validatePassword(passwordSignUp.value)) {
    document.getElementById('alert-password-sign-up').innerHTML = 'Invalid password';
    if (checkmarkIcon) {
      checkmarkIcon.remove();
    }
    buttonSignUp.disabled = true;
  } else {
    document.getElementById('alert-password-sign-up').innerHTML = '';
    createCheckmarkIcon(passwordSignUp);
    buttonSignUp.disabled = false;
  }
};

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

passwordConfirm.onblur = function (event) {
  if (event.target === iconEye) {
    transformPassword(togglerSignUp, passwordSignUp);
    transformPassword(togglerSignUp, passwordConfirm);
  } else if (passwordSignUp.value !== passwordConfirm.value) {
    document.getElementById('alert-confirm-password').innerHTML = "Passwords don't match";
    if (checkmarkIcon) {
      checkmarkIcon.remove();
    }
    buttonSignUp.disabled = true;
  } else {
    document.getElementById('alert-confirm-password').innerHTML = '';
    createCheckmarkIcon(passwordConfirm);
  }
};

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
    .then((data) => {
      console.log(data);
    })
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
    createUser({ email: `${emailSignUp.value}`, password: `${passwordSignUp.value}` });
  } else if (event.target === buttonSignIn) {
    event.preventDefault();
    loginUser({ email: `${emailSignIn.value}`, password: `${passwordSignIn.value}` });
  }
});
console.log(localStorage.getItem('email'));
console.log(localStorage.getItem('userId'));
console.log(localStorage.getItem('token'));
