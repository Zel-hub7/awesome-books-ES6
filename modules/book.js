export class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  
    getInfo() {
      return `"${this.title}" by ${this.author}`;
    }
  }
  