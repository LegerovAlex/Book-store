import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  URL_API_BOOK,
  URL_SEARCH_API__BOOK,
  URL_ID_API_BOOK,
} from "../variables/api";
import { IBook } from "../components/books/book/Book";
import { IBookPage } from "../components/bookPage/BookPage";
interface IinitialBooksState {
  books: IBook[];
  book: IBookPage;
  loading: boolean;
  error: null | string;
  total: number;
}

const initialBooksState: IinitialBooksState = {
  books: [],
  book: {},
  loading: false,
  error: null,
  total: 0,
};

type BooksThunk = {
  error: string;
  books: IBook[];
  total: number;
};

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
      console.log(response);
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: initialBooksState,
  reducers: {},
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
        state.total = action.payload.total;
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
      (state, action: PayloadAction<object>) => {
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
