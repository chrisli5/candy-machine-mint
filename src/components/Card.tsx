import Row from "react-bootstrap/Row";

interface CardProps {
  children: React.ReactNode;
  id: string;
}

const Card = (props: CardProps): JSX.Element => (
  <Row id={props.id} className="py-5 px-2">
    {props.children}
  </Row>
);

export default Card;
