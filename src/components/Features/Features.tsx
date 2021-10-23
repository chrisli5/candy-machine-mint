import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../Text/Title";
import Card from "../Card";
import FeatureItem from "./FeatureItem";
import Paragraph from "../Text/Paragraph";

const Features = (): JSX.Element => {
  return (
    <Card id="features">
      <Title>Rewards & Features</Title>
      <Col xs={12}>
        <Paragraph>
          When you buy a Bored Ape, you’re not simply buying an avatar or a
          provably-rare piece of art. You are gaining membership access to a
          club whose benefits and offerings will increase over time. Your Bored
          Ape can serve as your digital identity, and open digital doors for
          you.
        </Paragraph>
      </Col>
      <Col xs={12}>
        <Row className="my-auto">
          <FeatureItem
            src="../../images/icon1.png"
            text="5,000 provably rare dragon NFTs."
          />
          <FeatureItem
            src="../../images/icon2.png"
            text="Gain additional rewards through roadmap activations."
          />
          <FeatureItem
            src="../../images/icon3.png"
            text="Tiered assets with varying rarity."
          />
          <FeatureItem
            src="../../images/icon4.png"
            text="5,000 provably rare dragon NFTs."
          />
        </Row>
      </Col>
    </Card>
  );
};

export default Features;
