import React from "react";
import { Link, useHistory } from "react-router-dom";

function AuthButton(props) {
  const history = useHistory();

  function signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    props.setSignedIn(false);
    history.push("/");
  }

  return (
    <div>
      {props.signedIn ? (
        <button onClick={signOut} className={"button button--midnight-blue"}>
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
