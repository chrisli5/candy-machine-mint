import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import imageBody from "../../../images/box.png";
import Section from "../../../components/Section/Section";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import { purchase } from "../content.json";
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
      <Col xs={12} md={6} className="purchase__grid">
        <div className="purchase__card">
          <div>
            <h3 className="purchase__title">{purchase.cards[0].title}</h3>
            <p className="purchase__body body--secondary">
              {purchase.cards[0].body}
            </p>
          </div>
          <div className="purchase__container">{props.children}</div>
        </div>
      </Col>
      <Col xs={12} md={6} className="purchase__grid purchase__grid--bottom">
        <div className="purchase__card">
          <h3 className="purchase__title">{purchase.cards[1].title}</h3>
          <p className="purchase__body body--secondary">
            {purchase.cards[1].body}
          </p>
          <div className="purchase__container">{props.children}</div>
        </div>
      </Col>
    </Row>
  </Section>
);

export default Purchase;
