import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL_API_BOOK } from "../../variables/api";

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
