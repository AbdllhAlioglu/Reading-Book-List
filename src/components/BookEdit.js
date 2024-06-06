import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const [page, setPage] = useState(book.page);
  const { editBookById } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleChangePage = (event) => {
    setPage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title, page);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <label>Page</label>
      <input className="input" value={page} onChange={handleChangePage} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
