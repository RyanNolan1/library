let bookForm = document.getElementById("book-form");
let bookTable = document.createElement("table");

function Book(title, author, pages, read, select) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.select = select;
}

let myLibrary = [
  new Book("A Tale of Two Cities", "Charles Dickens", "368", "No", false),
  new Book(
    "Harry Potter and the Philosopher's Stone",
    "J. K. Rowling",
    "223",
    "No",
    false
  ),
  new Book("And Then There Were None", "Agatha Christie", "272", "No", false),
];

function refreshLibrary() {
  bookTable.innerHTML =
    "<thead><th>Title</th><th>Author</th><th>Pages</th><th>Read</th></thead>";
  for (let i = 0; i < myLibrary.length; i++) {
    const newRow = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor = document.createElement("td");
    const tdPages = document.createElement("td");
    const tdRead = document.createElement("td");
    const tdRemove = document.createElement("td");
    const checkBox = document.createElement("input");
    tdTitle.textContent = myLibrary[i].title;
    tdAuthor.textContent = myLibrary[i].author;
    tdPages.textContent = myLibrary[i].pages;
    tdRead.textContent = myLibrary[i].read;
    checkBox.type = "checkbox";
    newRow.appendChild(tdTitle);
    newRow.appendChild(tdAuthor);
    newRow.appendChild(tdPages);
    newRow.appendChild(tdRead);
    newRow.appendChild(tdRemove);
    tdRemove.appendChild(checkBox);
    bookTable.appendChild(newRow);
  }
}

function deleteBook() {
//   var rows = bookTable.rows.length;
//   for (var i = rows - 1; i > 0; i--) {
//     if (bookTable.rows[i].cells[4].children[0].checked) {
//         bookTable.deleteRow(i);
//     }
//   }
}

const target = document.getElementById("target");
target.appendChild(bookTable);

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;
  let select = false

  const newBook = new Book(title, author, pages, read, select);
  myLibrary.push(newBook);
  console.log(myLibrary)
  refreshLibrary();
});

document.addEventListener("DOMContentLoaded", function () {
  refreshLibrary();
});
