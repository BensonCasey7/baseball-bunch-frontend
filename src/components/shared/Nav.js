import React from "react";
import { Link, useHistory } from "react-router-dom";

import SearchForm from "./SearchForm";

function Nav(props) {
  const history = useHistory();

  function simulateSignOut() {
    props.setSignedIn(false);
    history.push("/");
  }

  return (
    <div className={"page-wrapper page-wrapper--navbar"}>
      <div className={"page-wrapper__content"}>
        <div className={"navbar"}>
          <div className={"navbar__group"}>
            <Link to="/" className={"navbar__title"}>
              The Baseball Bunch
            </Link>
            <SearchForm />
          </div>
          <div className={"navbar__group"}>
            {props.signedIn ? (
              <button onClick={simulateSignOut}>Sign Out</button>
            ) : (
              <Link to="/signin" className={"navbar__signin"}>
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
