import control from './control.component.js';
import storageService from './storage.service.js';

class VoiceService {
  constructor() {
    this.recognation = null;
    this.listening = false;
  }

  startStop() {
    // Специально для тех, кто запретит доступ к микрофону
    navigator.getMedia = (navigator.getUserMedia
      || navigator.webkitGetUserMedia
      || navigator.mozGetUserMedia
      || navigator.msGetUserMedia);

    if (this.listening) {
      this.recognation.removeEventListener('end', this.recognation.start);
      this.recognation.stop();
      control.micOff();
    } else {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      this.recognation = new SpeechRecognition();
      this.recognation.lang = 'en-US';
      this.recognation.interimResults = true;
      navigator.getMedia({ audio: true }, () => {
        this.recognation.start();
        this.listenRequest();
        control.micOn();
      }, () => {});
    }
    this.listening = !this.listening;
  }

  listenRequest() {
    this.recognation.addEventListener('result', (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      if (e.results[0].isFinal) {console.log(transcript)}
    });
    this.recognation.addEventListener('end', this.recognation.start);
  }
}
const voiceService = new VoiceService();
export default voiceService;
