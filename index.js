function Book(title, author, pages, read) {
  this.title;
  this.author;
  this.pages;
  this.read;
  this.info = function () {
    return `${title}, ${author}, ${pages}, ${read}`;
  };
}

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R Tolkien",
  "295 pages",
  "not read yet"
);
theHobbit.info();
console.log(theHobbit.info());

let myLibary = [];

function Book() {

}

function addBookToLibary() {
    
}