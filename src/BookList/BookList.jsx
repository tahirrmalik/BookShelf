import React from 'react';
import BookCard from '../BookCard/BookCard';
import './BookList.css';

const BookList = ({ books, filter, setFilter, onToggleFinish, onDeleteBook }) => {
  const filteredBooks = books.filter((book) => {
    if (filter === 'Finished') return book.isFinished === true;
    if (filter === 'Reading') return book.isFinished === false;
    return true;
  });

  return (
    <div className='list-body'>
      <div className="filter-buttons">
        <button 
          className={`btn-filter ${filter === 'All' ? 'active' : ''}`}
          onClick={() => setFilter('All')}
        >
          All
        </button>
        <button 
          className={`btn-filter ${filter === 'Reading' ? 'active' : ''}`}
          onClick={() => setFilter('Reading')}
        >
          Reading
        </button>
        <button 
          className={`btn-filter ${filter === 'Finished' ? 'active' : ''}`}
          onClick={() => setFilter('Finished')}
        >
          Finished
        </button>
      </div>

      {filteredBooks.length === 0 ? (
        <p className="empty-msg">No books found in this view.</p>
      ) : (
        <div className="book-list">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onToggleFinish={onToggleFinish}
              onDeleteBook={onDeleteBook}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;