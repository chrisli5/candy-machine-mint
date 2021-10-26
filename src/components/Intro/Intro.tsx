import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../Card";
import Title from "../Text/Title";
import IntroItem from "./IntroItem";
import Paragraph from "../Text/Paragraph";
import fox1 from "../../images/1.png";
import fox4 from "../../images/4.png";

const Intro = (): JSX.Element => (
  <Card id="intro">
    <Title>Welcome to the Club of Traveling Foxes</Title>
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
      <Row className="p-1">
        <IntroItem src={fox1} />
        <IntroItem src={fox4} />
      </Row>
    </Col>
  </Card>
);

export default Intro;
