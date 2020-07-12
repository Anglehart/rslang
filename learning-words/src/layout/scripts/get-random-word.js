const getRandomWord = async (words) => {
  const randomGroup = Math.floor(Math.random() * 6);
  const randomPage = Math.floor(Math.random() * 30);
  const randomWord = Math.floor(Math.random() * 20);

  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${randomPage}&group=${randomGroup}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(words),
  });
  const content = await rawResponse.json();

  return content[randomWord];
};

export default getRandomWord;
