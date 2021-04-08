import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Loading from "../../components/shared/Loading";
import ForceAuthentication from "../../utils/ForceAuthentication";

export const New = (props) => {
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [badSubmit, setBadSubmit] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const history = useHistory();

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const postTeam = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        teamname: name,
      }),
    };
    fetch(
      "https://cs411baseball.web.illinois.edu/api/fantasy-team",
      requestOptions
    ).then(async (response) => {
      if (response.status === 201) {
        history.push("/teams");
      } else {
        // Server Error
        const data = await response.json();
        setBadSubmit(true);
        setSubmitError(data.message);
        setSubmitting(false);
      }
    });
  };

  return (
    <div className={"page"}>
      <ForceAuthentication
        signedIn={props.signedIn}
        setSignedIn={props.setSignedIn}
      />
      <h1>New Team</h1>
      {badSubmit ? <div>{submitError}</div> : <div />}
      <form onSubmit={postTeam}>
        {/*{badLogin ? <div className={"alert--error"}>{authError}</div> : <div />}*/}
        <div>
          <span>Team Name</span>
          <input
            type={"text"}
            value={name}
            placeholder={"Username"}
            onChange={handleNameInput}
          />
        </div>
        {submitting ? (
          <Loading />
        ) : (
          <input type={"submit"} value={"Create Team"} className={"button"} />
        )}
      </form>
    </div>
  );
};
