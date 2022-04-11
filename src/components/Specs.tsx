import Col from "react-bootstrap/Col";
import Card from "./Card/Card";
import Title from "./Text/Title";
import Paragraph from "./Text/Paragraph";
import ImageGrid from "./ImageGrid/ImageGrid";
import beachImage from "../images/examples/beach.png";
import spaceImage from "../images/examples/space.png";
import ninjaImage from "../images/examples/ninja.png";
import { Row } from "react-bootstrap";

const Specs = (): JSX.Element => (
  <Card id="specifications" secondary>
    <Title secondary className="mb-3">
      Token Specifications
    </Title>
    <Col xs={12} lg={7}>
      <Paragraph secondary>
        Kyubits is a collection of programmatically, randomly generated NFTs
        living on the Solana blockchain. Each fox is generated from over 100
        possible traits of varying rarity. As you might suspect, not every fox
        is created equal, some will have much rarer attributes than others. Once
        the collection is released, we will publish the rarity ratings for each
        trait on this site.
      </Paragraph>
      <Paragraph secondary>
        Each Kyubit NFT is stored as a SPL Token on the Solana blockchain and
        its art counterpart is hosted on IPFS. The metadata associated with each
        token follows the guidelines outlined by the Metaplex Token Metadata
        contract.
      </Paragraph>
    </Col>
    <Col xs={12} lg={4} className="offset-lg-1 my-auto">
      <Row className="px-2 p-lg-0">
        <ImageGrid src={spaceImage} xs={6} md={3} lg={6} className="p-1" />
        <ImageGrid src={beachImage} xs={6} md={3} lg={6} className="p-1" />
        <ImageGrid src={ninjaImage} xs={6} md={3} lg={6} className="p-1" />
        <ImageGrid src={spaceImage} xs={6} md={3} lg={6} className="p-1" />
      </Row>
    </Col>
  </Card>
);
export default Specs;
