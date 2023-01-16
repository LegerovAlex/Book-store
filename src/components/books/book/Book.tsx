import "./Book.scss";

interface IBook {
  title: string;
  subtitle: string;
  isbn13?: string;
  price: string;
  image: string;
  url?: string;
}

export type { IBook };

export function Book({ title, subtitle, isbn13, price, image }: IBook) {
  return (
    <div className="book">
      <div className="book__img">
        <img src={image} alt="#" />
      </div>
      <p className="book__title">{title}</p>
      <div className="book__subtitle">{subtitle}</div>
      <p className="book__price">{price}</p>
    </div>
  );
}
