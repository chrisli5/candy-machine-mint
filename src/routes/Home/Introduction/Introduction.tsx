import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Section from "../../../components/Section/Section";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import imageSpace from "../../../images/intro/space.png";
import imageBeach from "../../../images/intro/beach.png";
import imageNinja from "../../../images/intro/ninja.png";
import imageSki from "../../../images/intro/ski.png";
import { introduction } from "../content.json";
import "./Introduction.css";

const images = [imageBeach, imageSpace, imageNinja];

const Introduction = (): JSX.Element => (
  <Section id="introduction">
    <Row className="intro__row">
      <Col xs={12} lg={7}>
        <Title>{introduction.title}</Title>
        <Body>{introduction.body[0]}</Body>
      </Col>
      <Col xs={12} lg={4} className="intro__outer">
        <Row className="intro__inner">
          {images.map((image, i) => (
            <Col xs={4} key={i} className="intro__container">
              <Image src={image} className="intro__image" fluid />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  </Section>
);

export default Introduction;
