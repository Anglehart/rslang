import getSettings from './get-settings';
// eslint-disable-next-line import/no-cycle
import app from '../../index';

const voiceAudio = document.getElementById('audio');
const voiceExample = document.getElementById('audio-example');
const voiceMeaning = document.getElementById('audio-meaning');

function sayMeaning(word, arr, runApp) {
  if (word.audioMeaning.length > 100) {
    voiceMeaning.src = `data:audio/mpeg;base64,${word.audioMeaning}`;
  } else {
    voiceMeaning.src = `https://raw.githubusercontent.com/svirskia/rslang-data/master/${word.audioMeaning}`;
  }
  voiceMeaning.play();
  if (runApp) {
    voiceMeaning.onended = () => app(arr[arr.length - 1], arr);
  }
}

async function sayExample(word, userId, token, arr, runApp) {
  const settings = await getSettings(userId, token);

  if (word.audioExample.length > 100) {
    voiceExample.src = `data:audio/mpeg;base64,${word.audioExample}`;
  } else {
    voiceExample.src = `https://raw.githubusercontent.com/svirskia/rslang-data/master/${word.audioExample}`;
  }
  voiceExample.play();
  if (settings.optional.showTextMeaning) {
    voiceExample.onended = () => sayMeaning(word, arr, runApp);
  } else if (runApp) {
    voiceExample.onended = () => app(arr[arr.length - 1], arr);
  }
}
async function sayWord(word, arr, userId, token, runApp = true) {
  const settings = await getSettings(userId, token);

  if (word.audio.length > 100) {
    voiceAudio.src = `data:audio/mpeg;base64,${word.audio}`;
  } else {
    voiceAudio.src = `https://raw.githubusercontent.com/svirskia/rslang-data/master/${word.audio}`;
  }
  voiceAudio.play();
  if (settings.optional.showTextExample) {
    voiceAudio.onended = () => sayExample(word, userId, token, arr, runApp);
  } else if (settings.optional.showTextMeaning) {
    voiceAudio.onended = () => sayMeaning(word, arr, runApp);
  } else if (runApp) {
    voiceAudio.onended = () => app(arr[arr.length - 1], arr);
  }
}

export default sayWord;
