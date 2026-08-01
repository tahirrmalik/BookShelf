import React from 'react';
import './ShelfStats.css';

const ShelfStats = ({ books }) => {
  const totalBooks = books.length;
  const finishedBooks = books.filter((b) => b.isFinished).length;

  let totalPagesRead = 0;
  books.forEach((b) => {
    if (b.isFinished) {
      totalPagesRead += b.pages;
    }
  });

  return (
    <div className="stats-body">
      <div className="stats-bar">
        <span><strong>{totalBooks}</strong> Books</span>
      <span><strong>{finishedBooks}</strong> Finished</span>
      <span><strong>{totalPagesRead}</strong> Pages Read</span>
      </div>
    </div>
  );
};

export default ShelfStats;