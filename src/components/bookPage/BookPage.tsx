import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Link, useParams } from "react-router-dom";
import { fetchBookThunk } from "../../store/book-slice";
import "./BookPage.scss";

interface IBookPage {
  title?: string;
  subtitle?: string;
  authors?: string;
  publisher?: string;
  isbn10?: string;
  isbn13?: string;
  pages?: string;
  year?: string;
  rating?: string;
  desc?: string;
  price?: string;
  image?: string;
  url?: string;
}

export type { IBookPage };

export function BookPage() {
  const { isbn13 } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookThunk(isbn13));
  }, [dispatch, isbn13]);

  const book = useAppSelector((state) => state.books.book);
  const { error, loading } = useAppSelector((state) => state.books);

  return (
    <div className="page container">
      {loading && <p>Loading....</p>}
      {error && <p>Some err: {error}</p>}
      <Link to={`/`}>
        <button className="back-button">Back to Store</button>
      </Link>
      <div className="page__title">{book.title}</div>
      <div className="page-features">
        <div className="page-features-img">
          <img src={book.image} alt="Book" />
        </div>
        <div className="page-box">
          <div className="page-box__price">{book.price}</div>
          <div className="page-box__info">
            <div>Authors: {book.authors}</div>
            <div>Publisher: {book.publisher}</div>
            <div>Pages: {book.pages}</div>
            <div>Year: {book.year}</div>
          </div>
          <button className="page-box__button">add to cart</button>
        </div>
      </div>
      <div className="page__description">{book.desc}</div>
    </div>
  );
}
