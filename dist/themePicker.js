const themePickers = document.querySelectorAll('.theme-picker');
const updateTheme = () => {
    themePickers.forEach((themePicker) => {
        themePicker.addEventListener('click', () => {
            const theme = themePicker.getAttribute('data-theme');
            if (theme === 'light') {
                document.documentElement.classList.replace('dark', 'light');
            }
            else {
                document.documentElement.classList.replace('light', 'dark');
            }
            removePreviousTheme();
            themePicker.classList.replace('bg-text', 'bg-accent');
            themePicker.classList.replace('text-accent', 'text-secondaryColor');
        });
    });
};
const removePreviousTheme = () => {
    themePickers.forEach((themePicker) => {
        themePicker.classList.replace('text-secondaryColor', 'text-accent');
        themePicker.classList.replace('bg-accent', 'bg-text');
    });
};
export default updateTheme;
