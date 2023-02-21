import { useAppDispatch } from "../../../store/store";
import { logOut } from "../../../store/slices/userslice/user-slice";
import { Link } from "react-router-dom";
import { IconBack } from "../../icons/Icon/IconBack";
import "./LogOut.scss";

export function LogOut() {
  const dispatch = useAppDispatch();
  let name = localStorage.getItem("name")!.replace(/"/g, "");
  const handleLogOut = (event: any) => {
    event.preventDefault();
    dispatch(logOut());
  };
  return (
    <div className="container logout">
      <Link to={`/`}>
        <IconBack />
      </Link>
      <h1 className="logout__name"> Glad to see you again {name}</h1>
      <button className="logout__btn" onClick={(event) => handleLogOut(event)}>
        LogOut
      </button>
    </div>
  );
}
