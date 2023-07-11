import { BookCollection } from './modules/bookCollection.js';

const bookCollection = new BookCollection();


const addBookForm = document.getElementById('add-book-form');
addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value;
  const author = authorInput.value;

  bookCollection.addBook(title, author);

  titleInput.value = '';
  authorInput.value = '';
});

const bookCollectionLink = document.getElementById('all-books-link');
const addLink = document.getElementById('add-book-link');
const contact = document.getElementById('contact');
const bookContainer = document.getElementById('all-books-container');
const contactContainer = document.getElementById('contact');
const AddForm = document.getElementById('add-book-container')
AddForm.style.display = 'none';


bookCollectionLink.addEventListener('click', function() {


})
bookCollection.loadFromLocalStorage();
