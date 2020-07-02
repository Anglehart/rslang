import storageService from './storage.service';
import paintings1 from './backgrounds/level1';
import paintings2 from './backgrounds/level2';
import paintings3 from './backgrounds/level3';
import paintings4 from './backgrounds/level4';
import paintings5 from './backgrounds/level5';
import paintings6 from './backgrounds/level6';

class NetworkService {

  async prepareData(){
    const words = await this.getWordsArray();
    const background = this.getBackgroundImage();
    return [words, background];
  }
  
  getWordsArray() {
    const currentLevel = storageService.getLevel();
    const currentPage = storageService.getPage();
    const url = `https://afternoon-falls-25894.herokuapp.com/words?page=${currentPage - 1}&group=${currentLevel - 1}`;
    
    return fetch(url)
    .then((response) => {
      if (response.ok) return response;
      return Promise.reject();
    })
    .then((response) => response.json())
    .then((data) => {
      const sortedArray = [];
      data.forEach((item) => {
        item.textExample = item.textExample.replace(/<b>/g, '').replace(/<\/b>/g, '').replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');
        if (item.textExample.split(' ').length <= 10) sortedArray.push(item);
      });
      return sortedArray;
    });
  }
  
  getBackgroundImage() {
    const temp = [paintings1, paintings2, paintings3, paintings4, paintings5, paintings6];
    const currentLevel = storageService.getLevel() - 1;
    const randImg = this.randomInteger(0, temp[currentLevel].length - 1);
    return temp[currentLevel][randImg];
  }
  
  randomInteger(min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  /*testMethod() {
    const userId = '5eefa4639896e10017eea40c';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWZhNDYzOTg5NmUxMDAxN2VlYTQwYyIsImlhdCI6MTU5MzUzNTYxNiwiZXhwIjoxNTkzNTUwMDE2fQ.7uitZQQxMdhcAPT3wZutmbzGSWO8D9Bzs2JEVFlipW8';//storageService.getToken();
    const rawResponse = fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/statistics`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    }) 
    .catch(() => {
      console.log('1');
    })    
      //console.log(content);

  }*/
}

const networkService = new NetworkService();
export default networkService;