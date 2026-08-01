import React from 'react';
import './BookCard.css';

const BookCard = ({ book, onToggleFinish, onDeleteBook }) => {
  return (
    <div className={`book-card ${book.isFinished ? 'finished' : ''}`}>
      <div className="book-info">
        <input
          type="checkbox"
          checked={book.isFinished}
          onChange={() => onToggleFinish(book.id)}
        />
        <div>
          <h3 className="book-title">{book.title}</h3>
          <p className="book-details">
            {book.author} • {book.pages} pages
          </p>
        </div>
      </div>
      <button 
        onClick={() => onDeleteBook(book.id)} 
        className="btn-danger"
      >
        Remove
      </button>
    </div>
  );
};

export default BookCard;