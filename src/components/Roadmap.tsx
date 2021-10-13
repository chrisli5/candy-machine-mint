import React from "react";
import { Image } from "react-bootstrap";
import { Timeline } from "@material-ui/lab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RoadmapItem from "./RoadmapItem";
import Title from "./Title";
import Card from "./Card";

const Roadmap = () => {
  return (
    <Card>
      <Row>
        <Col className="col-12 col-lg-7">
          <Row>
            <Col className="col-12">
              <Title>Roadmap Activations</Title>
              <p>
                BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
                collectibles living on the Ethereum blockchain. Your Bored Ape
                doubles as your Yacht Club membership card, and grants access to
                members-only benefits, the first of which is access to THE
                BATHROOM, a collaborative graffiti board. Future areas and perks
                can be unlocked by the community through roadmap activations.
              </p>
            </Col>
          </Row>
        </Col>
        <Col className="my-lg-auto col-lg-5 col-12 p-2">
          <Timeline>
            <RoadmapItem label="10%">We pay back our debts.</RoadmapItem>
            <RoadmapItem label="20%">
              Caged dragons will be unlocked, airdropping 5 NFTs to lucky
              holders.
            </RoadmapItem>
            <RoadmapItem label="30% ">
              Holding dragons of every element, (fire, water, earth, wind) will
              reward you with a dragon egg in the future.
            </RoadmapItem>
            <RoadmapItem label="40% ">
              50% of the royalties earned from secondary market purchases will
              be allocated to minters and holders.
            </RoadmapItem>
            <RoadmapItem label="60% ">
              We do stuff with our pile of cash.
            </RoadmapItem>
            <RoadmapItem label="80%">
              We start work on our second series, airdropping 1 NFT to current
              holders.
            </RoadmapItem>
            <RoadmapItem label="100%" end={true}>
              We go crazy.
            </RoadmapItem>
          </Timeline>
        </Col>
      </Row>
    </Card>
  );
};

export default Roadmap;
