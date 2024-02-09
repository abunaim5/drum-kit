function playSound(KeyboardEvent) {
    const audio = this.document.querySelector(`audio[data-key="${KeyboardEvent.key}"]`)
    const key = this.document.querySelector(`.key[data-key="${KeyboardEvent.key}"]`)
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('play');
};
function removeTransition(KeyboardEvent){
    if(KeyboardEvent.propertyName !== 'transform') return;
    this.classList.remove('play');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);