import { DateTime } from './Luxon.js';

const timeDate = document.getElementById('date');

const dateAndTime = () => {
  setInterval(() => {
    const date = `${DateTime.now().toLocaleString(DateTime.DATETIME_MED)}`;
    timeDate.innerHTML = date;
  }, 0);
}
dateAndTime();

export default dateAndTime;