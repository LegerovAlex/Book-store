import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useSearchParams } from "react-router-dom";
import { Book } from "./book/Book";
import { fetchBooksThunk } from "../../store/thunk/fetchBooksThunk";
import "./Books.scss";
import { Title } from "../title/Title";
import { Pagination } from "../pagination/Pagination";

export function Books() {
  // const [params] = useSearchParams();
  // const [currentPage, setCurrentPage] = useState(
  //   Number(params.get("page")) || 1
  // );
  // const query = 20;
  // const page = currentPage;

  // const countOfPages = Math.ceil(total / query);
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
