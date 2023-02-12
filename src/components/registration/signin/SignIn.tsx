import { useState } from "react";
import { useAppDispatch } from "../../../store/store";
import { login } from "../../../store/slices/userslice/user-slice";
import { Link } from "react-router-dom";
import { IconBack } from "../../icons/Icon/IconBack";
import "./SignIn.scss";

export function SignIn() {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(event: any) {
    event.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  }

  return (
    <div className="container registrate">
      <Link to={`/`}>
        <IconBack />
      </Link>
      <form onSubmit={handleFormSubmit} className="registrate-form">
        <div className="registrate-form__title">Sign In</div>
        <div className="registrate-form-input">
          <label>Name </label>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
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
        <button type="submit" className="registrate-form-btn">
          Sign In
        </button>
      </form>
    </div>
  );
}
