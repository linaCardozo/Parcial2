import React, { useState, useEffect } from "react";
import SerieDetail from "./serieDetail";
import { FormattedMessage } from "react-intl";
import { FormattedDate } from "react-intl";

const Series = (props) => {
  const [series, setSeries] = useState([]);

  const [detail, setDetail] = useState();

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("series") === null) {
        setSeries("Loading...");
      } else {
        setSeries(JSON.parse(localStorage.getItem("series")));
      }
    }

    fetch(props.url)
      .then((result) => result.json())
      .then((result) => {
        setSeries(result);
        localStorage.setItem("series", JSON.stringify(result));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Serie = (props) => {
    let date = props.serie.release.split("/");
    return (
      <tr onClick={() => setDetail(props.serie.id - 1)}>
        <th scope="row">{props.serie.id}</th>
        <td>{props.serie.name}</td>
        <td>{props.serie.channel}</td>
        <td>{props.serie.seasons}</td>
        <td>{props.serie.episodes}</td>
        <td>
          <FormattedDate value={new Date(date[2], date[1] - 1, date[0])} />
        </td>
      </tr>
    );
  };

  const ShowDetail = (props) => {
    if (detail !== -1) {
      return <SerieDetail serie={props.serie}></SerieDetail>;
    } else {
      return <></>;
    }
  };

  return (
    <div>
      <div className="col-9" style={{ float: "left" }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                <FormattedMessage id="name" />
              </th>
              <th scope="col">
                <FormattedMessage id="channel" />
              </th>
              <th scope="col">
                <FormattedMessage id="seasons" />
              </th>
              <th scope="col">
                <FormattedMessage id="episodes" />
              </th>
              <th scope="col">
                <FormattedMessage id="releaseDate" />
              </th>
            </tr>
          </thead>
          <tbody>
            {series.map((e, i) => (
              <Serie key={i} serie={e} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="col-3" style={{ float: "right" }}>
        <ShowDetail serie={series[detail]}></ShowDetail>
      </div>
    </div>
  );
};

export default Series;
