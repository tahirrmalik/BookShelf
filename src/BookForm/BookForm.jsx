import React, { useState } from 'react';
import './BookForm.css';

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload

    // Basic validation check
    if (!title || !author || !pages || pages <= 0) {
      setError('Please fill in all fields correctly.');
      return;
    }

    // Pass new book object up to App component
    onAddBook({
      id: Date.now(),
      title: title,
      author: author,
      pages: Number(pages),
      isFinished: false
    });

    // Reset fields and clear error
    setError('');
    setTitle('');
    setAuthor('');
    setPages('');
  };

  return (
    <div className='form-body'>
      <div className="card">
        <h4>Add a book</h4>

        {error && <p className="error-text">{error}</p>}

        <form className="inputs" onSubmit={handleSubmit}>
          <div className="title">
            <label htmlFor="title">Title</label>
            <input 
              type="text" 
              name="title" 
              id="title" 
              placeholder='Book title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            /> 
          </div>

          <div className="author">
            <label htmlFor="author">Author</label>
            <input 
              type="text" 
              name="author" 
              id="author" 
              placeholder='Author name'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            /> 
          </div>

          <div className="pages">
            <label htmlFor="pages">Pages</label>
            <input 
              type="number" 
              name="pages" 
              id="pages" 
              placeholder='Pages'
              value={pages}
              onChange={(e) => setPages(e.target.value)}
            /> 
          </div>

          <button className='add-button' type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;