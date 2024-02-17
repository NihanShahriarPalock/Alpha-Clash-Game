
function hideSection(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}

function showSection(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}

function getTextElementValue(elementId){
    const textElementId = document.getElementById(elementId);
    const textElement = textElementId.innerText;
    const value = parseInt(textElement);
    return value;

}
function setTextElementValue(elementId,value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
  

}

function generateAlphabet() {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetSplit = alphabets.split('');
    const randomNumber = Math.random() * 25;
    const randomAlphabet = Math.round(randomNumber);
    const alphabet = alphabets[randomAlphabet];
    return alphabet;

}

function setKeyboardColor(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400');
}
function removeKeyboardColor(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400');
}

function handleKeyboardPress(event) {
    
    const playerPress = event.key;
    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if (playerPress === expectedAlphabet) {
        const currentScore = getTextElementValue('scoreCount');
        const updateScore = currentScore + 1;
        setTextElementValue('scoreCount',updateScore);

        removeKeyboardColor(expectedAlphabet);
        continueGame();

    }
    else{
        const currentScore = getTextElementValue('lifeCount');
        const updateScore = currentScore - 1;
        setTextElementValue('lifeCount', updateScore);

        removeKeyboardColor(expectedAlphabet);
        continueGame();

    }
}

document.addEventListener('keyup', handleKeyboardPress);



function continueGame() {
    const alphabet = generateAlphabet();
    const currentAlphabetElement = document.getElementById('currentAlphabet');
    currentAlphabetElement.innerHTML = alphabet.toUpperCase();
    setKeyboardColor(alphabet);


}
function playNow() {
    hideSection('dashboard');
    showSection('gameControl');
    continueGame();

}
