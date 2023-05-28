let initialTime = 0;
let interval: NodeJS.Timeout;

export const startTimer = (): void => {
  initialTime = Date.now();
  interval = setInterval(updateTimer, 1000);
};

export const stopTimer = (): void => {
  clearInterval(interval);
};

const updateTimer = (): void => {
  const tiempoActual: number = Date.now() - initialTime;
  const segundos: number = Math.floor(tiempoActual / 1000) % 60;
  const minutos: number = Math.floor(tiempoActual / (1000 * 60)) % 60;
  const horas: number = Math.floor(tiempoActual / (1000 * 60 * 60));

  // Agrega ceros a la izquierda si es necesario
  const segundosTexto: string =
    segundos < 10 ? '0' + segundos : segundos.toString();
  const minutosTexto: string =
    minutos < 10 ? '0' + minutos : minutos.toString();
  const horasTexto: string = horas < 10 ? '0' + horas : horas.toString();

  // Actualiza el elemento HTML con el tiempo transcurrido
  const tiempoElemento: HTMLElement | null =
    document.getElementById('time-count');
  if (tiempoElemento) {
    tiempoElemento.innerHTML =
      horasTexto + ':' + minutosTexto + ':' + segundosTexto;
  }
};
