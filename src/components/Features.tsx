import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "./Title";
import Card from "./Card";
import FeatureItem from "./FeatureItem";

const Features = () => {
  return (
    <Card>
      <Row>
        <Col className="col-12">
          <Title>Welcome to the Club</Title>
          <p>
            When you buy a Bored Ape, you’re not simply buying an avatar or a
            provably-rare piece of art. You are gaining membership access to a
            club whose benefits and offerings will increase over time. Your
            Bored Ape can serve as your digital identity, and open digital doors
            for you.
          </p>
        </Col>
        <Col className="col-12">
          <Row className="my-auto">
            <FeatureItem
              src="../../images/icon1.png"
              text="5,000 provably rare dragon NFTs."
            />
            <FeatureItem
              src="../../images/icon2.png"
              text="Gain additional rewards through roadmap activations."
            />
            <FeatureItem
              src="../../images/icon3.png"
              text="Tiered assets with varying rarity."
            />
            <FeatureItem
              src="../../images/icon4.png"
              text="5,000 provably rare dragon NFTs."
            />
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default Features;
