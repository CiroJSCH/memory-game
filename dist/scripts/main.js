import { inGameMobileMenu } from './globals.js';
import updateIcon from './menu/iconPicker.js';
import updateDifficulty from './menu/difficultyPicker.js';
import updateColor from './menu/colorPicker.js';
import startGame from './menu/startGame.js';
import { startTimer, stopTimer } from './timeCounter.js';
import restartGame from './restartGame.js';
import newGame from './newGame.js';
let selectedIcon = 'programming';
let selectedDifficulty = 'easy';
updateIcon((icon) => {
    selectedIcon = icon;
});
updateDifficulty((difficulty) => {
    selectedDifficulty = difficulty;
});
updateColor();
const main = () => {
    const startGameButton = document.getElementById('start-game-button');
    startGameButton.addEventListener('click', () => startGame(selectedIcon, selectedDifficulty));
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
