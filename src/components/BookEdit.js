import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const [page, setPage] = useState(book.page);
  const [author, setAuthor] = useState(book.author);
  const { editBookById } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleChangePage = (event) => {
    setPage(event.target.value);
  };

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title, page, author);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <label>Page</label>
      <input className="input" value={page} onChange={handleChangePage} />
      <label>Author</label>
      <input className="input" value={author} onChange={handleChangeAuthor} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
