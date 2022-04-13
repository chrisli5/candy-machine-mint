import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Section from "../../../components/Section/Section";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import imageTemp from "../../../images/features/rocket.png";
import { about } from "../content.json";
import "./About.css";

const About = (): JSX.Element => (
  <Section id="about">
    <Row>
      <Title>{about.title}</Title>
      <Body>{about.body[0]}</Body>
    </Row>
    <Row>
      <Col xs={12} md={3}>
        <Image src={imageTemp} className="intro__image" fluid />
      </Col>
      <Col>
        <Title>{about.team[0].role}</Title>
        <Body>{about.team[0].description}</Body>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={3}>
        <Image src={imageTemp} className="intro__image" fluid />
      </Col>
      <Col>
        <Title>{about.team[1].role}</Title>
        <Body>{about.team[1].description}</Body>
      </Col>
    </Row>
  </Section>
);

export default About;
