import { Stats, Difficulty, Icon } from '../../types/index.js';

const mapIcons = {
  programming: '<i class="fa-solid fa-code fa-lg"></i>',
  animals: '<i class="fa-solid fa-paw fa-lg"></i>',
  sports: '<i class="fa-solid fa-futbol fa-lg"></i>',
};

export const updateGeneralStats = (
  selectedDifficulty: Difficulty,
  selectedIcon: Icon,
) => {
  updateGamesPlayed(selectedDifficulty);
  updateFavouriteIcon(selectedIcon);
  updateFavouriteDifficulty(selectedDifficulty);
};

export const updateGamesPlayed = (key: Difficulty) => {
  const stats: Stats = JSON.parse(localStorage.getItem('stats'));
  stats['general'].gamesPlayed++;
  stats[key].gamesPlayed++;
  localStorage.setItem('stats', JSON.stringify(stats));
};

export const updateFavouriteIcon = (key: Icon) => {
  const stats: Stats = JSON.parse(localStorage.getItem('stats'));
  stats.general.favouriteIcon[key]++;
  localStorage.setItem('stats', JSON.stringify(stats));
};

export const updateFavouriteDifficulty = (key: Difficulty) => {
  const stats: Stats = JSON.parse(localStorage.getItem('stats'));
  stats.general.favouriteDifficulty[key]++;
  localStorage.setItem('stats', JSON.stringify(stats));
};

export const getStats = () => {
  const { general, easy, normal, hard }: Stats = JSON.parse(
    localStorage.getItem('stats'),
  );

  // General stats
  const generalGamesPlayed = document.getElementById('general-games-played');
  generalGamesPlayed.innerHTML = general.gamesPlayed.toString();

  const favouriteIcon = document.getElementById('favourite-icon');
  const icon = Object.keys(general.favouriteIcon).reduce((a: Icon, b: Icon) =>
    general.favouriteIcon[a] > general.favouriteIcon[b] ? a : b,
  );
  favouriteIcon.innerHTML =
    general.favouriteIcon[icon as Icon] == 0 ? '--' : mapIcons[icon as Icon];

  const favouriteDifficulty = document.getElementById('favourite-difficulty');
  const difficulty = Object.keys(general.favouriteDifficulty).reduce(
    (a: Difficulty, b: Difficulty) =>
      general.favouriteDifficulty[a] > general.favouriteDifficulty[b] ? a : b,
  );
  favouriteDifficulty.innerHTML =
    general.favouriteDifficulty[difficulty as Difficulty] == 0
      ? '--'
      : difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

  // Easy stats
  const easyGamesPlayed = document.getElementById('easy-games-played');
  easyGamesPlayed.innerHTML = easy.gamesPlayed.toString();

  //  Normal stats
  const normalGamesPlayed = document.getElementById('normal-games-played');
  normalGamesPlayed.innerHTML = normal.gamesPlayed.toString();

  // Hard stats
  const hardGamesPlayed = document.getElementById('hard-games-played');
  hardGamesPlayed.innerHTML = hard.gamesPlayed.toString();
};
