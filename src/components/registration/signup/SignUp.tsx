import { useState } from "react";
import { Link } from "react-router-dom";
import { IconBack } from "../../icons/Icon/IconBack";
import "../signin/SignIn";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [correct, setCorrect] = useState(false);
  const [home, setHome] = useState(true);

  function handleFormSubmit(e: any) {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      password !== confirmPassword
    ) {
      setCorrect(true);
    } else {
      localStorage.setItem("name", JSON.stringify(name));
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("password", JSON.stringify(password));
      setHome(!home);
    }
  }

  return (
    <>
      <div className="container registrate">
        <Link to={`/profile`}>
          <IconBack />
        </Link>
        {home ? (
          <form onSubmit={handleFormSubmit} className="registrate-form">
            <div className="registrate-form__title">Sign Up</div>
            {correct && (
              <div style={{ color: "blue", textAlign: "center" }}>
                Сheck the data and fields are correct.
              </div>
            )}
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
            <div className="registrate-form-input">
              <label> Confirm Password </label>
              <input
                value={confirmPassword}
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
            <button type="submit" className="registrate-form-btn">
              Sign Up
            </button>
          </form>
        ) : (
          <div
            style={{ height: "100vh", textAlign: "center", fontSize: "2rem" }}
          >
            Thx for registering. Now you can Sign In !
          </div>
        )}
      </div>
    </>
  );
}
