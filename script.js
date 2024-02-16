
function hideSection(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
    
}

function showSection(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}

function generateAlphabet(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetSplit = alphabets.split('');
    const randomNumber = Math.random()*25;
    const randomAlphabet = Math.round(randomNumber);

    const alphabet = alphabets[randomAlphabet];
    return alphabet;

}

function setKeyboardColor(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400');
}



function continueGame(){
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
