const iconPickers = document.querySelectorAll('.icon-picker');
const updateIcon = (callback) => {
    let selectedIcon = '';
    const handleClick = (event) => {
        const iconPicker = event.currentTarget;
        const icon = iconPicker.getAttribute('data-icon');
        selectedIcon = icon;
        removePreviousIcon();
        iconPicker.classList.replace('bg-text', 'bg-accent');
        iconPicker.firstElementChild.classList.replace('text-accent', 'text-secondaryColor');
        callback(selectedIcon);
    };
    iconPickers.forEach((iconPicker) => {
        iconPicker.addEventListener('click', handleClick);
    });
};
const removePreviousIcon = () => {
    iconPickers.forEach((iconPicker) => {
        iconPicker.firstElementChild.classList.replace('text-secondaryColor', 'text-accent');
        iconPicker.classList.replace('bg-accent', 'bg-text');
    });
};
export default updateIcon;
