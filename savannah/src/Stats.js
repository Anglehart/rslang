class Stats {
  getUserId() {
    return localStorage.getItem('userId');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  async addWord(wordId, difficulty) {
    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words/${wordId}`;
    const now = new Date();
    const body = {
      difficulty: `${difficulty}`,
      optional: {
        firstTime: now.getTime(),
        lastTime: now.getTime(),
      },
    };
    await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }

  async checkWord(wordId) {
    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words/${wordId}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await (res.ok ? res.json() : false);
    return data;
  }

  async checkDifficulty(wordId) {
    const data = await this.checkWord(wordId);
    return data.difficulty;
  }

  async checkFirstTime(wordId) {
    const data = await this.checkWord(wordId);
    if (!data.optional.firstTime) {
      data.optional.firstTime = new Date();
    }
    return data.optional.firstTime;
  }

  async updateWord(wordId, difficulty) {
    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words/${wordId}`;
    const now = new Date();
    const firstTime = await this.checkFirstTime(wordId);
    const body = {
      difficulty: `${difficulty}`,
      optional: {
        firstTime: `${firstTime}`,
        lastTime: `${now}`,
      },
    };
    await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }

  async getStats() {
    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/statistics`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await (res.ok ? res.json() : false);
    return data;
  }

  async updateStats(gameName, gameResult) {
    const body = await this.getStats();
    body.optional[`${gameName}All`] += 1;
    if (gameResult) {
      body.optional[`${gameName}Win`] += 1;
    } else {
      body.optional[`${gameName}Lose`] += 1;
    }
    delete body.id;
    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/statistics`;
    await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }

  // изменяет сложность слова на "3"
  async wrong(wordId) {
    if (await this.checkWord(wordId)) {
      this.updateWord(wordId, 3);
    } else {
      this.addWord(wordId, 3);
    }
  }

  // уменьшает сложность слова на "1", если его текущая сложность > 0
  async correct(wordId) {
    if (await this.checkWord(wordId) !== false) {
      const currDiffuculty = await this.checkDifficulty(wordId);
      const difficulty = (currDiffuculty > 0 ? currDiffuculty - 1 : currDiffuculty);
      this.updateWord(wordId, difficulty);
    } else {
      this.addWord(wordId, 0);
    }
    console.log(wordId);
  }
}

const stats = new Stats();

export default stats;