import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const editBookById = async (id, newTitle, newPage) => {
    const response = await axios.put("http://localhost:3001/books/" + id, {
      title: newTitle,
      page: newPage,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    const response = await axios.delete(
      "http://localhost:3001/books/" + id,
      {}
    );
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title, page) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
      page,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById, // deleteBookById === deleteBookById;
    editBookById,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
