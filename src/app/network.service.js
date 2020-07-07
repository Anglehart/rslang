//import storageService from './storage.service';

class NetworkService {
  async getDataForRound(round) {
    let group = 0;
    if (round < 4) {
      group = 0;
    } else if (round >= 4 && round < 7) {
      group = 1;
    } else if (round >= 7 && round < 10) {
      group = 2;
    } else if (round == 10 || round == 11) {
      group = 3;
    } else if (round === 12 || round === 13) {
      group = 4;
    } else if (round === 14 || round === 15) {
      group = 5;
    }
    const wordArray = await this.getWords(group);
    const finalArr = await this.wordsAPI(wordArray);
    return finalArr;
  }

  async wordsAPI(array) {
    const definition = array[0].word;
    return fetch(`https://wordsapiv1.p.rapidapi.com/words/${definition}/definitions`, {
    	'method': 'GET',
    	'headers': {
    		'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    		'x-rapidapi-key': 'a2e3a10c09msh3a5cbdc010f793fp1b3879jsnaf4c8929aac8'
    	}
    })
    .then((response) => response.json())
    .then(response => {
    	array.push(response.definitions[0].definition);
      return array;
    })
    .catch(err => {
    	console.log(err);
    });
  }

  async getWords(group) {
    const page = this.randomInteger(0, 29);
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`;
    return fetch(url)
    .then((response) => {
      if (response.ok) return response;
    })
    .then((response) => response.json())
    .then((data) => {
      let array = [];
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
  }

  randomInteger(min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
}

const networkService = new NetworkService();
export default networkService;
