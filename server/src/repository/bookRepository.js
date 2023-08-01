import pool from '../../db.js';
import Book from '../entity/Book.js';

class BookRepository {
  async getAllBooks() {

    const query = 'SELECT * FROM books';
    const { rows } = await pool.query(query);

    return rows.map(
      (row) =>
        new Book(
          row.id,
          row.title,
          row.author,
          row.cover_image_url,
          row.price,
          row.tags,
          row.discount
        )
    );
  }
}

export default new BookRepository();
