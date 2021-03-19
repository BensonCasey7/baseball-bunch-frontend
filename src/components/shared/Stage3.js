import React, { useState, useEffect } from "react";

function Stage3() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("https://cs411baseball.web.illinois.edu/api/content")
      .then((res) => res.json())
      .then((result) => {
        result.shift();
        setData(result);
        setLoaded(true);
        return result;
      })
      .catch((error) => error);
  }, []);

  return (
    <div className={"page"}>
      <h2>Stage 3 Demo</h2>
      {loaded && (
        <table className={"table"}>
          <thead>
            <tr className={"table__row table__row--head"}>
              <th className={"table__data"}>fracnhId</th>
              <th className={"table__data"}>franchName</th>
              <th className={"table__data"}>active</th>
              <th className={"table__data"}>NAassoc</th>
            </tr>
          </thead>
          <tbody>
            {data.map((recipe) => {
              return (
                <tr key={recipe["COL 1"]} className={"table__row"}>
                  <td className={"table__data"}>{recipe["COL 1"]}</td>
                  <td className={"table__data"}>{recipe["COL 2"]}</td>
                  <td className={"table__data"}>{recipe["COL 3"]}</td>
                  <td className={"table__data"}>{recipe["COL 4"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Stage3;
