import { IBook } from "../../book/book";
import { IBookPage } from "../../bookPage/bookPage";

export type BooksThunk = {
  error: string;
  books: IBook[];
  total: number;
};
export interface IinitialBooksState {
  books: IBook[];
  busket: IBook[];
  book: Partial<IBookPage>;
  favourites: IBook[];
  loading: boolean;
  error: null | string;
  total: number;
}
