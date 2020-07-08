/* eslint-disable class-methods-use-this */
import addRow from './vocabulary/tableContent';

class WordLibrary {
  // TODO: удалить перед пулреквестом
  // для тестов
  setLocalStorage() {
    localStorage.setItem('email', 'team17@mail.ru');
    localStorage.setItem('password', 'RsSchool2020!');
    localStorage.setItem('userId', '5eefa4639896e10017eea40c');
    localStorage.setItem('token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWZhNDYzOTg5NmUxMDAxN2VlYTQwYyIsImlhdCI6MTU5NDIwMTM1NywiZXhwIjoxNTk0MjE1NzU3fQ.OT1p6QJcYXcR8z4TqgDylQd4e6mP5hKAK58pA91SE3k');
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
  async getWordData(b) {
    const a = await b;
    const url = `https://afternoon-falls-25894.herokuapp.com/words/${a.wordId}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    data.difficulty = a.difficulty;
    data.firstTime = a.optional.firstTime;
    data.lastTime = a.optional.lastTime;
    addRow(data);
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
    });
    const data = await res.json();
    console.log(data);
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
    });
    const data = (res.ok ? res.json() : `${res.status}: ${res.text()}`);
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
    });
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
    });
    const data = await (res.ok ? res.json() : `${res.status}: ${res.text()}`);
    return data;
  }

  // для тестового изменения даты слов
  async updateWordTest(wordId, difficulty, minus) {
    const url = `https://afternoon-falls-25894.herokuapp.com/users/${await this.getUserId()}/words/${wordId}`;
    const now = new Date();
    await now.setDate(now.getDate() - minus);
    const firstTime = now;
    console.log(firstTime);
    // const firstTime = await this.checkFirstTime(wordId);
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
    });
    const data = (res.ok ? res.json() : `${res.status}: ${res.text()}`);
    console.log(data);
  }

  // TODO: изменить консольлог на ретурн
  // изменяет слово. возвращает измененное слово, иначе возвращает ошибку
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
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = (res.ok ? res.json() : `${res.status}: ${res.text()}`);
    console.log(data);
  }

  // возвращает сложность (int)
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
}

const word = new WordLibrary();

export default word;
