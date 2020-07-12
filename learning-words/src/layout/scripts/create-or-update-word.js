import getUserWordById from './get-user-word-by-id';
import createUserWord from './create-user-word';
import updateUserWord from './update-user-word';

async function createOrUpdateWord(wordId, token, userId, diff) {
  const now = new Date();
  const userWord = await getUserWordById(token, wordId, userId);
  if (userWord !== null) {
    const wordFirstTime = userWord.optional.firstTime;
    const currentWordDifficulty = userWord.difficulty;
    updateUserWord({
      userId,
      token,
      wordId: userWord.wordId,
      word: {
        difficulty: diff || String(+currentWordDifficulty - 1),
        optional: { firstTime: wordFirstTime, lastTime: now.getTime() },
      },
    });
  } else {
    createUserWord({
      userId,
      token,
      wordId,
      word: { difficulty: diff || '0', optional: { firstTime: now.getTime(), lastTime: now.getTime() } },
    });
  }
}

export default createOrUpdateWord;
