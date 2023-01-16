import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Book } from "./book/Book";
import { fetchBooksThunk } from "../../store/book-slice";
import "./Books.scss";

export function Books() {
  const filteredBooks = useAppSelector((state) => state.books.books);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBooksThunk());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="books-list">
        {filteredBooks.map((book) => (
          <Book
            key={book.isbn13}
            image={book.image}
            title={book.title}
            subtitle={book.subtitle}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
}
