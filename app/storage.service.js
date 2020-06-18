class StorageService {
  setLevel(levelId){
    localStorage.setItem('level', levelId);
  }

  getLevel(){
    return localStorage.getItem('level');
  }
}

const storageService = new StorageService();
export default storageService;
