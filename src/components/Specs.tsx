import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "./Card";
import Title from "./Text/Title";
import Paragraph from "./Text/Paragraph";
import fox4 from "../images/beach.png";

const Specs = (): JSX.Element => (
  <Card id="specifications" secondary>
    <Title secondary>Token Specifications</Title>
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
    <Col xs={12} lg={4} className="my-lg-auto offset-lg-1">
      <Image src={fox4} fluid style={{ borderRadius: "8px" }} />
    </Col>
  </Card>
);
export default Specs;
