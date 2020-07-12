/* eslint-disable max-len */
import getUserWords from './get-user-words';
import getSettings from './get-settings';
import addNotification from './add-notification';

async function progress(token, userId) {
  const allUserWods = await getUserWords(token, userId);
  const settings = await getSettings(userId, token);
  const now = new Date();

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
  const barAll = document.querySelector('.progress-bar-all span');
  barAll.style.width = `${(alredyLearnedWordsToday / settings.optional.cardsPerDay) * 100}%`;

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
  const bar = document.querySelector('.progress-bar span');
  bar.style.width = `${(alredyLearnedNewWordsToday / settings.wordsPerDay) * 100}%`;

  if (alredyLearnedWordsToday / settings.optional.cardsPerDay >= 1) {
    addNotification();
  }
}

export default progress;
