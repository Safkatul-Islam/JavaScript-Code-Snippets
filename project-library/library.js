class Book {
    constructor(title, author, isbn, stock) {
        this.title = title;
        this.author = author;
        this.isbn = String(isbn);
        this.stock = stock;
    }
}

class User {
    constructor(name, id, borrowedBooks = []) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = borrowedBooks;
    }
}

class Library{
    constructor() {
        this.books = new Map();
        this.users = new Map();
    }
}