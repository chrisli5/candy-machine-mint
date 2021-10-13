import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Title from "./Title";
import Card from "./Card";

const Team = () => (
  <Card>
    <Row>
      <Col className="col-12 col-lg-7">
        <Title>Meet the Team</Title>
        <p>
          BAYC was created by four friends who set out to make some dope apes,
          test our skills, and try to build something (ridiculous).
        </p>
        <p>GGHAX. software and website.</p>
        <p>Penguinu. creative and artist.</p>
      </Col>
      <Col className="my-lg-auto col-lg-4 col-12 offset-lg-1">
        <Row className="px-2 pb-1">
          <Col className="col-6 px-1">
            <Image src="../images/ape2.png" fluid />
          </Col>
          <Col className="col-6 px-1">
            <Image src="../images/ape1.png" fluid />
          </Col>
        </Row>
        <Row className="px-2 pt-1">
          <Col className="col-6 px-1">
            <Image src="../images/ape1.png" fluid />
          </Col>
          <Col className="col-6 px-1">
            <Image src="../images/ape2.png" fluid />
          </Col>
        </Row>
      </Col>
    </Row>
  </Card>
);
export default Team;
