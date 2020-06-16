const togglerSignIn = document.getElementById('toggler-sign-in');
const togglerSignUp = document.getElementById('toggler-sign-up');
const iconEye = document.querySelectorAll('.form-icon');
const passwordSignIn = document.getElementById('sign-in-password');
const passwordSignUp = document.getElementById('sign-up-password');
const modalWindow = document.getElementById('modal_window');
const emailSignUp = document.getElementById('email-sign-up');
const emailSignIn = document.getElementById('email-sign-in');
const buttonSignUp = document.getElementById('sign-up');
const buttonSignIn = document.getElementById('sign-in');

modalWindow.addEventListener('click',(event) => {
  if (event.target === togglerSignIn) {
    transformPassword(togglerSignIn,passwordSignIn);
  } else if (event.target === togglerSignUp) {
    transformPassword(togglerSignUp,passwordSignUp);
  } else if (event.target === buttonSignUp){
    event.preventDefault();
    createUser({ "email": `${emailSignUp.value}`, "password": `${passwordSignUp.value}` });
  } else if (event.target === buttonSignIn){
    event.preventDefault();
    loginUser({ "email": `${emailSignIn.value}`, "password": `${passwordSignIn.value}` })
  } 
});
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
  }).then((res) => res.json())
    .then((data) => {
      console.log(data);
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
  }).then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
