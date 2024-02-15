
let bookname = document.querySelector('.book');
let printbook = document.querySelector('.print');
const myLibrary = [ "Happy holids",  "Happylids","the kie runner", "oppp"]
 
function Book() {

}

function addBookToLibrary() {
  // do stuff here
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
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values entered by the user from the form fields
  const bookName = document.getElementById('bookname').value;
  const bookAuthor = document.getElementById('bookauthor').value;
  const genre = document.getElementById('genre').value;
  const read = document.getElementById('read').checked ? 'Yes' : 'No';

  const submitbook = document.createElement('div');
  submitbook.classList.add('submission');

  submitbook.innerHTML = `
  <p>Book Name: ${bookName}</p>
  <p>Book Author: ${bookAuthor}</p>
  <p>Genre: ${genre}</p>
  <p>Read: ${read}</p>
`;

});

Book();
print();