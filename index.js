// const theHobbit = new Book(
//   "The Hobbit",
//   "J.R.R Tolkien",
//   "295 pages",
//   "No"
// );
// theHobbit.info();

let myLibrary = [
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    pages: "368",
    read: "No",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    pages: "223",
    read: "No",
  },
  {
    title: "And Then There Were None",
    author: "Agatha Christie",
    pages: "272",
    read: "No",
  },
];

// function Book(title, author, pages, read) {
//     this.title;
//     this.author;
//     this.pages;
//     this.read;
//     this.info = function () {
//       return `${title}, ${author}, ${pages}, ${read}`;
//     };
//   }

const newTable = document.createElement("table");
newTable.innerHTML =
  "<thead><th>Title</th><th>Author</th><th>Pages</th><th>Read</th></thead>";
for (let i = 0; i < myLibrary.length; i++) {
  const newRow = document.createElement("tr");
  const tdTitle = document.createElement("td");
  const tdAuthor = document.createElement("td");
  const tdPages = document.createElement("td");
  const tdRead = document.createElement("td");
  tdTitle.textContent = myLibrary[i].title;
  tdAuthor.textContent = myLibrary[i].author;
  tdPages.textContent = myLibrary[i].pages;
  tdRead.textContent = myLibrary[i].read;
  newRow.appendChild(tdTitle);
  newRow.appendChild(tdAuthor);
  newRow.appendChild(tdPages);
  newRow.appendChild(tdRead);
  newTable.appendChild(newRow);
}

const target = document.getElementById("target");
target.appendChild(newTable);

function addBookToLibrary() {}

