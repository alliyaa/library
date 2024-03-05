
const myLibrary = [];
 


function Book(title, author, genre, read) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.read = read;
}


const addbtn = document.getElementById('btn');
const formcontainer = document.querySelector('.formc');
addbtn.addEventListener('click', function()
{
formcontainer.style.display = 'block';
});

const form = document.getElementById('bookForm');
const printDiv = document.querySelector('.printd');

  
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const bookName = document.getElementById('bookname').value;
  const bookAuthor = document.getElementById('bookauthor').value;
  const genre = document.getElementById('genre').value;
  const read = document.getElementById('read').checked ? 'Yes' : 'No';

  const newBook = new Book(bookName, bookAuthor, genre, read);

  myLibrary.push(newBook);

  displayBook(newBook);


});

function displayBook(book) {
  // Create a new div element for each book
  const bookDiv = document.createElement('div');

  // Add the 'bookclass' class to the newly created div
  bookDiv.classList.add('bookclass');

  // Set the inner HTML of the div with book information
  bookDiv.innerHTML = `
    <h4> Name: ${book.title}</h4>
    <p>Author: ${book.author}</p>
    <p>Genre: ${book.genre}</p>
    <p>Read: ${book.read}</p>
    <button class='delb'>Delete</button>
    `;
  
    // Append the newly created div to the printDiv element
    printDiv.appendChild(bookDiv);
  }
  
  // Event delegation for delete button
  printDiv.addEventListener('click', function(event) {
    if (event.target.classList.contains('delb')) {
      // Remove the parent div of the delete button
      event.target.parentNode.remove();
    }
  });



Book();
