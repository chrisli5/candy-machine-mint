import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../Card/Card";
import Title from "../Text/Title";
import Image from "react-bootstrap/Image";
import ImageGrid from "../ImageGrid/ImageGrid";
import Paragraph from "../Text/Paragraph";
import spaceImage from "../../images/examples/space.png";
import beachImage from "../../images/examples/beach.png";
import ninjaImage from "../../images/examples/ninja.png";

const Intro = (): JSX.Element => (
  <Card id="intro">
    <Col xs={12} lg={7} className="mb-1 mb-md-2 mb-lg-0">
      <Title>Welcome to the Club of Traveling Foxes</Title>
      <Paragraph>
        Kyubits is a collection of 5,000 traveling fox NFTs-unique digital art
        assets that are stored on the Solana blockchain. Each NFT in the Kyubits
        collection has its own distinct variation and we guarantee that
        duplicates will never be minted. Future features and rewards can be
        unlocked by the community as we reach our roadmap goals.
      </Paragraph>
    </Col>
    <Col xs={12} lg={4} className="offset-lg-1 my-auto">
      <Row className="px-2 p-lg-0">
        <ImageGrid src={spaceImage} xs={4} md={2} lg={4} className="p-1" />
        <ImageGrid src={beachImage} xs={4} md={2} lg={4} className="p-1" />
        <ImageGrid src={ninjaImage} xs={4} md={2} lg={4} className="p-1" />
        <ImageGrid src={spaceImage} xs={4} md={2} lg={4} className="p-1" />
        <ImageGrid src={beachImage} xs={4} md={2} lg={4} className="p-1" />
        <ImageGrid src={ninjaImage} xs={4} md={2} lg={4} className="p-1" />
      </Row>
    </Col>
  </Card>
);

export default Intro;
