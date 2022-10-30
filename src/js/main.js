const COLORS = ['red', 'black', 'white', 'blue', 'pink', 'brown'];
const button = document.querySelector('#btn');
const list = document.querySelector('#list');

if (!webkitSpeechRecognition || webkitSpeechRecognition === undefined) {
  alert('Your browser not supports voice recognition!');
}

COLORS.forEach(color => {
  const node = document.createElement('li');
  node.innerHTML = color;
  
  list.append(node);

})

function defineRecognition() {
  const recognition = new webkitSpeechRecognition();
  const body = document.querySelector('body');

  recognition.lang = 'en-US';
  recognition.continuous = false;

  recognition.onresult = evt => {
    let color = evt.results[0][0].transcript;
    body.style.backgroundColor = color;
    console.log(`Color is ${color}`);
  }

  recognition.start();

  recognition.onspeechend = () => recognition.stop();
  recognition.onnomatch = () => alert('No color recognised');
  recognition.onerror = (evt) => {
    alert(`Error occurred in recognition ${evt.error}`);
  }
}

button.addEventListener('click', () => {
  defineRecognition();
})