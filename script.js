window.addEventListener('keydown', playSound);

function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stops the function from running
    audio.currentTime = 0; //rewinds to the start of the audio clip
    audio.play(); 
    key.classList.add("playing");
    // setTimeout(() => key.classList.remove('playing'), 700);
    //This works but it may cause some issues if I were to change the transition in the CSS
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it is not a transform
    this.classList.remove('playing');
    //'this' is always the thing that was called. so in this case, this is whatever key you pressed
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));