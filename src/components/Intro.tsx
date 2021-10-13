import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "./Card";

const Intro = () => (
  <Card>
    <Row>
      <Col className="col-12 col-lg-7">
        <h1 className="font-italic mb-3">
          WELCOME TO THE BORED APE YACHT CLUB
        </h1>
        <p>
          BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
          collectibles living on the Ethereum blockchain. Your Bored Ape doubles
          as your Yacht Club membership card, and grants access to members-only
          benefits, the first of which is access to THE BATHROOM, a
          collaborative graffiti board. Future areas and perks can be unlocked
          by the community through roadmap activation.
        </p>
        <p>
          BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
          collectibles living on the Ethereum blockchain. BAYC is a collection
          of 10,000 Bored Ape NFTs—unique digital collectibles living on the
          Ethereum blockchain.
        </p>
      </Col>
      <Col className="my-lg-auto col-lg-4 col-12 offset-lg-1">
        <Row className="px-2 pb-1">
          <Col className="col-8 px-1">
            <Image src="../images/ape1.png" fluid />
          </Col>
          <Col className="col-4">
            <Row>
              <Col className="col-12 px-1 pb-1">
                <Image src="../images/ape2.png" fluid />
              </Col>
              <Col className="col-12 px-1 pt-1">
                <Image src="../images/ape3.png" fluid />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="px-2 pt-1">
          <Col className="col-4 px-1">
            <Image src="../images/ape4.png" fluid />
          </Col>
          <Col className="col-4 px-1">
            <Image src="../images/ape1.png" fluid />
          </Col>
          <Col className="col-4 px-1">
            <Image src="../images/ape2.png" fluid />
          </Col>
        </Row>
      </Col>
    </Row>
  </Card>
);

export default Intro;
