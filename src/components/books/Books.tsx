import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Book } from "./book/Book";
import { fetchBooksThunk } from "../../store/book-slice";
import "./Books.scss";
import { Title } from "../title/Title";

export function Books() {
  const { books, error, loading } = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBooksThunk());
  }, [dispatch]);
  return (
    <div className="container books">
      <Title name={"New Releases Books"} />
      {loading && <p>Loading....</p>}
      <div className="books-list">
        {books &&
          books.map((book) => (
            <Book
              key={book.isbn13}
              image={book.image}
              title={book.title}
              subtitle={book.subtitle}
              price={book.price}
            />
          ))}
        {error && <p>Some err: {error}</p>}
      </div>
    </div>
  );
}
