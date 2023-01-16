import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BASE_URL_API_BOOK } from "../variables/API/index";
import { IBook } from "../components/books/book/Book";

interface IinitialBooksState {
  books: IBook[];
  loading: boolean;
  total: number;
  error: null | string;
}

const initialBooksState: IinitialBooksState = {
  books: [],
  loading: false,
  total: 0,
  error: null,
};

type BooksThunk = {
  error: string;
  total: string;
  books: IBook[];
};

export const fetchBooksThunk = createAsyncThunk(
  "books",
  async (params, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL_API_BOOK}?${params}`);
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
      }
    );
    builder.addCase(
      fetchBooksThunk.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload.message;
      }
    );
  },
});

export default booksSlice.reducer;
