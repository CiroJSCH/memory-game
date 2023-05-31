import { mainMenu } from '../globals.js';
const gameStatsContainer = document.getElementById('game-stats');
const gameStatsButton = document.getElementById('game-stats-button');
const backButton = document.getElementById('back-button');

gameStatsButton.addEventListener('click', () => {
  mainMenu.classList.replace('flex', 'hidden');
  gameStatsContainer.classList.replace('hidden', 'flex');
});

backButton.addEventListener('click', () => {
  gameStatsContainer.classList.replace('flex', 'hidden');
  mainMenu.classList.replace('hidden', 'flex');
});
