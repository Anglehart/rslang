class StorageService {
  setLevel(levelId) {
    localStorage.setItem('level', levelId);
  }

  getLevel() {
    return localStorage.getItem('level');
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
