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
