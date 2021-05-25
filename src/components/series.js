import React, { useState, useEffect } from "react";
import Serie from "./serie";

const Series = () => {
  const [state, setState] = useState({ series: [] });

  useEffect(() => {
    const url =
      "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/a467415350e87c13faf9c8e843ea2fd20df056f3/series-es.json";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((series) => {
        setState({ series });
      });
  }, []);

  return (
    <div>
      <table className="table">
        <thead className="table-striped">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Channel</th>
            <th scope="col">Seasons</th>
            <th scope="col">Episodes</th>
            <th scope="col">Release date</th>
          </tr>
        </thead>
        <tbody>
          {console.log("Series", state.series)}
          {state.series.map((e, i) => (
            <Serie key={i} serie={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Series;
