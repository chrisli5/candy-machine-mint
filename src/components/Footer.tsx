import Col from "react-bootstrap/Col";
import Card from "./Card";

const Footer = (): JSX.Element => (
  <Card id="footer">
    <Col xs={12} lg={7}>
      <h4>Kyubits NFT</h4>
      <p>C2021 Kyubits LLC. All Rights Reserved.</p>
    </Col>
    <Col xs={12} lg={4} className="offset-lg-1">
      <p>Terms and Services</p>
      <p>Discord</p>
      <p>Contact Us</p>
    </Col>
  </Card>
);

export default Footer;
