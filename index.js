import { BookCollection } from './Modules/bookCollection.js';
import { initializeLinks } from './Modules/linkHandler.js';
import { initializeForm } from './Modules/form.js';

const bookCollection = new BookCollection();


initializeForm(bookCollection);
bookCollection.loadFromLocalStorage();

initializeLinks();

