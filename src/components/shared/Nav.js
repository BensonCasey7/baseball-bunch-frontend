import React from "react";
import { Link } from "react-router-dom";

import SearchForm from "./SearchForm";
import UserActions from "./UserActions";
import Logo from "../../assets/images/baseball.svg";

function Nav(props) {
  return (
    <div className={"page-wrapper page-wrapper--navbar"}>
      <div className={"page-wrapper__content"}>
        <div className={"navbar"}>
          <div className={"navbar__group"}>
            <Link to="/" className={"navbar__title navbar__group"}>
              <img src={Logo} alt="Logo" className={"navbar__logo"} />
              <span className={"navbar__logo-text"}>TBB</span>
            </Link>
          </div>
          <div className={"navbar__group"}>
            <SearchForm />
          </div>
          <div className={"navbar__group"}>
            <UserActions
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
