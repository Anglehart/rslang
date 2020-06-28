const createCanvasElements = async (
  {
    src,
    wordsList,
    extraWidthValue = 10,
    fontFamily = 'Open Sans',
    fontRatio = 1,
    fontType = 'bold',
    borderPuzzle = 1,
    shadowPuzzle = 2,
    borderText = 1,
    shadowText = 10,
    colorBorder = 'rgb(0,255,250)',
    colorShadowBorder = 'rgb(255,255,250)',
    colorText = 'magenta',
    colorShadowText = 'black',
    solidTextColor = 'white',
    fontStyle = 'fillText'
  }) => {

  if (!wordsList || !Array.isArray(wordsList) || !wordsList.length || !wordsList.every(el => typeof el === 'string')) {
    throw new TypeError('"wordsList" argument must be an array containing strings. Example: ["string"]');
  }

  if (!src || typeof src !== 'string') {
    throw new TypeError('"src" argument must be a "string"');
  }

  if (isNaN(parseInt(extraWidthValue))) {
    throw new TypeError('"extraWidthValue" argument must be a "number"');
  }

  return new Promise((resolve, reject) => {
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      const resImg = new Image();
      resImg.crossOrigin = 'anonymous';
      resImg.src = src;
      resImg.onload = () => {     
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        ctx.drawImage(resImg, 0, 0);
        var BOX_WIDTH = 1200;
        var BOX_HEIGHT = 600;
        var width = resImg.width;
        var height = resImg.height;
          if (width > BOX_WIDTH) {
              height *= BOX_WIDTH / width;
              width = BOX_WIDTH;
          } else { 
            width = BOX_WIDTH; 
            height *= BOX_HEIGHT / height;
          }
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(resImg, 0, 0, width, height);
        const sourceUrl = canvas.toDataURL("image/png");
        document.querySelector('.canvas-helper').src = sourceUrl;  

        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = sourceUrl; 
        
        img.onload = () => {
          
          const imgWidth = 1200;
          const imgHeight = 600;
          const groupsWords = wordsList.map(word => word.split(' '));
          const groupsRow = 10;
          const puzzleWidth = 19;
          const rowHeight = 60;
          const EXTRA_WIDTH_VALUE = parseInt(extraWidthValue);
          const result = [];
    
          groupsWords.forEach((wordsRow, i) => {
            const row = document.createElement('div');
            const wordCount = wordsRow.length;
            const letterCounts = wordsRow.reduce((acc, val) => acc + val.replace(/<[^>]*>/g, '').length, 0);
            const itemHeight = Math.round(imgHeight / groupsRow);
            const realWidth = imgWidth - ( 50 * wordCount );
            let widthCount = 0;

            row.classList.add(`group-words`);
            row.classList.add(`row-${i + 1}`);
            const rndOrder = [];
    
            wordsRow.forEach((oneWord, j) => {
              const word = oneWord.replace(/<[^>]*>/g, '');
              const div = document.createElement('div');
              let oneWordWidth = Math.round((realWidth / letterCounts) * oneWord.length) + puzzleWidth + 50;
              div.classList.add('div-item');
              div.classList.add(`div-row-${i + 1}`);
              div.classList.add(`div-item-${j + 1}`);
              div.id = `${i + 1}-${j + 1}`;
              if (j === wordCount - 1) oneWordWidth = imgWidth - widthCount;
              div.style.width = `${oneWordWidth}px`;
              div.style.height = `${itemHeight}px`;
              div.innerHTML = word;
              
              const canvas = document.createElement("canvas");
              const ctx = canvas.getContext("2d");
              canvas.width = oneWordWidth;
              canvas.height = rowHeight;
              ctx.drawImage(img,
                widthCount, i * rowHeight,   // Start at 10 pixels from the left and the top of the image (crop),
                oneWordWidth, rowHeight,   // "Get" a `80 * 30` (w * h) area from the source image (crop),
                0, 0,     // Place the result at 0, 0 in the canvas,
                oneWordWidth, rowHeight); // With as width / height: 160 * 60 (scale)
              var backUrl = canvas.toDataURL("image/png");
              
              div.style.backgroundImage = `url(${backUrl})`;
              widthCount += (oneWordWidth - puzzleWidth);
              rndOrder.push(div);
            })
            
            shuffleArray(rndOrder).forEach((item) => {
              row.append(item);
            });
            result.push(row);
          });
          resolve(result);
        };
    
        img.onerror = err => {
          console.log(err);
          reject(err);
        }
      }
  })
};

export default createCanvasElements;
