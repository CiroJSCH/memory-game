export const saveColor = (selectedColor) => {
    localStorage.setItem('color', selectedColor);
};
export const getColor = () => {
    return localStorage.getItem('color');
};
