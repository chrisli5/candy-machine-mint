import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "../Text/Title";
import Card from "../Card";
import FeatureItem from "./FeatureItem";
import Paragraph from "../Text/Paragraph";
import imageFox1 from "../../images/1.png";
import imageFox2 from "../../images/2.png";
import imageFox3 from "../../images/3.png";
import imageFox4 from "../../images/4.png";

const Features = (): JSX.Element => {
  return (
    <Card id="features">
      <Title>Rewards & Features</Title>
      <Col xs={12}>
        <Paragraph>
          Adopting a Kyubi not only grants you access and ownership rights to an
          amazingly cute fox, but also additional rewards through roadmap
          activations and community events.
        </Paragraph>
      </Col>
      <Col xs={12}>
        <Row className="my-auto">
          <FeatureItem
            src={imageFox1}
            text="5,000 provably rare Kyubit NFTs."
          />
          <FeatureItem
            src={imageFox2}
            text="Gain additional rewards through roadmap activations."
          />
          <FeatureItem
            src={imageFox3}
            text="Tiered assets with a wide range of rarities."
          />
          <FeatureItem
            src={imageFox4}
            text="Earn passive rewards as you hold."
          />
        </Row>
      </Col>
    </Card>
  );
};

export default Features;
