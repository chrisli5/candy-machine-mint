import React from "react";
import Container from "react-bootstrap/Container";

const Card = ({ children }) => (
  <Container className="py-5 px-1">{children}</Container>
);

export default Card;
