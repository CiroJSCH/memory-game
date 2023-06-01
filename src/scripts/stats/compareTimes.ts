import { Difficulty } from '../../types/index';
import { updateBestTime } from './updateStats.js';

const compareTimes = (
  elapsedTime: string,
  previousTime: string,
  difficulty: Difficulty,
) => {
  const time1Obj = parseTime(elapsedTime);
  const time2Obj = parseTime(previousTime);

  if (time1Obj < time2Obj) {
    updateBestTime(difficulty, elapsedTime);
  } else {
    const bestTime = document.getElementById('best-time');
    bestTime.classList.replace('inline-block', 'hidden');
  }
};

const parseTime = (time: string) => {
  const parts = time.split(':');
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  const seconds = parseInt(parts[2], 10);

  const timeObj = new Date();
  timeObj.setHours(hours);
  timeObj.setMinutes(minutes);
  timeObj.setSeconds(seconds);

  return timeObj;
};

export default compareTimes;
