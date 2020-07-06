/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function statistic() {
  document.querySelector('.b-popup').classList.remove('hide');
  const outArr = document.getElementById('vivod');
  let str1 = ' ';
  for (let i = 0; i < arrTrue.length; i += 1) {
    if (arrTrue[i] !== undefined) {
      str1
+= `<p class = "vivod"><img class = "vivod-zvuk" alt=${arrTrue[i][0]} src ="img/zvuk.png"></img><span class = "vivod-text">${arrTrue[i][1]} (${arrTrue[i][2]})</span><span class="round-green"></span></p>`;
    }
  }

  let str2 = ' ';
  for (let i = 0; i < arrFalse.length; i += 1) {
    if (arrFalse[i] !== undefined) {
      str2
+= `<p class = "vivod"><img class = "vivod-zvuk" alt=${arrFalse[i][0]} src ="img/zvuk.png"></img><span class = "vivod-text">${arrFalse[i][1]} (${arrFalse[i][2]})</span><span class="round-red"></span></p>`;
    }
  }

  outArr.innerHTML = `<p class = "vivod"><span class = "vivod-text green">Success: ${arrTrue.length}</span><span class = "vivod-text red">Error: ${arrFalse.length}</span></p>
     ${str2}
     ${str1}
        <div id = "knopki">
          <ul>
            <li><div class="btn-vivod" id="restart">Restart</div></li>
            <li><a class="btn-vivod" href = "https://rs-lang.netlify.app/#section3">Choose game</a></li>
          </ul>
        </div>`;

  const restart = document.querySelector('#restart');
  restart.addEventListener('click', () => {
    document.querySelector('.igra').style.display = 'none';
    document.querySelector('.kolvo-slov').style.display = 'flex';
    document.querySelector('.b-popup').classList.add('hide');
    document.querySelector('.igra').style.backgroundPositionY = '100%';
    localStorage.currentCounter = 0;
    arrTrue = [];
    arrFalse = [];
  });

  document.querySelectorAll('.vivod-zvuk').forEach((item, i) => {
    item.addEventListener('click', () => {
      const alt = item.getAttribute('alt');
      renderZvuk(alt);
    });
  });
}
