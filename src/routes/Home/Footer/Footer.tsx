import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Section from "../../../components/Section/Section";
import Title from "../../../components/Text/Title";
import Body from "../../../components/Text/Body";
import { footer } from "../content.json";
import "./Footer.css";

const Footer = (): JSX.Element => (
  <Section id="introduction">
    <Row>
      <Col xs={12}>
        <Title>{footer.title}</Title>
      </Col>
      <Col xs={12} lg={7}></Col>
      <Col xs={12} lg={{ span: 4, offset: 1 }}></Col>
    </Row>
  </Section>
);

export default Footer;
