const createCanvasElements = async (
  {
    src,
    wordsList,
  }) => {
  if (!wordsList || !Array.isArray(wordsList) || !wordsList.length || !wordsList.every((el) => typeof el === 'string')) {
    throw new TypeError('"wordsList" argument must be an array containing strings. Example: ["string"]');
  }

  if (!src || typeof src !== 'string') {
    throw new TypeError('"src" argument must be a "string"');
  }

  return new Promise((resolve, reject) => {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    const resImg = new Image();
    resImg.crossOrigin = 'anonymous';
    resImg.src = src;
    resImg.onload = () => {
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      ctx.drawImage(resImg, 0, 0);
      const BOX_WIDTH = 1200;
      const BOX_HEIGHT = 600;
      let { width } = resImg;
      let { height } = resImg;
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
      const sourceUrl = canvas.toDataURL('image/png');
      document.querySelector('.canvas-helper').src = sourceUrl;

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = sourceUrl;

      img.onload = () => {
        const imgWidth = 1200;
        const imgHeight = 600;
        const groupsWords = wordsList.map((word) => word.split(' '));
        const groupsRow = 10;
        const puzzleWidth = 19;
        const rowHeight = 60;
        const result = [];

        groupsWords.forEach((wordsRow, i) => {
          const row = document.createElement('div');
          const wordCount = wordsRow.length;
          const lCounts = wordsRow.reduce((acc, val) => acc + val.replace(/<[^>]*>/g, '').length, 0);
          const itemHeight = Math.round(imgHeight / groupsRow);
          const rWidth = imgWidth - (50 * wordCount);
          let widthCount = 0;

          row.classList.add('group-words');
          row.classList.add(`row-${i + 1}`);
          const rndOrder = [];

          wordsRow.forEach((oneWord, j) => {
            const word = oneWord.replace(/<[^>]*>/g, '');
            const div = document.createElement('div');
            let oneWordWidth = Math.round((rWidth / lCounts) * oneWord.length) + puzzleWidth + 50;
            div.classList.add('div-item');
            div.classList.add(`div-row-${i + 1}`);
            div.classList.add(`div-item-${j + 1}`);
            div.id = `${i + 1}-${j + 1}`;
            if (j === wordCount - 1) oneWordWidth = imgWidth - widthCount;
            div.style.width = `${oneWordWidth}px`;
            div.style.height = `${itemHeight}px`;
            div.innerHTML = word;

            canvas = document.createElement('canvas');
            ctx = canvas.getContext('2d');
            canvas.width = oneWordWidth;
            canvas.height = rowHeight;
            ctx.drawImage(img,
              widthCount, i * rowHeight,
              oneWordWidth, rowHeight,
              0, 0,
              oneWordWidth, rowHeight);
            const backUrl = canvas.toDataURL('image/png');

            div.style.backgroundImage = `url(${backUrl})`;
            widthCount += (oneWordWidth - puzzleWidth);
            rndOrder.push(div);
          });

          shuffleArray(rndOrder).forEach((item) => {
            row.append(item);
          });
          result.push(row);
        });
        resolve(result);
      };

      img.onerror = (err) => {
        console.log(err);
        reject(err);
      };
    };
  });
};

export default createCanvasElements;
