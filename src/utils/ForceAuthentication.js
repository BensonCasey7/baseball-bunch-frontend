import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function ForceAuthentication(props) {
  const history = useHistory();

  useEffect(() => {
    if (!props.signedIn) {
      history.push("/signin");
      return;
    }
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    fetch(
      "https://cs411baseball.web.illinois.edu/api/players/bryankr01",
      requestOptions
    ).then(async (response) => {
      if (response.status === 401) {
        props.setSignedIn(false);
        history.push("/signin");
      }
    });
  }, [history, props]);

  return <></>;
}

export default ForceAuthentication;
