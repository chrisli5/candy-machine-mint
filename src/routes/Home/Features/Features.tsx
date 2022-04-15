import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Section from "../../../components/Section/Section";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import imageCamera from "../../../images/features/camera.png";
import imageLuggage from "../../../images/features/suitcase.png";
import imageRocket from "../../../images/features/rocket.png";
import imageSnail from "../../../images/features/snail.png";
import imageTopHat from "../../../images/features/tophat.png";
import { features } from "../content.json";
import "./Features.css";

const images = [
  imageCamera,
  imageLuggage,
  imageRocket,
  imageSnail,
  imageTopHat,
];

const Features = (): JSX.Element => (
  <Section id="features">
    <Row>
      <Col xs={12}>
        <Title>{features.title}</Title>
        <Body>{features.body[0]}</Body>
      </Col>
      <Col xs={12}>
        <Row className="features__row">
          {features.captions.map((caption, i) => (
            <Col xs={6} md={2} key={i} className="features__col">
              <div className="features__wrapper">
                <Image src={images[i]} className="features__image" fluid />
              </div>
              <p className="features__caption">{caption}</p>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  </Section>
);

export default Features;
