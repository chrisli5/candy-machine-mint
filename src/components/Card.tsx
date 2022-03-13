import Row from "react-bootstrap/Row";
import "./Card.css";

interface CardProps {
  children: React.ReactNode;
  id: string;
  secondary?: boolean;
}

const Card = (props: CardProps): JSX.Element => (
  <div
    id={props.id}
    className={`home__card ${
      props.secondary ? "card__secondary" : "card__primary"
    }`}
  >
    <Row className="card__body">{props.children}</Row>
  </div>
);

export default Card;
