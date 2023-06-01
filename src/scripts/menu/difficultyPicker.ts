import { Difficulty } from '../../types/index.js';
const difficultyPickers = document.querySelectorAll('.difficulty-picker');

const updateDifficulty = (callback: (difficulty: Difficulty) => void): void => {
  let selectedDifficulty = '';

  const handleClick = (event: Event): void => {
    const difficultyPicker = event.currentTarget as HTMLElement;
    const difficulty = difficultyPicker.getAttribute('data-difficulty');
    selectedDifficulty = difficulty || '';

    removePreviousIcon();
    difficultyPicker.classList.replace('bg-text', 'bg-accent');
    difficultyPicker.firstElementChild?.classList.replace(
      'text-accent',
      'text-secondaryColor',
    );

    callback(selectedDifficulty as Difficulty);
  };

  difficultyPickers.forEach((difficultyPicker) => {
    difficultyPicker.addEventListener('click', handleClick);
  });
};

const removePreviousIcon = () => {
  difficultyPickers.forEach((difficultyPicker) => {
    difficultyPicker.firstElementChild.classList.replace(
      'text-secondaryColor',
      'text-accent',
    );
    difficultyPicker.classList.replace('bg-accent', 'bg-text');
  });
};

export default updateDifficulty;
