import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Title from "./Text/Title";
import Card from "./Card";
import Paragraph from "./Text/Paragraph";
import fox3 from "../images/pencil.png";
import fox5 from "../images/laptop.png";

const Team = (): JSX.Element => (
  <Card id="team" secondary>
    <Title secondary>Meet The Team</Title>
    <Col xs={12} lg={7}>
      <Paragraph secondary>
        Hi there, We're gghax and Peng Guo and we're the creators of Kyubits.
        One of our favorite things to do is launch fun, innovative and sometimes
        silly projects to see our ideas come to life! Our goal with this project
        is to provide the community with an interactive NFT experience along
        side world building.
      </Paragraph>
      <Paragraph secondary>gghax - website and software development.</Paragraph>
      <Paragraph secondary>peng guo - artist and creative director.</Paragraph>
    </Col>
    <Col xs={12} lg={4} className="my-lg-auto offset-lg-1">
      <Row>
        <Col className="pe-1">
          <Image
            src={fox5}
            style={{ borderRadius: "8px", backgroundColor: "pink" }}
            fluid
          />
        </Col>
        <Col className="ps-1">
          <Image
            src={fox3}
            style={{ borderRadius: "8px", backgroundColor: "pink" }}
            fluid
          />
        </Col>
      </Row>
    </Col>
  </Card>
);
export default Team;
