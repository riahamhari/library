let myLibrary = []






class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    console.log(this)
}


Book.prototype.info = function () {
    return `${title}by${author}, ${pages}, ${read}`
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayBooks(library) {
    for (let book of library) {

    }


}