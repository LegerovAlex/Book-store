import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "../../hooks/debounce";
import { useAppDispatch } from "../../store/store";
import { fetchBooksSearchThunk, fetchBooksThunk } from "../../store/book-slice";

import "./Search.scss";

export function Search() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const debounce = useDebounce(value);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (value === "") {
      dispatch(fetchBooksThunk());
      return;
    }
    if (value.length >= 3) {
      dispatch(fetchBooksSearchThunk(value));
    }
  }, [debounce, dispatch, value]);
  return (
    <div className="search">
      <form>
        <input placeholder={"Search"} value={value} onChange={changeHandler} />
      </form>
    </div>
  );
}
