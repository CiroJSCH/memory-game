const iconPickers = document.querySelectorAll('.icon-picker');
const updateIcon = () => {
    iconPickers.forEach((iconPicker) => {
        iconPicker.addEventListener('click', () => {
            const icon = iconPicker.getAttribute('data-icon');
            console.log(icon);
            removePreviousIcon();
            iconPicker.classList.replace('bg-text', 'bg-accent');
            iconPicker.firstElementChild.classList.replace('text-accent', 'text-secondaryColor');
        });
    });
};
const removePreviousIcon = () => {
    iconPickers.forEach((iconPicker) => {
        iconPicker.firstElementChild.classList.replace('text-secondaryColor', 'text-accent');
        iconPicker.classList.replace('bg-accent', 'bg-text');
    });
};
export default updateIcon;
