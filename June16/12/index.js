const library = {
    books: [
        { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
    ],


    addBook(book) {

        if (
            typeof book.title !== "string" ||
            typeof book.author !== "string" ||
            typeof book.year !== "number"
        ) {
            console.log("Book information is incomplete or invalid.");
            return;
        }


        if (this.findBookByTitle(book.title)) {
            console.log(`Book titled "${book.title}" already exists.`);
            return;
        }

        this.books.push(book);
        console.log(`Book titled "${book.title}" added successfully.`);
    },


    findBookByTitle(title) {
        return this.books.find(book => book.title === title);
    },


    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            const removed = this.books.splice(index, 1);
            console.log(`Removed: "${removed[0].title}"`);
        } else {
            console.log(`Book titled "${title}" not found.`);
        }
    }
};


library.addBook({ author: "George Orwell", year: 1949 });


console.log("Total books:", library.books.length);


library.addBook({ title: "1984", author: "George Orwell", year: 1949 });


console.log("Total books:", library.books.length);


library.removeBook("1984");


console.log("Total books:", library.books.length); 
