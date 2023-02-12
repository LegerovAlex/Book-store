import { useAppDispatch, useAppSelector } from "../../../store/store";
import { logOut } from "../../../store/slices/userslice/user-slice";
import { Link } from "react-router-dom";
import { IconBack } from "../../icons/Icon/IconBack";
import "./LogOut.scss";

export function LogOut() {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const handleLogOut = (event: any) => {
    event.preventDefault();
    dispatch(logOut());
  };
  return (
    <div className="container logout">
      <Link to={`/`}>
        <IconBack />
      </Link>
      <h1 className="logout__name">Welcome {user?.name}</h1>
      <button className="logout__btn" onClick={(event) => handleLogOut(event)}>
        LogOut
      </button>
    </div>
  );
}
