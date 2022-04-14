import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Section from "../../../components/Section/Section";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import { purchase, purchaseButton } from "../content.json";
import "./Purchase.css";

interface PurchaseProps {
  children: React.ReactNode;
}

const Purchase = (props: PurchaseProps): JSX.Element => (
  <Section id="purchase">
    <Row>
      <Col xs={12}>
        <Title>{purchase.title}</Title>
        <Body>{purchase.body[0]}</Body>
      </Col>
      <Col xs={12} className="purchase__button">
        <div>
          <h4 className="purchase__title">{purchaseButton.title}</h4>
          <p className="purchase__text">{purchaseButton.body[0]}</p>
        </div>
        {props.children}
      </Col>
    </Row>
  </Section>
);

export default Purchase;
