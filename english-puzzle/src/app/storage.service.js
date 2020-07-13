class StorageService {
  setLevel(levelId) {
    localStorage.setItem('level', levelId);
  }

  getLevel() {
    return localStorage.getItem('level');
  }

  setPage(pageId) {
    localStorage.setItem('page', pageId);
  }

  getPage() {
    return localStorage.getItem('page');
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setSound(onOff) {
    localStorage.setItem('sound', onOff);
  }

  getSound() {
    return localStorage.getItem('sound');
  }

  gameStartStop() {
    if (this.gameStatus() === 'false') {
      localStorage.setItem('gameStatus', true);
    } else {
      localStorage.setItem('gameStatus', false);
    }
  }

  gameStop() {
    localStorage.setItem('gameStatus', false);
  }

  gameStatus() {
    return localStorage.getItem('gameStatus');
  }
}

const storageService = new StorageService();
export default storageService;
