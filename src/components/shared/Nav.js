import React from "react";
import { Link } from "react-router-dom";

import SearchForm from "./SearchForm";

function Nav() {
  return (
    <div className={"page-wrapper page-wrapper--navbar"}>
      <div className={"page-wrapper__content"}>
        <div className={"navbar"}>
          <Link to="/" className={"navbar__title"}>
            The Baseball Bunch
          </Link>
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

export default Nav;
