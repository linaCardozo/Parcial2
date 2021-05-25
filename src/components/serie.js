import React from "react";
//import { FormattedDate, FormattedNumber, FormattedPlural } from "react-intl";

const Serie = (props) => {
  return (
    <tr>
      <th scope="row">{props.serie.id}</th>
      <td>{props.serie.name}</td>
      <td>{props.serie.channel}</td>
      <td>{props.serie.seasons}</td>
      <td>{props.serie.episodes}</td>
      <td>{props.serie.release}</td>
    </tr>
  );
};

export default Serie;
