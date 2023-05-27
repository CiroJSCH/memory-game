import updateIcon from './iconPicker.js';
import updateDifficulty from './difficultyPicker.js';
import updateColor from './colorPicker.js';
const main = () => {
    let selectedIcon = 'programming';
    let selectedDifficulty = 'easy';
    updateIcon((icon) => {
        selectedIcon = icon;
    });
    updateDifficulty((difficulty) => {
        selectedDifficulty = difficulty;
    });
    updateColor();
    const startGameButton = document.getElementById('start-game-button');
    startGameButton.addEventListener('click', () => {
        const mainMenu = document.getElementById('main-menu');
        mainMenu.classList.replace('flex', 'hidden');
        console.log(`Opciones seleccionadas: ${selectedDifficulty} ${selectedIcon}`);
    });
};
main();
