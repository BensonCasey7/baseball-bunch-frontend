import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import AuthButton from "./AuthButton";

function UserActions(props) {
  return (
    <>
      {props.signedIn ? (
        <div className={"navbar__user-actions"}>
          <div className={"navbar__user"}>
            {localStorage.getItem("username")}
            <BsFillCaretDownFill />
          </div>
          <div className={"navbar__dropdown"}>
            <Link to="/my-team">My Fantasy Team</Link>
            <AuthButton
              signedIn={props.signedIn}
              setSignedIn={props.setSignedIn}
              css={"button--understated"}
            />
          </div>
        </div>
      ) : (
        <AuthButton signedIn={props.signedIn} setSignedIn={props.setSignedIn} />
      )}
    </>
  );
}

export default UserActions;
