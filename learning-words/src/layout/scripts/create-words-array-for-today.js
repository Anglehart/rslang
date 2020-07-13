/* eslint-disable max-len */
import getUserWords from './get-user-words';
import getRandomWord from './get-random-word';
import getWordById from './get-word-by-id';

async function createWordsArrayForToday(newWords, maxCards, token, userId) {
  const now = new Date();
  const allUserWods = await getUserWords(token, userId);
  const sortedFromNewAllUserWods = allUserWods.sort((a, b) => (a.optional.lastTime < b.optional.lastTime ? 1 : -1));
  let alredyLearnedWordsToday = 0;
  let alredyLearnedNewWordsToday = 0;

  for (let i = 0; i < sortedFromNewAllUserWods.length; i += 1) {
    const lastRepeatTime = new Date(sortedFromNewAllUserWods[i].optional.lastTime - 4 * 3600 * 1000);
    const fourHoursEarlier = new Date(now.getTime() - 4 * 3600 * 1000);
    if (lastRepeatTime.getDate() === fourHoursEarlier.getDate()
      && sortedFromNewAllUserWods[i].difficulty !== '3'
      && sortedFromNewAllUserWods[i].difficulty !== '-1') {
      alredyLearnedWordsToday += 1;
    }
    //  else if (lastRepeatTime.getDate() !== fourHoursEarlier.getDate()) {
    //   break;
    // }
  }
  for (let i = 0; i < sortedFromNewAllUserWods.length; i += 1) {
    const firstRepeatTime = new Date(sortedFromNewAllUserWods[i].optional.firstTime - 4 * 3600 * 1000);
    const fourHoursEarlier = new Date(now.getTime() - 4 * 3600 * 1000);
    if (firstRepeatTime.getDate() === fourHoursEarlier.getDate()
      && sortedFromNewAllUserWods[i].difficulty !== '3'
      && sortedFromNewAllUserWods[i].difficulty !== '-1') {
      alredyLearnedNewWordsToday += 1;
    }
    //  else if (lastRepeatTime.getDate() !== fourHoursEarlier.getDate()) {
    //   break;
    // }
  }

  const arrayOfWordsForToday = [];

  for (let i = 0; i < newWords - alredyLearnedNewWordsToday; i += 1) {
    const randomWord = getRandomWord();
    arrayOfWordsForToday.push(randomWord);
  }

  const difficult3UserWords = allUserWods.filter((item) => +item.difficulty > 2);
  for (let i = 0; i < difficult3UserWords.length; i += 1) {
    if (arrayOfWordsForToday.length < maxCards - alredyLearnedWordsToday) {
      const difficultUserWord = getWordById(difficult3UserWords[i].wordId);
      arrayOfWordsForToday.push(difficultUserWord);
    } else if (arrayOfWordsForToday.length >= maxCards - alredyLearnedWordsToday) {
      break;
    }
  }

  const difficult2UserWords = allUserWods.filter((item) => +item.difficulty === 2);
  for (let i = 0; i < difficult2UserWords.length; i += 1) {
    if (arrayOfWordsForToday.length < maxCards - alredyLearnedWordsToday
      && (now.getTime() - difficult2UserWords[i].optional.lastTime) / 60000 / 60 > 22 // если больше 22 часов не повторялось
      && difficult2UserWords[i].wordId !== '5efe34e3635aec001764d725') { // глюк
      const notEasyUserWord = getWordById(difficult2UserWords[i].wordId);
      arrayOfWordsForToday.push(notEasyUserWord);
    } else if (arrayOfWordsForToday.length >= maxCards - alredyLearnedWordsToday) {
      break;
    }
  }

  const difficult1UserWords = allUserWods.filter((item) => +item.difficulty === 1);
  for (let i = 0; i < difficult1UserWords.length; i += 1) {
    if (arrayOfWordsForToday.length < maxCards - alredyLearnedWordsToday
      && (now.getTime() - difficult1UserWords[i].optional.lastTime) / 60000 / 60 > 70) { // если больше 70 часов не повторялось
      const easyUserWord = getWordById(difficult1UserWords[i].wordId);
      arrayOfWordsForToday.push(easyUserWord);
    } else if (arrayOfWordsForToday.length >= maxCards - alredyLearnedWordsToday) {
      break;
    }
  }

  const result = await Promise.all(arrayOfWordsForToday);
  return result;
}

export default createWordsArrayForToday;
