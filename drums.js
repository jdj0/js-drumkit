function playSound(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return; // stops function running when non-bound key pressed
    audio.currentTime = 0; //allows the audio to start over on each key press
    audio.play();
    key.classList.add('playing')
}

function removeTransition(event) {
    if(event.propertyName !== 'transform') return; // if it's not a transform - skip it
    this.classList.remove('playing');
} 

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);