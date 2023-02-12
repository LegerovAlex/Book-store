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
