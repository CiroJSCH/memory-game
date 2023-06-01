import { updateBestTime } from './updateStats.js';
const compareTimes = (elapsedTime, previousTime, difficulty) => {
    const time1Obj = parseTime(elapsedTime);
    const time2Obj = parseTime(previousTime);
    if (time1Obj < time2Obj) {
        updateBestTime(difficulty, elapsedTime);
    }
};
const parseTime = (time) => {
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
