

 function playSound(e) {
     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
     if (!audio) return; // this will stop the function from running
     audio.currentTime = 0;
     audio.play();
     
     key.classList.add('playing')
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip if it is not the transforms
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener("transitionend",removeTransition));
window.addEventListener("keydown", playSound);
