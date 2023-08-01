import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import { Book } from '../types/books';


const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Book[]>('/books');
        if(response.data) setBooks(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-2 align-center lg:grid-cols-10 gap-2">
    {books?.length ? books.map((book) => (
      <BookCard key={book.title} book={book} />
    )): <></>}
  </div>
  );
};

export default BookList;

// constant books data

// [{
//   tags: 'string',
//       title: 'string',
//       description: 'string',
//       discountRate: 10,
//       coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg',
//       price: 10000,
// }, {
//   tags: 'string',
//       title: 'string',
//       description: 'string',
//       discountRate: 10,
//       coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg',
//       price: 10,
// },
// {
//   tags: 'string',
//       title: 'string',
//       description: 'string',
//       discountRate: 10,
//       coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg',
//       price: 10,
// }]
