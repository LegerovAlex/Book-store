import { Link } from "react-router-dom";
import { IBook } from "../../../interface/book/book";
import "./Book.scss";

export function Book({ title, subtitle, isbn13, price, image }: IBook) {
  return (
    <Link to={`/books/${isbn13}`}>
      <div className="book">
        <div className="book__img">
          <img src={image} alt="#" />
        </div>
        <p className="book__title">{title}</p>
        <div className="book__subtitle">{subtitle}</div>
        <p className="book__price">{price}</p>
      </div>
    </Link>
  );
}
