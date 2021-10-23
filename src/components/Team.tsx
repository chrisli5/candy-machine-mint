import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Title from "./Text/Title";
import Card from "./Card";
import Paragraph from "./Text/Paragraph";

const Team = (): JSX.Element => (
  <Card id="team">
    <Title>Meet The Team</Title>
    <Col xs={12} lg={7}>
      <Paragraph>
        Hi there, We're gghax and Peng Guo and we're the creators of Kyubits.
        One of our favorite things to do is launch fun, innovative and sometimes
        silly projects to see our ideas come to life! Our goal with this project
        is to provide the community with an interactive NFT experience along
        side world building.
      </Paragraph>
      <p>gghax - website and software development.</p>
      <p>peng guo - artist and creative director.</p>
    </Col>
    <Col xs={12} lg={4} className="my-lg-auto offset-lg-1">
      <Row className="pb-1">
        <Col className="pe-1">
          <Image src="../images/ape1.png" fluid />
        </Col>
        <Col className="ps-1">
          <Image src="../images/ape2.png" fluid />
        </Col>
      </Row>
      <Row className="pt-1">
        <Col className="pe-1">
          <Image src="../images/ape1.png" fluid />
        </Col>
        <Col className="ps-1">
          <Image src="../images/ape2.png" fluid />
        </Col>
      </Row>
    </Col>
  </Card>
);
export default Team;
