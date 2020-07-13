// -----------------Click-------------

document.onclick = function change() {
  if (event.target.className !== 'p_menu' && event.target.className !== 'link' && event.target.className !== 'nav-toggle expanded' && event.target.className !== 'nav-toggle-bar') {
    document.querySelector('.nav-toggle').classList.remove('expanded');
    document.querySelector('#nav').classList.remove('expanded');
  }
};

(function menu() {
  const hamburger = {
    nav: document.querySelector('#nav'),
    navToggle: document.querySelector('.nav-toggle'),

    initialize() {
      this.navToggle.addEventListener('click',
        () => { this.toggle(); });
    },

    toggle() {
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    },
  };

  hamburger.initialize();
}());

// -----------------Delete-------------
function deleteInform() {
  document.getElementById('butExit').textContent = 'Вход';
  localStorage.removeItem('email');
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  document.getElementById('autorization').textContent = 'Вход';
  document.getElementById('but-autorization').classList.remove('button-input-autorization');
}

// -----------------login-------------
if (localStorage.getItem('userId') !== null) {
  document.getElementById('but-autorization').onclick = '';
  document.getElementById('autorization').textContent = localStorage.email;
  document.getElementById('but-autorization').classList.add('button-input-autorization');
  document.getElementById('butExit').textContent = 'Выход';
  document.getElementById('but-autorization').onclick = function remove() {
    deleteInform();
  };
}

function changePageSide() {
  if (localStorage.getItem('userId') === null) {
    document.location.href = '../../authorization/src/index.html';
  } else {
    deleteInform();
  }
}

// -----------------changePage-------------

function changePage(href) {
  if (localStorage.getItem('userId') === null) {
    document.location.href = '../../authorization/src/index.html';
  } else { document.location.href = href; }
}
