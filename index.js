import { BookCollection } from './Modules/bookCollection.js';
import { initializeLinks } from './Modules/linkHandler.js';
import { initializeForm } from './Modules/form.js';
import { DateTimeComponent } from './Modules/DateTimeComponent.js';


const date = new DateTimeComponent();
const bookCollection = new BookCollection();


initializeForm(bookCollection);
bookCollection.loadFromLocalStorage();
initializeLinks();

