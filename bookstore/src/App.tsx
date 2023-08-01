import React from 'react';
import 'tailwindcss/tailwind.css';
import './index.css'; 


import BookList from './components/BookList';

const App =()=> {
  return (
    <div>
      <h1 className="my-2 text-center capitalize text-4xl">Books</h1>
      <BookList />
    </div>
  );
}

export default App;
