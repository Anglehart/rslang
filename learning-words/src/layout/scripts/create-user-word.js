const createUserWord = async ({
  userId, token, wordId, word,
}) => {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/${wordId}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word),
  });
  const newWord = await rawResponse.json();

  return newWord;
};

export default createUserWord;
