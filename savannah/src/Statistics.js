class Statistics {

  getUserId() {
    return localStorage.getItem('userId');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  addWord(wordId, difficulty) {
    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words/${wordId}`;
    const now = new Date();
    const body = {
      difficulty: `${difficulty}`,
      optional: {
        firstTime: now.getTime(),
        lastTime: now.getTime(),
      }
    }
    return fetch(url, {
      method: 'POST',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${this.getToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
      .then(() => {});
  }

  checkWord() {
    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words/${wordId}`;
    return fetch(url, {
      method: 'POST',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${this.getToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
      .then((data) => {
        
      })
    }
}