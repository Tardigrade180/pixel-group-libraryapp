import React, { useState } from 'react';
import axios from 'axios';

const BookForm = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book ? book.title : '');
  const [author, setAuthor] = useState(book ? book.author : '');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = {
      title,
      author,
    };

    if (book) {
      // Update existing book
      axios
        .put(`/api/books/${book.id}`, updatedBook)
        .then((response) => {
          onSubmit(response.data);
        })
        .catch((error) => {
          console.error('Error updating book:', error);
        });
    } else {
      // Add new book
      axios
        .post('/api/books', updatedBook)
        .then((response) => {
          onSubmit(response.data);
        })
        .catch((error) => {
          console.error('Error adding book:', error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Title"
      />
      <input
        type="text"
        value={author}
        onChange={handleAuthorChange}
        placeholder="Author"
      />
      <button type="submit">{book ? 'Update Book' : 'Add Book'}</button>
      </form>
  );
};

export default BookForm;