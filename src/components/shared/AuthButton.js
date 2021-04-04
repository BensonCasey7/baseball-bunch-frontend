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

  const css = `button button--midnight-blue ${props.css}`;

  return (
    <div>
      {props.signedIn ? (
        <button onClick={signOut} className={css}>
          Sign Out
        </button>
      ) : (
        <Link to="/signin" className={css}>
          Sign In
        </Link>
      )}
    </div>
  );
}

export default AuthButton;
