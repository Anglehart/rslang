const getWordById = async (wordId, words) => {

  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/words/${wordId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(words),
  });
  const content = await rawResponse.json();

  console.log(content);

  return content;
};

export default getWordById;
