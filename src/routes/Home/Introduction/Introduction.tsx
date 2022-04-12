import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Section from "../../../components/Section/Section";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import imageA from "../../../images/examples/0.png";
import { introduction } from "../content.json";
import "./Introduction.css";

const Introduction = (): JSX.Element => (
  <Section id="introduction">
    <Row>
      <Col xs={12}>
        <Title>{introduction.title}</Title>
      </Col>
      <Col xs={12} lg={7}>
        <Body>{introduction.body}</Body>
      </Col>
      <Col xs={12} lg={{ span: 4, offset: 1 }}>
        <Row>
          <Col xs={4} className="intro__col">
            <Image src={imageA} className="intro__image" fluid />
          </Col>
          <Col xs={4} className="intro__col">
            <Image src={imageA} className="intro__image" fluid />
          </Col>
          <Col xs={4} className="intro__col">
            <Image src={imageA} className="intro__image" fluid />
          </Col>
        </Row>
      </Col>
    </Row>
  </Section>
);

export default Introduction;
