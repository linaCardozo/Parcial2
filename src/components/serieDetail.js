import "bootstrap/dist/css/bootstrap.min.css";
import { FormattedMessage } from "react-intl";

const SerieDetail = (props) => {
  const Image = (props) => {
    if (!navigator.onLine) {
      return <FormattedMessage id="error" />;
    } else {
      return <img className="card-img-top" src={props.src} alt={props.alt} />;
    }
  };
  if (props.serie === undefined) return <></>;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <Image src={props.serie.poster} alt={props.serie.name}></Image>
      <div className="card-body">
        <h5 className="card-title">{props.serie.name}</h5>
        <p className="card-text">{props.serie.description}</p>
        <u>
          <a href={props.serie.webpage}>{props.serie.webpage}</a>
        </u>
      </div>
    </div>
  );
};

export default SerieDetail;
