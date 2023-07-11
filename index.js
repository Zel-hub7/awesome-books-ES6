import { BookCollection } from './modules/bookCollection.js';
import { initializeLinks } from './modules/linkHandler.js';
import { initializeForm } from './modules/form.js';
import { DateTime } from './modules/Luxon.js';

const dateContainer = document.getElementById('datetime-container');
const dateContent = document.createElement('p');
dateContent.textContent = `${DateTime.now().toLocaleString(DateTime.DATETIME_MED)}`;
dateContainer.appendChild(dateContent);
const bookCollection = new BookCollection();
initializeForm(bookCollection);
bookCollection.loadFromLocalStorage();
initializeLinks();
