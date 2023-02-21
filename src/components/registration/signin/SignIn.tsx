import { useState } from "react";
import { useAppDispatch } from "../../../store/store";
import { login } from "../../../store/slices/userslice/user-slice";
import { Link } from "react-router-dom";
import { IconBack } from "../../icons/Icon/IconBack";
import "./SignIn.scss";

export function SignIn() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);

  function handleFormSubmit(event: any) {
    event.preventDefault();

    if (!password || !email) {
      setFlag(true);
    }
    let pass = localStorage.getItem("password")!.replace(/"/g, "");
    let mail = localStorage.getItem("email")!.replace(/"/g, "");
    if (password !== pass || email !== mail) {
      setFlag(true);
    } else {
      dispatch(
        login({
          email: email,
          password: password,
          loggedIn: true,
        })
      );
    }
  }

  return (
    <div className="container registrate">
      <Link to={`/`}>
        <IconBack />
      </Link>
      <form onSubmit={handleFormSubmit} className="registrate-form">
        <div className="registrate-form__title">Sign In</div>
        {flag && (
          <div style={{ color: "blue", textAlign: "center" }}>
            Incorrect login or password.
          </div>
        )}
        <div className="registrate-form-input">
          <label>Email </label>
          <input
            type="Email"
            value={email}
            placeholder="Your email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="registrate-form-input">
          <label>Password </label>
          <input
            value={password}
            type="password"
            placeholder="Your password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <Link to={`/registration`}>
          <p className="registrate-form__text">Don't have an account?</p>
        </Link>
        <button type="submit" className="registrate-form-btn">
          Sign In
        </button>
      </form>
    </div>
  );
}
