const playerEl = document.querySelector('.player');
const playerPlayBtnEl = playerEl.querySelector('.player__play-btn');
const playerPauseBtnEl = playerEl.querySelector('.player__pause-btn');
const playerVideoEl = playerEl.querySelector('.player__video');

const playVideo = () => {
  playerVideoEl.play();
  playerEl.classList.add('playing');
};
const pauseVideo = () => playerVideoEl.pause();

playerVideoEl.addEventListener('play', () => {
  if (playerEl.classList.contains('paused')) {
    playerEl.classList.remove('paused');
  }
  playerEl.classList.add('playing');
});
playerVideoEl.addEventListener('pause', () => {
  playerVideoEl.pause();
  playerEl.classList.add('paused');
});
