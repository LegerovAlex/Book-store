import { Link } from "react-router-dom";

import "./Book.scss";

interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url?: string;
  quantity: number;
  liked: boolean;
}

export type { IBook };

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
