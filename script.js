
let bookname = document.querySelector('.book');
let printbook = document.querySelector('.print');
const myLibrary = [];
 

function addBookToLibrary() {
  
}

function Book(bookname,bookAuthor,genre,read) {

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
  const submitbook = document.createElement('div');
  submitbook.classList.add('submission');
 
  submitbook.innerHTML = `
  <p>Book Name: ${bookName}</p>
  <p>Book Author: ${bookAuthor}</p>
  <p>Genre: ${genre}</p>
  <p>Read: ${read}</p>
`;
 
printDiv.appendChild(submitbook);

});




Book();
print();