export const saveColor = (selectedColor: string) => {
  localStorage.setItem('color', selectedColor);
};

export const getColor = () => {
  return localStorage.getItem('color');
};
