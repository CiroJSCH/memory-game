let initialTime = 0;
let interval: NodeJS.Timeout;

const timeElement: HTMLElement | null = document.getElementById('time-count');

export const startTimer = (time?: string) => {
  if (time) {
    stopTimer();
    const splittedTime = time.split(':');

    const seconds = parseInt(splittedTime[2]);
    const minutes = parseInt(splittedTime[1]);
    const hours = parseInt(splittedTime[0]);

    initialTime =
      Date.now() -
      (seconds * 1000 + minutes * 60 * 1000 + hours * 60 * 60 * 1000);
    interval = setInterval(updateTimer, 1000);
  } else {
    initialTime = Date.now();
    interval = setInterval(updateTimer, 1000);
  }
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
  const actualTime = Date.now() - initialTime;
  const seconds = Math.floor(actualTime / 1000) % 60;
  const minutes = Math.floor(actualTime / (1000 * 60)) % 60;
  const hours = Math.floor(actualTime / (1000 * 60 * 60));

  const secondsText = seconds < 10 ? '0' + seconds : seconds.toString();
  const minutesText = minutes < 10 ? '0' + minutes : minutes.toString();
  const hoursText = hours < 10 ? '0' + hours : hours.toString();

  if (timeElement) {
    timeElement.innerHTML = hoursText + ':' + minutesText + ':' + secondsText;
  }
};
