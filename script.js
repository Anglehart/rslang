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

modalWindow.addEventListener('click',(event) => {
  if (event.target === togglerSignIn) {
    transformPassword(togglerSignIn,passwordSignIn);
  } else if (event.target === togglerSignUp) {
    transformPassword(togglerSignUp,passwordSignUp);
  } else if (event.target ===  tabSignIn) {
    emailSignIn.focus();
    formSignUp.reset();
  } else if (event.target ===  tabSignUp) {
    emailSignUp.focus();
    formSignIn.reset();
  } else if (event.target === buttonSignUp){
    event.preventDefault();
    createUser({ "email": `${emailSignUp.value}`, "password": `${passwordSignUp.value}` });
  } else if (event.target === buttonSignIn){
    event.preventDefault();
    loginUser({ "email": `${emailSignIn.value}`, "password": `${passwordSignIn.value}` })
  } 
});

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
let userInfo = {
  userId:'',
  token:'',
};

 

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
      // let info = localStorage.setItem(userInfo, 'userId'); 
      return userInfo = {
        userId: data.UserId,
        token: data.token
      };
      // let info = localStorage.setItem(userInfo.userId);
      // console.log(info);
    })
    .catch((error) => {
      console.log(error.message);
    });  
}
// function getUser(id) {
//   const url = `https://afternoon-falls-25894.herokuapp.com/users/${id}`;
//   return fetch(url)
// }
// window.addEventListener('load',() => {
//   getUser();
// })

