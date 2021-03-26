import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Loading from "../components/shared/Loading";
import sleep from "../utils/sleep";

function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticating, setAuthenticating] = useState(false);
  const history = useHistory();

  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const simulateSignIn = () => {
    setAuthenticating(true);
    sleep(1000).then(() => {
      props.setSignedIn(true);
      history.push("/");
    });
  };

  return (
    <div className={"page"}>
      <h1>Sign In</h1>
      <div>
        <input
          type={"text"}
          value={username}
          placeholder={"Username"}
          onChange={handleUsernameInput}
        />
      </div>
      <div>
        <input
          type={"text"}
          value={"*".repeat(password.length)}
          placeholder={"Password"}
          onChange={handlePasswordInput}
        />
      </div>
      <div>Not yet functional.</div>
      {authenticating ? (
        <Loading />
      ) : (
        <button onClick={simulateSignIn} className={"button"}>
          Simulate Sign In
        </button>
      )}
    </div>
  );
}

export default SignIn;
