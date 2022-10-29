window.addEventListener('load', () => {
  if (!webkitSpeechRecognition || webkitSpeechRecognition === undefined) {
    alert('Your browser not supports voice recognition!');
  }
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'es-ES';
  recognition.continuous = true;
  console.log(recognition);
})