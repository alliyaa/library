
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
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book'); //add this class to bookDiv so its easier to target in css

  bookDiv.innerHTML = `
    <h4>Book Name: ${book.title}</h4>
    <p>Author: ${book.author}</p>
    <p>Genre: ${book.genre}</p>
    <p>Read: ${book.read}</p>
  `;

  printDiv.appendChild(bookDiv);
}



Book();
print();