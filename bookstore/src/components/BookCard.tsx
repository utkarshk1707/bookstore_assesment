import React from 'react';
import { BookCardProps } from '../types/bookList';

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="card bg-white rounded-lg shadow-md p-4">
    <img src={book.coverImage} alt={book.title} className="card-image w-full object-contain rounded-md mb-4" />
    <div className="card-content">
      <h2 className="card-title text-xl font-semibold mb-2">{book.title}</h2>
      <p className="card-description text-gray-600 mb-4">{book.description}</p>
      <p className="card-discount text-green-600 font-semibold mb-2">Discount: {book.discountRate}%</p>
      <p className="card-price text-blue-600 font-semibold">Price: ${book.price}</p>
    </div>
  </div>
  );
};

export default BookCard;