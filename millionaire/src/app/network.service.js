class NetworkService {
  async getDataForRound(round) {
    let group = 0;
    if (round < 4) {
      group = 0;
    } else if (round >= 4 && round < 7) {
      group = 1;
    } else if (round >= 7 && round < 10) {
      group = 2;
    } else if (round === 10 || round === 11) {
      group = 3;
    } else if (round === 12 || round === 13) {
      group = 4;
    } else if (round === 14 || round === 15) {
      group = 5;
    }
    const wordArray = await this.getWords(group);
    const definition = await this.wordsAPI(wordArray[0]);
    return [wordArray, definition];
  }

  async wordsAPI(word) {
    return fetch(`https://wordsapiv1.p.rapidapi.com/words/${word.word}/definitions`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
        'x-rapidapi-key': 'a2e3a10c09msh3a5cbdc010f793fp1b3879jsnaf4c8929aac8',
      },
    })
      .then((response) => response.json())
      .then((response) => response.definitions[0].definition)
      .catch((err) => console.log(err));
  }

  async getWords(group) {
    const page = this.randomInteger(0, 29);
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const array = [];
        for (let i = 0; i < 4; i += 1) {
          const word = data[this.randomInteger(0, 19)];
          if (!array.includes(word)) {
            array.push(word);
          } else {
            i -= 1;
          }
        }
        return array;
      })
      .catch((err) => console.log(err));
  }

  randomInteger(min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
}

const networkService = new NetworkService();
export default networkService;
