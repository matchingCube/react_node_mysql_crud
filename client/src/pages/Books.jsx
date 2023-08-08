import React, { useEffect, useState } from "react";
import axios from "axios";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Book Shop</h1>
      <div className="books">
        {books.map((book, idx) => (
          <div className="book" key={`book_${idx}`}>
            {book.cover && <img className="bookImg" src={book.cover} alt={book.title} />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
