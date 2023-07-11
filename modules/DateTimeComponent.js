import { DateTime } from 'luxon';

export class DateTimeComponent {
  constructor() {
    // ...
  }

  getCurrentDateTime() {
    const now = DateTime.local();
    return now.toFormat('MMMM dd, yyyy, HH:mm:ss');
  }

  render() {
    const formattedDateTime = this.getCurrentDateTime();

    const element = document.createElement('div');
    element.innerHTML = `
      <p>Current Date and Time: ${formattedDateTime}</p>
    `;

    return element;
  }
}
