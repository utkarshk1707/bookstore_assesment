import React from 'react';
import 'tailwindcss/tailwind.css';

import BookList from './components/BookList';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Book Collection</h1>
      <BookList />
    </div>
  );
}

export default App;
