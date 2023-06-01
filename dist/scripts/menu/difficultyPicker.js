const difficultyPickers = document.querySelectorAll('.difficulty-picker');
const updateDifficulty = (callback) => {
    let selectedDifficulty = '';
    const handleClick = (event) => {
        const difficultyPicker = event.currentTarget;
        const difficulty = difficultyPicker.getAttribute('data-difficulty');
        selectedDifficulty = difficulty || '';
        removePreviousIcon();
        difficultyPicker.classList.replace('bg-text', 'bg-accent');
        difficultyPicker.firstElementChild?.classList.replace('text-accent', 'text-secondaryColor');
        callback(selectedDifficulty);
    };
    difficultyPickers.forEach((difficultyPicker) => {
        difficultyPicker.addEventListener('click', handleClick);
    });
};
const removePreviousIcon = () => {
    difficultyPickers.forEach((difficultyPicker) => {
        difficultyPicker.firstElementChild.classList.replace('text-secondaryColor', 'text-accent');
        difficultyPicker.classList.replace('bg-accent', 'bg-text');
    });
};
export default updateDifficulty;
