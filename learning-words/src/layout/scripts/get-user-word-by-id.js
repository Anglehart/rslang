const getUserWordById = async (token, wordId, userId) => {
  try {
    const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${userId}/words/${wordId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const content = await rawResponse.json();

    return content;
  } catch (err) {
    return null; // no word
  }
};

export default getUserWordById;
