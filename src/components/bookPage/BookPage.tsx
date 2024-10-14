import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addLike, removeLike } from "../../store/slices/bookslice/book-slice";
import { fetchBookThunk } from "../../store/thunk/fetchBookThunk";
import { IconBack } from "../icons/Icon/IconBack";
import { addItem } from "../../store/slices/bookslice/book-slice";
import "./BookPage.scss";

export function BookPage() {
  const { isbn13 } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookThunk(isbn13));
  }, [dispatch, isbn13]);

  const { book, error, loading } = useAppSelector((state) => state.books);

  const currentBook = useAppSelector((state) =>
    state.books.books.find((book) => book.isbn13 === isbn13)
  );

  function toggleLike() {
    if (currentBook!.liked) {
      dispatch(removeLike({ isbn13 }));
    } else {
      dispatch(addLike(currentBook));
    }
  }
  const isLiked = useAppSelector((state) =>
    state.books.favourites.find((book) => book.isbn13 === isbn13)
  );

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
                    Boolean(isLiked)
                      ? "page-box__like page-box__like_liked"
                      : "page-box__like"
                  }
                  onClick={toggleLike}
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
                onClick={() => dispatch(addItem(currentBook))}
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
