import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const CandyStat = ({ label, value }) => (
  <Row style={{ color: "#000" }}>
    <Col className="col-12">
      <p className="text-center">{label}</p>
    </Col>
    <Col className="col-12">
      <h1 className="text-center">{value}</h1>
    </Col>
  </Row>
);
export default CandyStat;
