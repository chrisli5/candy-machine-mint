import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Section from "../../../components/Section/Section";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import imageSki from "../../../images/specs/one.png";
import imageCrab from "../../../images/specs/two.png";
import imageDonut from "../../../images/specs/three.png";
import imageTuxedo from "../../../images/specs/four.png";
import { specifications } from "../content.json";
import "./Specifications.css";

const images = [imageTuxedo, imageDonut, imageSki, imageCrab];

const Specifications = (): JSX.Element => (
  <Section id="specifications" className="section--secondary">
    <Row className="specs__row">
      <Col xs={12} lg={7}>
        <Title className="title--secondary">{specifications.title}</Title>
        <Body className="body--secondary">{specifications.body[0]}</Body>
        <Body className="body--secondary">{specifications.body[1]}</Body>
      </Col>
      <Col xs={12} lg={{ span: 4, offset: 1 }} className="specs__outer">
        <Row className="specs__inner">
          {images.map((image, i) => (
            <Col xs={6} md={3} lg={6} key={i} className="specs__container">
              <Image src={image} className="specs__image" fluid />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  </Section>
);

export default Specifications;
