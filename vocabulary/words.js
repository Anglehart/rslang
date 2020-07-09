/* eslint-disable class-methods-use-this */

class WordLibrary {
  // TODO: удалить перед пулреквестом
  // для тестов
  setLocalStorage() {
    localStorage.setItem('email', 'team17@mail.ru');
    localStorage.setItem('password', 'RsSchool2020!');
    localStorage.setItem('userId', '5eefa4639896e10017eea40c');
    localStorage.setItem('token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWZhNDYzOTg5NmUxMDAxN2VlYTQwYyIsImlhdCI6MTU5NDMyMjczNiwiZXhwIjoxNTk0MzM3MTM2fQ.mQa12XO9IjneKi1JM4ZMlNplA1hJCLY3D91Dnc2aeFM');
  }
  showError(value){
    console.log(value);
  }
  // служебные методы
  getEmail() {
    return localStorage.getItem('email');
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  // TODO: не забыть потом поменять на sessionStorage
  // возможно вначале стоит проверить данные на существование, а потом отдавать
  // на случай если кто-то будет баловаться и вручную удалит данные из консоли
  async getWordData(word) {
    const url = `https://afternoon-falls-25894.herokuapp.com/words/${word.id}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .catch(err =>   // сделать модальное окно с выводом ошибок
        showError(`Ошибка запроса: ${err}`));
    const data = await res.json();
    return data;
  }

  // Удаляем слово из словая пользователя
  async deleteWordFromUser(id) {
    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words/${id}`;
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .catch(err =>   // сделать модальное окно с выводом ошибок
        showError(`Ошибка запроса: ${err}`));
    const data = await res.json();
    return data;
  }

  // TODO: изменить консольлог на ретурн
  // добавляет слово пользователю. возвращает слово если добавилось успешно или текст ошибки
  // можно не проверять слово. т.к. если слово уже существует, то будет соответсвующая ошибка
  async addWord(wordId, difficulty) {
    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words/${wordId}`;
    const now = new Date();
    const body = {
      difficulty: `${(difficulty || '2')}`,
      optional: {
        firstTime: now.getTime(),
        lastTime: now.getTime(),
      },
    };
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .catch(err =>   // сделать модальное окно с выводом ошибок
        showError(`Ошибка запроса: ${err}`));;
    const data = await res.json();
    return data;
  }

  // выдает список (массив объектов) всех слов пользователя
  async getWords() {
    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words/`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .catch(err =>   // сделать модальное окно с выводом ошибок
        showError(`Ошибка запроса: ${err}`));
    const data = await res.json();
    return data;
  }

  // TODO: изменить консольлог на ретурн
  // проверка слова на его нахождение в базе
  // возвращает слово если есть, и текст с ошибкой если нет
  async checkWord(wordId) {
    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words/${wordId}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .catch(err =>   // сделать модальное окно с выводом ошибок
        showError(`Ошибка запроса: ${err}`));
    const data = await res.json();
    return data;
  }

  // для тестового изменения даты слов
  async updateWordTest(wordId, difficulty, minus) {
    const url = `https://afternoon-falls-25894.herokuapp.com/users/${await this.getUserId()}/words/${wordId}`;
    const now = new Date();
    await now.setDate(now.getDate() - minus);
    const firstTime = now;
    const body = await {
      difficulty: `${difficulty}`,
      optional: {
        firstTime: `${await firstTime}`,
        lastTime: ` ${now}`,
      },
    };
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .catch(err =>   // сделать модальное окно с выводом ошибок
        showError(`Ошибка запроса: ${err}`));
    const data = await res.json();
    return data;
  }

  // TODO: изменить консольлог на ретурн
  // изменяет слово. возвращает измененное слово, иначе возвращает ошибку
  async updateWord(wordId, difficulty) {
    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/words/${wordId}`;
    const now = new Date();
    const firstTime = new Date();
    firstTime.setTime(await this.checkFirstTime(wordId));
    const body = {
      difficulty: `${difficulty}`,
      optional: {
        firstTime: `${firstTime}`,
        lastTime: `${now}`,
      },
    };
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .catch(err =>   // сделать модальное окно с выводом ошибок
        showError(`Ошибка запроса: ${err}`));
    const data = await res.json();
    return  data;
  }

  // возвращает сложность (int)
  async checkDifficulty(wordId) {
    const data = await this.checkWord(wordId);
    return data.difficulty;
  }

  async checkFirstTime(wordId) {
    const data = await this.checkWord(wordId);
    if (!data.optional.firstTime || isNaN(data.optional.firstTime)) {
      data.optional.firstTime = new Date();
    }
    return data.optional.firstTime;
  }

  // изменяет сложность слова на "-1", что дизменяет его категорию на  "удаленные"
  remove(wordId) {
    this.updateWord(wordId, -1);
  }

  // изменяет сложность слова на "2", что изменяет его категорию на "к изучению"
  restore(wordId) {
    this.updateWord(wordId, 2);
  }

  // изменяет сложность слова на "3"
  resetDifficulty(wordId) {
    this.updateWord(wordId, 3);
  }

  // уменьшает сложность слова на "1", если его текущая сложность > 0
  async downDifficulty(wordId) {
    const currDiffuculty = await this.checkDifficulty(wordId);
    const difficulty = (currDiffuculty > 0 ? currDiffuculty - 1 : currDiffuculty);
    this.updateWord(wordId, difficulty);
  }

  // фильтр только по сложности
  // принимает цифры сложности через запятую
  async loadAggregatedWords(str) {
    const args = str.split(',');
    const filter = args.map((e) => `{"userWord.difficulty":"${e}"}`);
    const url = `https://afternoon-falls-25894.herokuapp.com/users/${this.getUserId()}/aggregatedWords?filter=%7B%22%24or%22%3A%5B${filter.join()}%5D%7D`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .catch(err =>   // сделать модальное окно с выводом ошибок
        showError(`Ошибка запроса: ${err}`));
    const data = await res.json();
    return data[0].paginatedResults;
  }
}

const word = new WordLibrary();

export default word;
