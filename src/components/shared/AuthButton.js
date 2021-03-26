import React from "react";
import { Link, useHistory } from "react-router-dom";

function AuthButton(props) {
  const history = useHistory();

  function simulateSignOut() {
    props.setSignedIn(false);
    history.push("/");
  }

  return (
    <div>
      {props.signedIn ? (
        <button
          onClick={simulateSignOut}
          className={"button button--midnight-blue"}
        >
          Sign Out
        </button>
      ) : (
        <Link to="/signin" className={"button button--midnight-blue"}>
          Sign In
        </Link>
      )}
    </div>
  );
}

export default AuthButton;
