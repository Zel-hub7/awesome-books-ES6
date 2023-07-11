export const initializeForm = (bookCollection)=> {
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
}