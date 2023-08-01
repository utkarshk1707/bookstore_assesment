import React from 'react';
import { BookCardProps } from '../types/bookList';

const BookCard: React.FC<BookCardProps> = ({ book }) => {

    return (
        <div className="flex flex-col items-center max-w-sm bg-white">
            <img className="w-187 h-187 text-center" src={book.coverImage} alt={book.title} />
            <div className="px-2 py-4 w-full">
                <div className="text-xl text-left mb-2">{book.title || ''}</div>
                <div className="flex flex-wrap w-full justify-between text-bold">
                    <div className="text-14 text-customRed"> {book?.discount ? `${book?.discount}%` : ''}</div>
                    <div className="text-16">{`$${book?.price?.toLocaleString() || ''}`}</div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;