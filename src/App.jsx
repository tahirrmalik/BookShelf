import { useState } from 'react';
import Header from './Header/Header';
import BookForm from './BookForm/BookForm';
import ShelfStats from './ShelfStats/ShelfStats';
import BookList from './BookList/BookList';
import './index.css';

function App() {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('All');

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleToggleFinish = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, isFinished: !book.isFinished } : book
      )
    );
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="app-container">
      <Header />
      <BookForm onAddBook={handleAddBook} />
      <ShelfStats books={books} />
      <BookList
        books={books}
        filter={filter}
        setFilter={setFilter}
        onToggleFinish={handleToggleFinish}
        onDeleteBook={handleDeleteBook}
      />
    </div>
  );
}

export default App;