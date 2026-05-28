let books = [];

  function addBook() {
            const bookName = document.getElementById('bookName').value;
            const authorName = document.getElementById('authorName').value;
            const bookDescription = document.getElementById('bookDescription').value;
            const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
            if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
                const book = {
                    name: bookName,
                    authorName: authorName,
                    bookDescription: bookDescription,
                    pagesNumber: pagesNumber
                };
                books.push(book);
                showbooks();
                clearInputs();
            } else {
                alert('Please fill in all fields correctly.');
            }
        }

//         The expression !isNaN(pagesNumber) is used to check whether the value of pagesNumber is a valid number or not.

// isNaN(value) returns true if value is Not-a-Number.
// By adding the ! (logical NOT) operator, !isNaN(pagesNumber) returns true if pagesNumber is a number.
// So, !isNaN(pagesNumber) checks if pagesNumber is a valid numeric value (not NaN).
//After adding the book books.push(book);, the showbooks() function is called to update the display with the newly added book details. Additionally, the clearInputs() function is invoked to reset all input fields, providing a clean interface for the user to add another book without manual clearing of previous inputs.

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

//A heading displaying the book number <h1>book Number: ${index + 1}</h1>.
//Paragraphs <p> containing details about the book such as name, author name, book description, and the number of pages.
//One buttons for editing <button onclick="editbook(${index})">Edit</button> a specific book. This button is configured to call the editbook() function, passing the index of the book as a parameter.
//The join('') method is employed to concatenate all the HTML elements generated for each book into a single string. This string representation of HTML elements allows the content to be inserted as a single block of HTML.

function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1); // Remove old entry
    showbooks(); // Refresh list
  }

//   editbook function allows users to edit a book's details by pre-filling the form with its existing data.
// const book = books[index]; Fetches the book from the books array using the given index.
// Populate Form Fields:
// Sets the book's name in the bookName input field.
// Sets the author's name in the authorName input field.
// Sets the book’s description in the bookDescription input field.
// Sets the number of pages in the pagesNumber input field.
// books.splice(index, 1); Deletes the selected book from the array using splice(index, 1) to prevent duplicate entries when saving changes.
// Calls showbooks() to update the book list and reflect changes.

//Create a clearInputs function to clear the book details in the management system. For this include given code in the book_system.js file after the previous code.
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}