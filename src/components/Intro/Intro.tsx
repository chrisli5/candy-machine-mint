import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../Card";
import Title from "../Text/Title";
import IntroItem from "./IntroItem";
import Paragraph from "../Text/Paragraph";

const Intro = (): JSX.Element => (
  <Card id="intro">
    <Title>WELCOME TO THE CLUB OF TRAVELING FOXES</Title>
    <Col lg={7}>
      <Paragraph>
        Kyubits is a collection of 5,000 traveling fox NFTs-unique digital art
        assets that are stored on the Solana blockchain. Each NFT in the Kyubits
        collection has its own distinct variation and we guarantee that
        duplicates will never be minted. Future features and rewards can be
        unlocked by the community as we reach our roadmap goals.
      </Paragraph>
    </Col>
    <Col lg={4} className="offset-lg-1">
      <Row className="p-1 px-2">
        <IntroItem src="../images/ape1.png" />
        <IntroItem src="../images/ape2.png" />
        <IntroItem src="../images/ape3.png" />
      </Row>
      <Row className="p-1 px-2">
        <IntroItem src="../images/ape1.png" />
        <IntroItem src="../images/ape2.png" />
        <IntroItem src="../images/ape3.png" />
      </Row>
    </Col>
  </Card>
);

export default Intro;
