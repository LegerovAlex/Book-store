import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL_SEARCH_API__BOOK } from "../../variables/api";

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
