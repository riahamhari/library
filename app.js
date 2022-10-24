// buttons
const addBtn = document.querySelector('#addBtn');
const submitBtn = document.querySelector('#submitBtn');



let colIndex = 0;



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
    removeBtn.classList.add('btn', 'btn-light', 'removeButton')


    title.textContent = `${book.title}`
    author.textContent = `${book.author}`
    pages.textContent = `${book.pages}`
    removeBtn.textContent = "Remove"
    removeBtn.addEventListener('click', () => removeBtn.parentElement.parentElement.parentElement.parentElement.remove())
    readBtn.addEventListener('click', () => {
        if (readBtn.textContent === 'Not Read') {
            readBtn.textContent = 'Read';
            readBtn.classList.remove('btn-danger')
            readBtn.classList.add('btn-success')
        } else {
            readBtn.textContent = 'Not Read'
            readBtn.classList.remove('btn-success')
            readBtn.classList.add('btn-danger')
        }
    })



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


// constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

}

function resetBookGrid() {
    booksContainer.innerHTML = ''
    createBookCard(myLibrary)

}

// function toggleRead() {
//     if (readBtn.textContent === 'Not Read') {
//         readBtn.textContent = 'Read';
//         readBtn.classList.remove('btn-danger')
//         readBtn.classList.add('btn-success')
//     } else {
//         readBtn.textContent = 'Not Read'
//         readBtn.classList.remove('btn-success')
//         readBtn.classList.add('btn-danger')
//     }
// }


function addBookToLibrary() {

    const newBook = getBookFromInput();
    myLibrary.push(newBook)
    createBookCard(newBook)
}



const getBookFromInput = () => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#isRead').checked;
    return new Book(title, author, pages, read)
}


const clearInput = () => {
    title.value = ''
    author.value = ''
    pages.value = ''
    checkbox.value = ''
}

// Event Listeners
addBtn.addEventListener('click', clearInput)
submitBtn.addEventListener('click', addBookToLibrary)




