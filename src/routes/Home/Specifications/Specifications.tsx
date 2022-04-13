import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Section from "../../../components/Section/Section";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import imageA from "../../../images/icons/rocket.png";
import { specifications } from "../content.json";
import "./Specifications.css";

const Specifications = (): JSX.Element => (
  <Section id="specifications">
    <Row>
      <Col xs={12}>
        <Title>{specifications.title}</Title>
      </Col>
      <Col xs={12} lg={7}>
        <Body>{specifications.body[0]}</Body>
        <Body>{specifications.body[1]}</Body>
      </Col>
      <Col xs={12} lg={{ span: 4, offset: 1 }}>
        <Row>
          <Col xs={6} className="specs__col">
            <Image src={imageA} className="specs__image" fluid />
          </Col>
          <Col xs={6} className="specs__col">
            <Image src={imageA} className="specs__image" fluid />
          </Col>
          <Col xs={6} className="specs__col">
            <Image src={imageA} className="specs__image" fluid />
          </Col>
          <Col xs={6} className="specs__col">
            <Image src={imageA} className="specs__image" fluid />
          </Col>
        </Row>
      </Col>
    </Row>
  </Section>
);

export default Specifications;
