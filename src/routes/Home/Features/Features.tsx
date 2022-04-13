import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Section from "../../../components/Section/Section";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import imageCamera from "../../../images/icons/camera.png";
import imageLuggage from "../../../images/icons/suitcase.png";
import imageRocket from "../../../images/icons/rocket.png";
import imageSnail from "../../../images/icons/snail.png";
import imageTopHat from "../../../images/icons/tophat.png";
import { features } from "../content.json";
import "./Features.css";

const Features = (): JSX.Element => (
  <Section id="features">
    <Row>
      <Col xs={12}>
        <Title>{features.title}</Title>
        <Body>{features.body[0]}</Body>
      </Col>
      <Col xs={12}>
        <Row className="features__row">
          <Col xs={6} md={2} className="features__col">
            <div className="features__wrapper">
              <Image src={imageCamera} className="features__image" fluid />
            </div>
            <p className="features__caption">{features.captions[0]}</p>
          </Col>
          <Col xs={6} md={2} className="features__col">
            <div className="features__wrapper">
              <Image src={imageLuggage} className="features__image" fluid />
            </div>
            <p className="features__caption">{features.captions[1]}</p>
          </Col>
          <Col xs={6} md={2} className="features__col">
            <div className="features__wrapper">
              <Image src={imageRocket} className="features__image" fluid />
            </div>
            <p className="features__caption">{features.captions[2]}</p>
          </Col>
          <Col xs={6} md={2} className="features__col">
            <div className="features__wrapper">
              <Image src={imageSnail} className="features__image" fluid />
            </div>
            <p className="features__caption">{features.captions[3]}</p>
          </Col>
          <Col xs={6} md={2} className="features__col">
            <div className="features__wrapper">
              <Image src={imageTopHat} className="features__image" fluid />
            </div>
            <p className="features__caption">{features.captions[4]}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  </Section>
);

export default Features;
