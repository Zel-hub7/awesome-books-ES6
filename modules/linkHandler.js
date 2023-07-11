const initializeLinks = () => {
  // Add event listeners to the links
  const allBooksLink = document.getElementById('all-books-link');
  const addBookLink = document.getElementById('add-book-link');
  const contactLink = document.getElementById('contact');
  const allBooksContainer = document.getElementById('all-books-container');
  const addBookContainer = document.getElementById('add-book-container');
  const about = document.getElementById('about');

  about.style.display = 'none';
  addBookContainer.style.display = 'none';
  allBooksLink.addEventListener('click', () => {
    allBooksContainer.style.display = 'block'; // Show all books container
    addBookContainer.style.display = 'none'; // Hide add book container
    about.style.display = 'none';
  });

  addBookLink.addEventListener('click', () => {
    allBooksContainer.style.display = 'none'; // Hide all books container
    addBookContainer.style.display = 'block'; // Show add book container
    about.style.display = 'none';
  });
  contactLink.addEventListener('click', () => {
    about.style.display = 'block';
    allBooksContainer.style.display = 'none';
    addBookContainer.style.display = 'none';
  });
};
export default initializeLinks;