
function hideSection(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
    
}

function showSection(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}

function playNow() {
    hideSection('dashboard');
    showSection('gameControl');
    // console.log('I am Working');
}