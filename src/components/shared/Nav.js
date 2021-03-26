import React from "react";
import { Link } from "react-router-dom";

import SearchForm from "./SearchForm";
import AuthButton from "./AuthButton";

function Nav(props) {
  return (
    <div className={"page-wrapper page-wrapper--navbar"}>
      <div className={"page-wrapper__content"}>
        <div className={"navbar navbar--mobile"}>
          <div className={"navbar__group"}>
            <Link to="/" className={"navbar__title"}>
              TBB
            </Link>
          </div>
          <div className={"navbar__group"}>
            <SearchForm />
          </div>
          <div className={"navbar__group"}>
            <AuthButton
              signedIn={props.signedIn}
              setSignedIn={props.setSignedIn}
            />
          </div>
        </div>
        <div className={"navbar navbar--desktop"}>
          <div className={"navbar__group"}>
            <Link to="/" className={"navbar__title"}>
              The Baseball Bunch
            </Link>
            <SearchForm />
          </div>
          <div className={"navbar__group"}>
            <AuthButton
              signedIn={props.signedIn}
              setSignedIn={props.setSignedIn}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
