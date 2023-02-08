import "./Favourite.scss";
import { Link } from "react-router-dom";
import { IconBack } from "../icons/Icon/IconBack";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Title } from "../title/Title";
import { removeLike } from "../../store/book-slice";

export function Favourite() {
  const favourite = useAppSelector((state) => state.books.favourites);
  const dispatch = useAppDispatch();
  return (
    <div className="container favorites">
      <div>
        <Link to={`/`}>
          <IconBack />
        </Link>
      </div>
      <Title name={"Favorites"} />
      {favourite.length ? (
        <>
          {favourite &&
            favourite.map((book) => (
              <div className="favorites-list" key={book.isbn13}>
                <div className="favorites-list-inner">
                  <Link to={`/books/${book.isbn13}`}>
                    <div className="favorites-list-img">
                      <img src={book.image} alt="" />
                    </div>
                  </Link>
                  <div className="favorites-list-description">
                    <div className="favorites-list__name">{book.title}</div>
                    <div className="favorites-list__price">{book.price}</div>
                  </div>
                </div>
                <p
                  onClick={() => dispatch(removeLike({ isbn13: book.isbn13 }))}
                  className={"page-box__like_liked"}
                >
                  ❤
                </p>
              </div>
            ))}
        </>
      ) : (
        <div> You didn't add your favorite book </div>
      )}
    </div>
  );
}
