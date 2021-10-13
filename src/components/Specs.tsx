import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Title from "./Title";
import Card from "./Card";

const Specs = () => (
  <Card>
    <Row>
      <Col className="col-12 col-lg-7">
        <Title>Specifications</Title>
        <p>
          Each Bored Ape is unique and programmatically generated from over 170
          possible traits, including expression, headwear, clothing, and more.
          All apes are dope, but some are rarer than others. The apes are stored
          as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. (See
          Record and Proof.) Purchasing an ape costs 0.08 ETH. To access
          members-only areas such as THE BATHROOM, Apeholders will need to be
          signed into their Metamask Wallet.
        </p>
      </Col>
      <Col className="my-lg-auto col-lg-4 col-12 offset-lg-1 p-2">
        <Image src="../images/mystery-ape.gif" fluid />
      </Col>
    </Row>
  </Card>
);
export default Specs;
