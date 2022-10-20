// buttons
const addBtn = document.querySelector('#addBtn');
const submitBtn = document.querySelector('#submitBtn');




const booksContainer = document.querySelector('.booksContainer')
const booksRow = document.querySelector('.row')


const author = document.querySelector('#author');
const title = document.querySelector('#title');
const pages = document.querySelector('#pages');
const checkbox = document.querySelector('#isRead');




let myLibrary = []


const createBookCard = (book) => {
    const col = document.createElement('div')
    const bookCard = document.createElement('div')
    const cardBody = document.createElement('div')
    const title = document.createElement('h5')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const btnGrid = document.createElement('div')
    const readBtn = document.createElement('a')
    const removeBtn = document.createElement('a')

    col.classList.add('col-sm-4')
    bookCard.classList.add('card')
    cardBody.classList.add('card-body', 'text-center')
    title.classList.add('card-title')
    author.classList.add('card-text')
    pages.classList.add('card-text')
    btnGrid.classList.add('d-grid', 'gap-2')
    readBtn.classList.add('btn', 'btn-primary')
    removeBtn.classList.add('btn', 'btn-light')

    title.textContent = `${book.title}`
    author.textContent = `${book.author}`
    pages.textContent = `${book.pages}`
    removeBtn.textContent = "Remove"

    if (checkbox.checked === true) {
        readBtn.textContent = 'Read';
        readBtn.classList.remove('btn-primary')
        readBtn.classList.add('btn-success')
    } else {
        readBtn.textContent = 'Not Read'
        readBtn.classList.remove('btn-primary')
        readBtn.classList.add('btn-danger')
    }

    booksRow.appendChild(col)
    col.appendChild(bookCard)
    bookCard.appendChild(cardBody)
    cardBody.appendChild(title)
    cardBody.appendChild(author)
    cardBody.appendChild(pages)
    cardBody.appendChild(btnGrid)
    btnGrid.appendChild(readBtn)
    btnGrid.appendChild(removeBtn)

}



class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

}



function addBookToLibrary(bookTitle) {
    myLibrary.push(bookTitle)
}

function displayBooks(library) {
    for (let book of library) {

    }


}