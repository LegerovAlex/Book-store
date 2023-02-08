import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  URL_API_BOOK,
  URL_SEARCH_API__BOOK,
  URL_ID_API_BOOK,
} from "../variables/api";
import { IBook } from "../components/books/book/Book";
import { IBookPage } from "../components/bookPage/BookPage";

export const fetchBooksThunk = createAsyncThunk(
  "books/fetchBooks",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(URL_API_BOOK);
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchBooksSearchThunk = createAsyncThunk(
  "books/SearchFetchBooks",
  async (value: string, thunkAPI) => {
    try {
      const response = await fetch(`${URL_SEARCH_API__BOOK}/${value}`);
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchBookThunk = createAsyncThunk(
  "book/fetchBook",
  async (isbn13: string | undefined, thunkAPI) => {
    try {
      const response = await fetch(`${URL_ID_API_BOOK}/${isbn13}`);
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

type BooksThunk = {
  error: string;
  books: IBook[];
  total: number;
};
interface IinitialBooksState {
  books: IBook[];
  busket: IBook[];
  book: Partial<IBookPage>;
  favourites: IBook[];
  loading: boolean;
  error: null | string;
  total: number;
}

const initialBooksState: IinitialBooksState = {
  books: [],
  busket: [],
  favourites: [],
  book: {},
  loading: false,
  error: null,
  total: 0,
};
const booksSlice = createSlice({
  name: "books",
  initialState: initialBooksState,
  reducers: {
    addItem: (state, action: PayloadAction<any>) => {
      const bookInBusket = state.busket.find(
        (book) => book.isbn13 === action.payload.isbn13
      );
      if (bookInBusket) {
        bookInBusket.quantity++;
      } else {
        state.busket.push({ ...action.payload, quantity: 1 });
      }
    },
    addLike: (state, action: PayloadAction<any>) => {
      const bookLiked = state.books.find(
        (book) => book.isbn13 === action.payload.isbn13
      );
      if (bookLiked) {
        bookLiked.liked = true;
        state.favourites.push({ ...action.payload });
      }
    },
    removeLike: (
      state,
      action: PayloadAction<{ isbn13: string | undefined }>
    ) => {
      const bookLiked = state.books.find(
        (book) => book.isbn13 === action.payload.isbn13
      );
      const removeItem = state.favourites.filter(
        (item) => item.isbn13 !== action.payload.isbn13
      );
      if (bookLiked) {
        bookLiked!.liked = false;
      }
      state.favourites = removeItem;
    },

    incrementQuantity: (
      state,
      action: PayloadAction<{ isbn13: string | undefined }>
    ) => {
      const book = state.busket.find(
        (book) => book.isbn13 === action.payload.isbn13
      );
      book!.quantity++;
    },
    decrementQuantity: (
      state,
      action: PayloadAction<{ isbn13: string | undefined }>
    ) => {
      const book = state.busket.find(
        (book) => book.isbn13 === action.payload.isbn13
      );
      if (book?.quantity === 1) {
        book.quantity = 1;
      } else {
        book!.quantity--;
      }
    },
    removeItem: (
      state,
      action: PayloadAction<{ isbn13: string | undefined }>
    ) => {
      const removeItem = state.busket.filter(
        (item) => item.isbn13 !== action.payload.isbn13
      );
      state.busket = removeItem;
    },
    deleteItem: (state) => {
      state.busket = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBooksThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchBooksThunk.fulfilled,
      (state, action: PayloadAction<BooksThunk>) => {
        state.loading = false;
        state.books = action.payload.books;
      }
    );
    builder.addCase(
      fetchBooksThunk.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload.message;
      }
    );
    builder.addCase(fetchBooksSearchThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchBooksSearchThunk.fulfilled,
      (state, action: PayloadAction<BooksThunk>) => {
        state.loading = false;
        state.books = action.payload.books;
        state.total = action.payload.total;
      }
    );
    builder.addCase(
      fetchBooksSearchThunk.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload.message;
      }
    );
    builder.addCase(fetchBookThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchBookThunk.fulfilled,
      (state, action: PayloadAction<IBookPage>) => {
        state.loading = false;
        state.book = action.payload;
      }
    );
    builder.addCase(
      fetchBookThunk.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload.message;
      }
    );
  },
});

export default booksSlice.reducer;

export const {
  addItem,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  addLike,
  deleteItem,
  removeLike,
} = booksSlice.actions;
