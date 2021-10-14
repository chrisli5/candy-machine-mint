import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const FeatureItem = ({ src, text }) => (
  <Col>
    <Row>
      <Col
        className="col-12 d-flex justify-content-center"
        style={{ height: "175px" }}
      >
        <Image src={src} className="m-auto" style={{ width: "100px" }} />
      </Col>
      <Col className="col-12">
        <p className="text-center">{text}</p>
      </Col>
    </Row>
  </Col>
);
export default FeatureItem;
