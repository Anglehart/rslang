const getWordById = async (wordId) => {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/words/${wordId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const content = await rawResponse.json();
  // 5efe34e3635aec001764d725  - глючное слово
  return content;
};

export default getWordById;
