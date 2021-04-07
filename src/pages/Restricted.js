import React, { useState, useEffect } from "react";

import Loading from "../components/shared/Loading";
import ForceAuthentication from "../utils/ForceAuthentication";

function Restricted(props) {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
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
      if (response.status === 200) {
        const data = await response.json();
        setData(data);
        setLoaded(true);
      } else if (response.status === 401) {
        const data = await response.json();
        setData(data);
        setLoaded(true);
      }
    });
  }, [setData]);

  return (
    <div className={"page"}>
      <ForceAuthentication
        signedIn={props.signedIn}
        setSignedIn={props.setSignedIn}
      />
      <h1>Restricted Page</h1>
      <p>
        If you aren't logged in, you would have been redirected to the signin
        page.
      </p>
      <p>
        <code>
          Hitting https://cs411baseball.web.illinois.edu/api/players/bryankr01
          with an authenticated token
        </code>
      </p>
      {loaded ? <code>{JSON.stringify(data, null, 2)}</code> : <Loading />}
    </div>
  );
}

export default Restricted;
