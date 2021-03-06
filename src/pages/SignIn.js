import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Loading from "../components/shared/Loading";

function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticating, setAuthenticating] = useState(false);
  const [badLogin, setBadLogin] = useState(props.authError ? true : false);
  const [authError, setAuthError] = useState(props.authError);
  const history = useHistory();

  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const authenticateUser = async (event) => {
    event.preventDefault();
    setAuthenticating(true);
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Basic ${window.btoa(`${username}:${password}`)}`,
      },
    };
    fetch(
      "https://cs411baseball.web.illinois.edu/api/token",
      requestOptions
    ).then(async (response) => {
      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);
        props.setSignedIn(true);
        history.push("/");
      } else if (response.status === 401) {
        // Wrong username/password
        setBadLogin(true);
        setAuthError("Wrong username or password");
        setAuthenticating(false);
      } else {
        // Server Error
        setBadLogin(true);
        setAuthError("Something went wrong. Try again later");
        setAuthenticating(false);
      }
    });
  };

  return (
    <div className={"page"}>
      <div className={"auth"}>
        <form onSubmit={authenticateUser} className={"auth__form"}>
          <h1>Sign In</h1>
          {badLogin ? (
            <div className={"alert--error"}>{authError}</div>
          ) : (
            <div />
          )}
          <input
            type={"text"}
            value={username}
            placeholder={"Username"}
            onChange={handleUsernameInput}
            className={"auth__input"}
          />
          <input
            type={"text"}
            value={"*".repeat(password.length)}
            placeholder={"Password"}
            onChange={handlePasswordInput}
            className={"auth__input"}
          />
          <div>
            Don't have an account? <Link to={"/signup"}>Sign Up</Link>
          </div>
          {authenticating ? (
            <Loading />
          ) : (
            <input type={"submit"} value={"Sign In"} className={"button"} />
          )}
        </form>
      </div>
    </div>
  );
}

export default SignIn;
