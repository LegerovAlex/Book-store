import { ChangeEvent, useState } from "react";
import useDebounce from "../../hooks/debounce";
import { useAppDispatch } from "../../store/store";
import { fetchBooksThunk } from "../../store/thunk/fetchBooksThunk";
import { fetchBooksSearchThunk } from "../../store/thunk/fetchBooksSearchThunk";
import { IconSearch } from "../icons/Icon/IconSearch";
import "./Search.scss";

export function Search() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const debounce = useDebounce();
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    event.preventDefault();
    debounce(() => {
      if (value.length <= 1) {
        dispatch(fetchBooksThunk());
        return;
      }
      dispatch(fetchBooksSearchThunk(value));
    });
  };
  return (
    <div className="search">
      <form>
        <div className="search-items">
          <input
            placeholder={"Search"}
            value={value}
            onChange={changeHandler}
          />
          <IconSearch />
        </div>
      </form>
    </div>
  );
}
