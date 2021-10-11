import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Hero = () => (
  <Container className="mb-4 mb-lg-5">
    <Row>
      <Col className="px-0 col-12">
        <Image
          src="../../images/bayc-mutant-hero.jpeg"
          fluid
          className="px-0"
        />
      </Col>
    </Row>
  </Container>
);

export default Hero;
