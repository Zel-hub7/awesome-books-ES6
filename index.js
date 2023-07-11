import { BookCollection } from './modules/bookCollection.js';
import { initializeLinks } from './modules/linkHandler.js';
import { initializeForm } from './modules/form.js';



let DateTime = luxon.DateTime;
// Output: 2023-06-19T09:00:00.882+05:30 
console.log(DateTime.now().toString());
const dateContainer = document.getElementById('datetime-container');
let dateContent  = document.createElement('p');
dateContent.textContent = `${DateTime.now().toLocaleString(DateTime.DATETIME_MED)}`;
dateContainer.appendChild(dateContent);


const bookCollection = new BookCollection();


initializeForm(bookCollection);
bookCollection.loadFromLocalStorage();
initializeLinks();

