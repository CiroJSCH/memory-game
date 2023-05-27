const colorPickers = document.querySelectorAll('.color-picker');
const updateColor = () => {
    colorPickers.forEach((picker) => {
        picker.addEventListener('click', () => {
            const color = picker.getAttribute('data-color');
            document.body.classList.remove('gold', 'green', 'pink', 'blue');
            document.body.classList.add(`${color}`);
            removePreviousColor();
            picker.classList.add('border-4', 'border-text');
        });
    });
};
const removePreviousColor = () => {
    colorPickers.forEach((picker) => {
        picker.classList.remove('border-4', 'border-text');
    });
};
export default updateColor;
