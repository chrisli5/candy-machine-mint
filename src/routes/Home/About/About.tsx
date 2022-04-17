import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Section from "../../../components/Section/Section";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import imageLaptop from "../../../images/about/laptop.png";
import imagePencil from "../../../images/about/pencil.png";
import { about } from "../content.json";
import "./About.css";

const About = (): JSX.Element => (
  <Section id="about" className="section--secondary">
    <Row>
      <Col xs={12} lg={7}>
        <Title className="title--secondary">{about.title}</Title>
        <Body className="body--secondary">{about.body[0]}</Body>
      </Col>
      <Col xs={12} className="about__middle">
        <Row>
          <Col xs={12} md={4} className="about__image">
            <Image src={imageLaptop} fluid />
          </Col>
          <Col xs={12} md={8} className="about__text">
            <h3 className="about__title">{about.team[0].role}</h3>
            <Body className="body--secondary">{about.team[0].description}</Body>
          </Col>
        </Row>
      </Col>
      <Col xs={12} className="about__bottom">
        <Row>
          <Col xs={12} md={4} className="about__image about__image--bottom">
            <Image src={imagePencil} fluid />
          </Col>
          <Col xs={12} md={8} className="about__text">
            <h3 className="about__title">{about.team[1].role}</h3>
            <Body className="body--secondary">{about.team[1].description}</Body>
          </Col>
        </Row>
      </Col>
    </Row>
  </Section>
);

export default About;
