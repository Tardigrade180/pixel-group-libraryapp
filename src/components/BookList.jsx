import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the API
    axios.get('/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {books.map(book => (
        <div key={book.id} className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold">{book.title}</h3>
          <p className="text-gray-600">{book.author}</p>
          {/* Add more book details here */}
        </div>
      ))}
    </div>
  );
};

export default BookList;
