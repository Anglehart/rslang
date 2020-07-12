/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function statistic() {
    if (localStorage.getItem('userId') !== null) {
  if (arrFalse.length === 0) {
     stats.updateStats('audio', true);
   } else {
     stats.updateStats('audio', false);
   }}
  document.querySelector('.b-popup').classList.remove('hide');
  const outArr = document.getElementById('consequence');
  let str1 = ' ';
  for (let i = 0; i < arrTrue.length; i += 1) {
    if (arrTrue[i] !== undefined) {
      str1
+= `<p class = "consequence"><img class = "consequence-sound" alt=${arrTrue[i][0]} src ="img/sound.png"></img><span class = "consequence-text">${arrTrue[i][1]} (${arrTrue[i][2]})</span><span class="round-green"></span></p>`;
    }
  }

  let str2 = ' ';
  for (let i = 0; i < arrFalse.length; i += 1) {
    if (arrFalse[i] !== undefined) {
      str2
+= `<p class = "consequence"><img class = "consequence-sound" alt=${arrFalse[i][0]} src ="img/sound.png"></img><span class = "consequence-text">${arrFalse[i][1]} (${arrFalse[i][2]})</span><span class="round-red"></span></p>`;
    }
  }

  outArr.innerHTML = `<p class = "consequence"><span class = "consequence-text green">Success: ${arrTrue.length}</span><span class = "consequence-text red">Error: ${arrFalse.length}</span></p>
     ${str2}
     ${str1}
        <div id = "knopki">
          <ul>
            <li><div class="btn-consequence" id="restart">Restart</div></li>
            <li><a class="btn-consequence" href = "https://rs-lang.netlify.app/#section3">Choose game</a></li>
          </ul>
        </div>`;

  const restart = document.querySelector('#restart');
  restart.addEventListener('click', () => {
    document.querySelector('.acting').style.display = 'none';
    document.querySelector('.wordСount').style.display = 'flex';
    document.querySelector('.b-popup').classList.add('hide');
    document.querySelector('.acting').style.backgroundPositionY = '100%';
    localStorage.currentCounter = 0;
    arrTrue = [];
    arrFalse = [];
  });

  document.querySelectorAll('.consequence-sound').forEach((item, i) => {
    item.addEventListener('click', () => {
      const alt = item.getAttribute('alt');
      renderSound(alt);
    });
  });
}
