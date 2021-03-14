import React, { useState, useEffect } from "react";

function Home() {
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
    <div>
      <h1>The Baseball Bunch</h1>
      {loaded && (
        <table>
          <thead>
            <tr>
              <th>fracnhId</th>
              <th>franchName</th>
              <th>active</th>
              <th>NAassoc</th>
            </tr>
          </thead>
          <tbody>
            {data.map((recipe) => {
              return (
                <tr key={recipe["COL 1"]}>
                  <td>{recipe["COL 1"]}</td>
                  <td>{recipe["COL 2"]}</td>
                  <td>{recipe["COL 3"]}</td>
                  <td>{recipe["COL 4"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
