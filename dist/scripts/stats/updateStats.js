import setInitialStats from './initialStats.js';
if (localStorage.getItem('stats') === null) {
    setInitialStats();
}
const stats = JSON.parse(localStorage.getItem('stats'));
const mapIcons = {
    programming: '<i class="fa-solid fa-code fa-lg"></i>',
    animals: '<i class="fa-solid fa-paw fa-lg"></i>',
    sports: '<i class="fa-solid fa-futbol fa-lg"></i>',
};
const mapDifficulty = {
    easy: '<i class="fa-solid fa-face-smile-beam fa-lg"></i>',
    normal: '<i class="fa-solid fa-face-rolling-eyes fa-lg"></i>',
    hard: '<i class="fa-solid fa-face-tired fa-lg"></i>',
};
export const updateGeneralStats = (selectedDifficulty, selectedIcon) => {
    updateGamesPlayed(selectedDifficulty);
    updateFavouriteIcon(selectedIcon);
    updateFavouriteDifficulty(selectedDifficulty);
};
export const updateGamesPlayed = (key) => {
    stats['general'].gamesPlayed++;
    stats[key].gamesPlayed++;
    localStorage.setItem('stats', JSON.stringify(stats));
};
export const updateFavouriteIcon = (key) => {
    stats.general.favouriteIcon[key]++;
    localStorage.setItem('stats', JSON.stringify(stats));
};
export const updateFavouriteDifficulty = (key) => {
    stats.general.favouriteDifficulty[key]++;
    localStorage.setItem('stats', JSON.stringify(stats));
};
export const updateBestTime = (key, time) => {
    stats[key].bestTime = time;
    localStorage.setItem('stats', JSON.stringify(stats));
    const bestTime = document.getElementById('best-time');
    bestTime.classList.replace('hidden', 'inline-block');
};
export const getBestTime = (key) => stats[key].bestTime;
export const getBestMove = (key) => stats[key].bestMoves;
export const updateBestMoves = (key, moves) => {
    stats[key].bestMoves = moves;
    localStorage.setItem('stats', JSON.stringify(stats));
    const bestMoves = document.getElementById('best-moves');
    bestMoves.classList.replace('hidden', 'inline-block');
};
export const getStats = () => {
    const { general, easy, normal, hard } = stats;
    // General stats
    const generalGamesPlayed = document.getElementById('general-games-played');
    generalGamesPlayed.innerHTML = general.gamesPlayed.toString();
    const favouriteIcon = document.getElementById('favourite-icon');
    const icon = Object.keys(general.favouriteIcon).reduce((a, b) => general.favouriteIcon[a] > general.favouriteIcon[b] ? a : b);
    favouriteIcon.innerHTML =
        general.favouriteIcon[icon] == 0 ? '--' : mapIcons[icon];
    const favouriteDifficulty = document.getElementById('favourite-difficulty');
    const difficulty = Object.keys(general.favouriteDifficulty).reduce((a, b) => general.favouriteDifficulty[a] > general.favouriteDifficulty[b] ? a : b);
    favouriteDifficulty.innerHTML =
        general.favouriteDifficulty[difficulty] == 0
            ? '--'
            : mapDifficulty[difficulty];
    // Easy stats
    const easyGamesPlayed = document.getElementById('easy-games-played');
    const easyBestTime = document.getElementById('easy-best-time');
    const easyBestMoves = document.getElementById('easy-best-moves');
    easyGamesPlayed.innerHTML = easy.gamesPlayed.toString();
    easyBestTime.innerHTML = easy.bestTime;
    easyBestMoves.innerHTML = easy.bestMoves;
    //  Normal stats
    const normalGamesPlayed = document.getElementById('normal-games-played');
    const normalBestTime = document.getElementById('normal-best-time');
    const normalBestMoves = document.getElementById('normal-best-moves');
    normalGamesPlayed.innerHTML = normal.gamesPlayed.toString();
    normalBestTime.innerHTML = normal.bestTime;
    normalBestMoves.innerHTML = normal.bestMoves;
    // Hard stats
    const hardGamesPlayed = document.getElementById('hard-games-played');
    const hardBestTime = document.getElementById('hard-best-time');
    const hardBestMoves = document.getElementById('hard-best-moves');
    hardGamesPlayed.innerHTML = hard.gamesPlayed.toString();
    hardBestTime.innerHTML = hard.bestTime;
    hardBestMoves.innerHTML = hard.bestMoves;
};
