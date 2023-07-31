import pool from '../../db.js';
import Book from '../entity/Book.js';

class BookRepository {
  async getAllBooks() {


    const creatBooks = `INSERT INTO books
    (
                title,
                writer,
                cover_image,
                point,
                tag
    )
    VALUES
    (
                'Book 1',
                'Author 1',
                'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg',
                100,
                'fiction'
    )
    ,
    (
                'Book 2',
                'Author 2',
                'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg',
                150,
                'non-fiction'
    )
    ,
    (
                'Book 3',
                'Author 3',
                'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg',
                120,
                'science'
    )
    ,
    (
                'Book 4',
                'Author 4',
                'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg',
                80,
                'essay'
    )`
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
          row.tags
        )
    );
  }
}

export default new BookRepository();
