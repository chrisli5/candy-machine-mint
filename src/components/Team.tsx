import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Title from "./Text/Title";
import Card from "./Card/Card";
import Paragraph from "./Text/Paragraph";
import pencilImage from "../images/about/pencil3.png";
import laptopImage from "../images/about/laptop2.png";

const Team = (): JSX.Element => (
  <Card id="team" secondary>
    <Col xs={12} className="mb-4 pb-1">
      <Title secondary className="mb-3">
        Meet The Team
      </Title>
      <Paragraph secondary>
        Hi there, We're gghax and Peng Guo and we're the creators of Kyubits.
        One of our favorite things to do is launch fun, innovative and sometimes
        silly projects to see our ideas come to life! Our goal with this project
        is to provide the community with an interactive NFT experience along
        side world building. gghax - website and software development. peng guo
        - artist and creative director.
      </Paragraph>
    </Col>
    <Col xs={12} md={3} className="text-center mb-3 pb-md-3">
      <Image src={pencilImage} style={{ width: "8rem" }} />
    </Col>
    <Col xs={12} md={9} className="mb-3 mb-md-0">
      <Title secondary className="mb-2">
        The Artist
      </Title>
      <Paragraph secondary>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Paragraph>
    </Col>
    <Col xs={12} md={3} className="text-center mb-3">
      <Image src={laptopImage} style={{ width: "8rem" }} />
    </Col>

    <Col xs={12} md={9}>
      <Title secondary className="mb-2">
        The Software Guy
      </Title>
      <Paragraph secondary>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Paragraph>
    </Col>
  </Card>
);
export default Team;
