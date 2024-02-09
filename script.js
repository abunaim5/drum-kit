window.addEventListener('keydown', function (KeyboardEvent) {
    const audio = this.document.querySelector(`audio[data-key="${KeyboardEvent.key}"]`)
    const key = this.document.querySelector(`.key[data-key="${KeyboardEvent.key}"]`)
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('play');
});