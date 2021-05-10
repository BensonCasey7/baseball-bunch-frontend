import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Loading from "../../components/shared/Loading";
import ForceAuthentication from "../../utils/ForceAuthentication";
import Breadcrumbs from "../../components/shared/Breadcrumbs";

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
      <Breadcrumbs
        path={[{ text: "My Teams", href: "/teams" }, { text: "New Team" }]}
      />
      <div className={"new-team"}>
        <h1>Create a Team</h1>
        <h2>Every great team needs a great name.</h2>
        {badSubmit ? <div>{submitError}</div> : <div />}
        <form onSubmit={postTeam} className={"new-team__form"}>
          <input
            type={"text"}
            value={name}
            onChange={handleNameInput}
            className={"new-team__input"}
          />
          {submitting ? (
            <Loading />
          ) : (
            <input type={"submit"} value={"Create Team"} className={"button"} />
          )}
        </form>
      </div>
    </div>
  );
};
