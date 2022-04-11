import Col from "react-bootstrap/Col";
import Card from "./Card/Card";
import Paragraph from "./Text/Paragraph";
import Title from "./Text/Title";

interface PurchaseProps {
  children: JSX.Element;
}

const Purchase = (props: PurchaseProps): JSX.Element => {
  return (
    <Card id="purchase">
      <Col xs={12} lg={7} className="mb-3">
        <Title className="mb-3">Find Your Travel Companion</Title>
        <Paragraph>
          Begin your traveling journey with a fox today! Each traveling fox is
          guaranteed to be unique and duplicates will never exist. The initial
          4,995 mints -five are withheld for giveaway purposes, is priced at
          0.35 SOL and will be distributed on a first come first serve basis -so
          be ready to mint when the countdown hits zero!
        </Paragraph>
      </Col>
      {props.children}
    </Card>
  );
};

export default Purchase;
