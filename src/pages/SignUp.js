import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Loading from "../components/shared/Loading";

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticating, setAuthenticating] = useState(false);
  const [badLogin, setBadLogin] = useState(props.authError ? true : false);
  const [authError, setAuthError] = useState(props.authError);
  const history = useHistory();

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const postSignUp = async (event) => {
    event.preventDefault();
    setAuthenticating(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        emailAddress: email,
        username: username,
        password: password,
      }),
    };
    fetch(
      "https://cs411baseball.web.illinois.edu/api/users",
      requestOptions
    ).then(async (response) => {
      if (response.status === 201) {
        const tokenRequestOptions = {
          method: "GET",
          headers: {
            Authorization: `Basic ${window.btoa(`${username}:${password}`)}`,
          },
        };
        fetch(
          "https://cs411baseball.web.illinois.edu/api/token",
          tokenRequestOptions
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
            setAuthenticating(false);
          } else {
            // Server Error
            setBadLogin(true);
            setAuthenticating(false);
          }
        });
      } else {
        // Server Error
        const data = await response.json();
        setBadLogin(true);
        setAuthError(data.message);
        setAuthenticating(false);
      }
    });
  };

  return (
    <div className={"page"}>
      <div className={"auth"}>
        <form onSubmit={postSignUp} className={"auth__form"}>
          <h1>Create an Account</h1>
          {badLogin ? <div>{authError}</div> : <div />}
          <input
            type={"text"}
            value={email}
            placeholder={"Email"}
            onChange={handleEmailInput}
            className={"auth__input"}
          />
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
            Already have an account? <Link to={"/signin"}>Sign In</Link>
          </div>
          {authenticating ? (
            <Loading />
          ) : (
            <input
              type={"submit"}
              value={"Create Account"}
              className={"button"}
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
