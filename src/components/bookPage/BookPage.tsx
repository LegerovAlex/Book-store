import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Link, useParams } from "react-router-dom";
import { addLike, fetchBookThunk } from "../../store/book-slice";
import "./BookPage.scss";
import { IconBack } from "../icons/Icon/IconBack";
import { addItem } from "../../store/book-slice";

interface IBookPage {
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10?: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url?: string;
  quantity: number;
  liked: boolean;
}

export type { IBookPage };

export function BookPage() {
  const { isbn13 } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookThunk(isbn13));
  }, [dispatch, isbn13]);

  const { book, error, loading } = useAppSelector((state) => state.books);

  return (
    <div className="page container">
      {error && <p>something wrong ....</p>}
      <Link to={`/`}>
        <IconBack />
      </Link>
      {!loading ? (
        <>
          <div className="page__title">{book.title}</div>
          <div className="page-features">
            <div className="page-features-img">
              <div className="page-features-fav">
                <p
                  className={
                    book.liked
                      ? "page-box__like page-box__like_liked"
                      : "page-box__like"
                  }
                  onClick={() => dispatch(addLike(book))}
                >
                  ❤
                </p>
              </div>
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
              <button
                onClick={() => dispatch(addItem(book))}
                className="page-box__button"
              >
                add to cart
              </button>
            </div>
          </div>
          <div className="page__description">{book.desc}</div>
        </>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}
