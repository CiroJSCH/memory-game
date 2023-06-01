import { resetTimer, stopTimer } from './timeCounter.js';
import { cardsContainer, movesCount } from './globals.js';
import startGame from './menu/startGame.js';
const restartGame = (selectedIcon, selectedDifficulty) => {
    resetTimer();
    stopTimer();
    cardsContainer.innerHTML = '';
    movesCount.innerHTML = '0';
    startGame(selectedIcon, selectedDifficulty);
};
export default restartGame;
