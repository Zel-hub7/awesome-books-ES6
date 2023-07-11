import { BookCollection } from './modules/bookCollection.js';
import { initializeLinks } from './modules/linkHandler.js';
import { initializeForm } from './modules/form.js';


let DateTime = luxon.DateTime;
const dateContainer = document.getElementById('datetime-container');
let dateContent  = document.createElement('p');
dateContent.textContent = `${DateTime.now().toLocaleString(DateTime.DATETIME_MED)}`;
dateContainer.appendChild(dateContent);
const bookCollection = new BookCollection();
initializeForm(bookCollection);
bookCollection.loadFromLocalStorage();
initializeLinks();