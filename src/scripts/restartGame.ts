import { resetTimer, stopTimer } from './timeCounter.js';
import { cardsContainer, movesCount } from './globals.js';
import startGame from './startGame.js';

type Icon = 'programming' | 'animals' | 'sports';

const restartGame = (selectedIcon: Icon, selectedDifficulty: string) => {
  resetTimer();
  stopTimer();
  cardsContainer.innerHTML = '';
  movesCount.innerHTML = '0';
  startGame(selectedIcon, selectedDifficulty);
};

export default restartGame;
