import React, { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mockedData = [
      {
        "COL 1": "franchID",
        "COL 2": "franchName",
        "COL 3": "active",
        "COL 4": "NAassoc",
      },
      {
        "COL 1": "ALT",
        "COL 2": "Altoona Mountain City",
        "COL 3": "N",
        "COL 4": "",
      },
      {
        "COL 1": "ANA",
        "COL 2": "Los Angeles Angels of Anaheim",
        "COL 3": "Y",
        "COL 4": "",
      },
    ];

    let apiResponse = mockedData;
    setLoaded(true);

    // Once CORS is resolved, uncomment below

    // let apiResponse = await fetch("https://cs411baseball.web.illinois.edu/api/content")
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setLoaded(true);
    //     return result;
    //   })
    //   .catch((error) => error);

    apiResponse.shift();
    setData(apiResponse);
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
