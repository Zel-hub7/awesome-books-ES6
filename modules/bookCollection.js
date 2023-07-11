import { Book } from './book.js';

export class BookCollection {
  constructor() {
    this.books = [];
  }

  addBook = (title, author) => {
    const book = new Book(title, author);
    this.books.push(book);
    this.renderBooks();
    this.saveToLocalStorage();
  };

  removeBook = (title) => {
    this.books = this.books.filter((book) => book.title !== title);
    this.renderBooks();
    this.saveToLocalStorage();
  };

  renderBooks = () => {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = '';
    this.books.forEach((book, index) => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book-item');
      if (index % 2 === 0) {
        bookElement.classList.add('even');
      } else {
        bookElement.classList.add('odd');
      }
      const titleElement = document.createElement('p');
      titleElement.textContent = book.getInfo();

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeBook(book.title);
      });

      bookElement.appendChild(titleElement);
      bookElement.appendChild(removeButton);

      booksContainer.appendChild(bookElement);
    });
  };

  saveToLocalStorage = () => {
    localStorage.setItem('booksCollection', JSON.stringify(this.books));
  };
}
