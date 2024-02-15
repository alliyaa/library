
let bookname = document.querySelector('.book');
let printbook = document.querySelector('.print');
const myLibrary = [];
 

function addBookToLibrary() {
  
}

function Book(title, author, genre, read) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.read = read;
}

function print()
{
   
    myLibrary.forEach(element => 
    {

    let bookdiv=document.createElement('div')
    let bookTitle = document.createElement('h4');
    bookTitle.textContent += element
    bookdiv.appendChild(bookTitle)
    printbook.appendChild(bookdiv);
   });
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
 
printDiv.appendChild(submitbook);

});

function displayBook(book) {
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book');

  bookDiv.innerHTML = `
    <h4>Book Name: ${book.title}</h4>
    <p>Author: ${book.author}</p>
    <p>Genre: ${book.genre}</p>
    <p>Read: ${book.read}</p>
  `;

  printDiv.appendChild(bookDiv);
}

// Function to initially display all books in the library
function displayAllBooks() {
  myLibrary.forEach(book => {
    displayBook(book);
  });
}



Book();
print();