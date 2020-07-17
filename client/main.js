const button = document.getElementById(`input-submit`);
button.addEventListener('click', submitText);
const wordList = document.querySelector('ul');
let reversedText;
let origStr;
let str;
loadWords()

function loadWords() {
  fetch('http://localhost:3000/words')
      .then(r => r.JSON())
      .then(outputReversedText)
      .catch(console.warn)
};

function submitText(e) {
  e.preventDefault();
  origStr = document.getElementById(`input-text`).value
  let textBox = document.getElementById(`input-text`)
  let str;
  textBox.value = ""
    reverseText(origStr)

    const wordData = {
      original: origStr, backwards: reversedText
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(wordData)
    };
    fetch('http://localhost:3000/words', options)
        .then(r => r.json())
        .then(outputReversedText)
        .catch(console.warn)

}

function reverseText(str){
  reversedText = str.split('').reverse().join('');
  return reversedText
}

function outputReversedText(wordData) {
  const newLi = document.createElement('li')
  newLi.textContent = `word: ${wordData.name} || backwards: ${wordData.backwards}`
  wordList.append(newLi)
}
