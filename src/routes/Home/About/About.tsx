import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Section from "../../../components/Section/Section";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import imageLaptop from "../../../images/about/laptop3.png";
import imagePencil from "../../../images/about/pencil2.png";
import { about } from "../content.json";
import "./About.css";

const images = [imageLaptop, imagePencil];

const About = (): JSX.Element => (
  <Section id="about">
    <Row>
      <Title>{about.title}</Title>
      <Body>{about.body[0]}</Body>
    </Row>
    {about.team.map((item, i) => (
      <Row key={item.name}>
        <Col xs={12} md={13}>
          <Image src={images[i]} className="intro__image" fluid />
        </Col>
        <Col>
          <Title>{item.role}</Title>
          <Body>{item.description}</Body>
        </Col>
      </Row>
    ))}
  </Section>
);

export default About;
