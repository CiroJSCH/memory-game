let initialTime = 0;
let interval: NodeJS.Timeout;

const timeElement: HTMLElement | null = document.getElementById('time-count');

export const startTimer = () => {
  initialTime = Date.now();
  interval = setInterval(updateTimer, 1000);
};

export const stopTimer = () => {
  clearInterval(interval);
};

export const resetTimer = () => {
  if (timeElement) {
    timeElement.innerHTML = '00:00:00';
  }
};

const updateTimer = (): void => {
  const tiempoActual: number = Date.now() - initialTime;
  const segundos: number = Math.floor(tiempoActual / 1000) % 60;
  const minutos: number = Math.floor(tiempoActual / (1000 * 60)) % 60;
  const horas: number = Math.floor(tiempoActual / (1000 * 60 * 60));

  const segundosTexto: string =
    segundos < 10 ? '0' + segundos : segundos.toString();
  const minutosTexto: string =
    minutos < 10 ? '0' + minutos : minutos.toString();
  const horasTexto: string = horas < 10 ? '0' + horas : horas.toString();

  if (timeElement) {
    timeElement.innerHTML =
      horasTexto + ':' + minutosTexto + ':' + segundosTexto;
  }
};
