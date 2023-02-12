import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL_ID_API_BOOK } from "../../variables/api";

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
