import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookPage } from "../../../interface/bookPage/bookPage";
import { fetchBookThunk } from "../../thunk/fetchBookThunk";
import { fetchBooksThunk } from "../../thunk/fetchBooksThunk";
import { fetchBooksSearchThunk } from "../../thunk/fetchBooksSearchThunk";
import { IinitialBooksState } from "../../../interface/store/slices/book-slice";
import { BooksThunk } from "../../../interface/store/slices/book-slice";

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
