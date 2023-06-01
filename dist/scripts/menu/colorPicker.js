const colorPickers = document.querySelectorAll('.color-picker');
import { saveColor, getColor } from './saveColor.js';
const updateColor = () => {
    colorPickers.forEach((picker) => {
        picker.addEventListener('click', () => {
            const color = picker.getAttribute('data-color');
            document.body.classList.remove('gold', 'green', 'pink', 'blue');
            document.body.classList.add(`${color}`);
            saveColor(color);
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
const savedColor = getColor();
if (savedColor) {
    removePreviousColor();
    document.body.classList.add(`${savedColor}`);
    colorPickers.forEach((picker) => {
        const color = picker.getAttribute('data-color');
        if (color === savedColor) {
            picker.classList.add('border-4', 'border-text');
        }
    });
}
else {
    colorPickers[0].classList.add('border-4', 'border-text');
    document.body.classList.add('green');
}
export default updateColor;
