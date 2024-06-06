import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookCreate() {
  const [title, setTitle] = useState("");
  const [page, setPage] = useState("");
  const { createBook } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleChangePage = (event) => {
    setPage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title, page);
    setTitle("");
    setPage("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          value={title}
          onChange={handleChange}
          style={{ width: "50%" }}
        />
        <label>Page</label>
        <input
          className="input"
          value={page}
          onChange={handleChangePage}
          style={{ width: "50%" }}
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
