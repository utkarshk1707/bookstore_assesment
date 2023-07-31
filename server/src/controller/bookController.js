import BookService from '../service/bookService.js';

class BookController {
  async getAllBooks(req, res) {
    try {
      const books = await BookService.getAllBooks();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default new BookController();
