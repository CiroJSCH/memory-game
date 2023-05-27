const difficultyPickers = document.querySelectorAll('.difficulty-picker');

const updateDifficulty = () => {
  difficultyPickers.forEach((difficultyPicker) => {
    difficultyPicker.addEventListener('click', () => {
      const difficulty = difficultyPicker.getAttribute('data-icon');
      console.log(difficulty);
      removePreviousIcon();
      difficultyPicker.classList.replace('bg-text', 'bg-accent');
      difficultyPicker.firstElementChild.classList.replace(
        'text-accent',
        'text-secondaryColor',
      );
    });
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
