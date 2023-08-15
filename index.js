let bookForm = document.getElementById("book-form");
let bookTable = document.createElement("table");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let myLibrary = [
  new Book("A Tale of Two Cities", "Charles Dickens", "368", "No"),
  new Book(
    "Harry Potter and the Philosopher's Stone",
    "J. K. Rowling",
    "223",
    "No"
  ),
  new Book("And Then There Were None", "Agatha Christie", "272", "No"),
];

function refreshLibrary() {
  bookTable.innerHTML = "";
  bookTable.innerHTML =
    "<thead><th>Title</th><th>Author</th><th>Pages</th><th>Read</th><th>Remove</th></thead>";
  for (let i = 0; i < myLibrary.length; i++) {
    const newRow = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor = document.createElement("td");
    const tdPages = document.createElement("td");
    const tdRead = document.createElement("td");
    const tdRemove = document.createElement("td");
    tdTitle.textContent = myLibrary[i].title;
    tdAuthor.textContent = myLibrary[i].author;
    tdPages.textContent = myLibrary[i].pages;
    tdRead.textContent = myLibrary[i].read;
    tdRemove.dataset.index = i;
    tdRemove.innerHTML = '<button class="remove-button">X</button>';
    newRow.appendChild(tdTitle);
    newRow.appendChild(tdAuthor);
    newRow.appendChild(tdPages);
    newRow.appendChild(tdRead);
    newRow.appendChild(tdRemove);
    bookTable.appendChild(newRow);
  }

  let removeButtons = document.querySelectorAll(".remove-button");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", function () {
      let index = parseInt(this.dataset.index);
      myLibrary.splice(index, 1);
      refreshLibrary();
    });
  }
}

const target = document.getElementById("target");
target.appendChild(bookTable);

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  refreshLibrary();
});

document.addEventListener("DOMContentLoaded", function () {
  refreshLibrary();
});
