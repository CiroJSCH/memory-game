import { inGameMobileMenu } from './globals.js';
import updateIcon from './iconPicker.js';
import updateDifficulty from './difficultyPicker.js';
import updateColor from './colorPicker.js';
import startGame from './startGame.js';
import { startTimer, stopTimer } from './timeCounter.js';
import restartGame from './restartGame.js';
import newGame from './newGame.js';

type Icon = 'programming' | 'animals' | 'sports';

let selectedIcon: Icon = 'programming';
let selectedDifficulty = 'easy';
updateIcon((icon: Icon) => {
  selectedIcon = icon;
});

updateDifficulty((difficulty) => {
  selectedDifficulty = difficulty;
});

updateColor();

const main = () => {
  const startGameButton = document.getElementById('start-game-button');

  startGameButton.addEventListener('click', () =>
    startGame(selectedIcon, selectedDifficulty),
  );

  inGameMobileMenu.addEventListener('click', () => {
    const gamePausedModal = document.getElementById('game-paused-modal');
    gamePausedModal.classList.replace('hidden', 'flex');

    const time = document.getElementById('time-count').innerHTML;
    stopTimer();
    const restartGameModal = document.getElementById('restart-game-modal');
    const newGameModal = document.getElementById('new-game-modal');
    const resumeGameModal = document.getElementById('resume-game-modal');

    restartGameModal.addEventListener('click', () => {
      gamePausedModal.classList.replace('flex', 'hidden');
      restartGame(selectedIcon, selectedDifficulty);
    });

    newGameModal.addEventListener('click', () => {
      gamePausedModal.classList.replace('flex', 'hidden');
      newGame();
    });

    resumeGameModal.addEventListener('click', () => {
      gamePausedModal.classList.replace('flex', 'hidden');
      startTimer(time);
    });
  });
};

main();
