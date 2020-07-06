
const updateUserWord = async ({
  userId, token, wordId, word,
}) => {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/${wordId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word),
  });
  const updatedWord = await rawResponse.json();

  console.log(updatedWord);
  return updatedWord;
};


export default updateUserWord;
