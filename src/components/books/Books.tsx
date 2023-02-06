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
      {error && <p>Some err: {error}</p>}
      {!loading ? (
        <>
          <Title name={"New Releases Books"} />
          <div className="books-list">
            {books &&
              books.map((book) => (
                <Book
                  key={book.isbn13}
                  image={book.image}
                  title={book.title}
                  subtitle={book.subtitle}
                  price={book.price}
                  isbn13={book.isbn13}
                  quantity={book.quantity}
                  liked={book.liked}
                />
              ))}
          </div>
        </>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}
