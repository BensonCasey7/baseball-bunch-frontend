import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function ForceAuthentication(props) {
  const history = useHistory();

  useEffect(() => {
    if (!props.signedIn) {
      history.push("/signin");
    }
  });

  return <></>;
}

export default ForceAuthentication;
