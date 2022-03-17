import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../Text/Title";
import Card from "../Card/Card";
import FeatureItem from "./FeatureItem";
import Paragraph from "../Text/Paragraph";
import cameraImage from "../../images/icons/camera.png";
import hatImage from "../../images/icons/tophat.png";
import luggageImage from "../../images/icons/luggage.png";
import snailImage from "../../images/icons/snail.png";
import rocketImage from "../../images/icons/rocket.png";

const Features = (): JSX.Element => {
  return (
    <Card id="features" secondary>
      <Title secondary>Rewards & Features</Title>
      <Col xs={12} className="mb-md-2 mb-lg-4">
        <Paragraph secondary>
          Adopting a Kyubi not only grants you access and ownership rights to an
          amazingly cute fox, but also additional rewards through roadmap
          activations and community events.
        </Paragraph>
      </Col>
      <Col xs={12}>
        <Row className="justify-content-md-evenly">
          <FeatureItem
            src={cameraImage}
            text="5,000 provably rare Kyubit NFTs."
          />
          <FeatureItem
            src={luggageImage}
            text="Earn passive rewards as you hold."
          />
          <FeatureItem
            src={snailImage}
            text="Earn passive rewards as you hold."
          />
          <FeatureItem
            src={rocketImage}
            text="Tiered assets with a wide range of rarities."
          />
          <FeatureItem
            src={hatImage}
            text="Gain additional rewards through roadmap activations."
          />
        </Row>
      </Col>
    </Card>
  );
};

export default Features;
