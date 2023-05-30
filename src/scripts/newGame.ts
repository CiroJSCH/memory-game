import {
  cardsContainer,
  game,
  header,
  inGameMenu,
  inGameMobileMenu,
  mainMenu,
  movesCount,
} from './globals.js';
import { stopTimer, resetTimer } from './timeCounter.js';

const newGame = () => {
  movesCount.innerHTML = '0';
  header.classList.remove('md:justify-between');
  inGameMobileMenu.classList.replace('flex', 'hidden');
  game.classList.replace('flex', 'hidden');
  inGameMenu.classList.replace('flex', 'hidden');
  mainMenu.classList.replace('hidden', 'flex');

  cardsContainer.innerHTML = '';
  stopTimer();
  resetTimer();
};

export default newGame;
