import { resetTimer, stopTimer } from './timeCounter.js';
import { cardsContainer, movesCount } from './globals.js';
import startGame from './menu/startGame.js';
import { Icon, Difficulty } from '../types/index.js';

const restartGame = (selectedIcon: Icon, selectedDifficulty: Difficulty) => {
  resetTimer();
  stopTimer();
  cardsContainer.innerHTML = '';
  movesCount.innerHTML = '0';
  startGame(selectedIcon, selectedDifficulty);
};

export default restartGame;
