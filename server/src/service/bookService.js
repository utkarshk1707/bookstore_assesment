import bookRepository from "../repository/BookRepository.js";

class BookService {
  async getAllBooks() {
    return bookRepository.getAllBooks();
  }
}

export default new BookService();
