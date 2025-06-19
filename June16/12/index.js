const library = {
    books: [
        { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
    ],

    addBook(book) {
        const { title, author, year } = book;

        if (typeof title !== "string" || typeof author !== "string" || typeof year !== "number") {
            console.log("Book information is incomplete or invalid");
            return;
        }

        this.books.push(book);
        console.log("Added sucessfully.");

    },

    findBookByTitle(title) {
        return this.books.find(book => book.title === title);
    },

    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title)
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log("Removed Sucessfully");
        } else {
            console.log("Book not found.");

        }
    }
}



library.addBook({ author: "George Orwell", year: 1949 });

library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

console.log("Total Books:", library.books.length);
console.log("All Books:", library.books);
