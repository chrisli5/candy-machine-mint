import React from "react";
import { NavLink, Link } from "./NavLink/NavLink";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

export default (props) => (
  <Navbar expand="md" variant="dark">
    <Container fluid>
      <Navbar.Brand href="#home">
        <Image
          src="../images/bayc-logo-z.png"
          style={{ width: "195px", height: "75px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav fill className="w-100">
          <Nav.Item className="d-flex justify-content-end my-auto justify-content-md-start">
            <NavLink to="/">Home</NavLink>
          </Nav.Item>
          <Nav.Item className="d-flex justify-content-end my-auto justify-content-md-start">
            <NavLink to="/#buy">Buy a Drago</NavLink>
          </Nav.Item>
          <Nav.Item className="d-flex justify-content-end my-auto justify-content-md-start">
            <NavLink to="/#roadmap">Roadmap</NavLink>
          </Nav.Item>
          <Nav.Item className="d-flex justify-content-end my-auto justify-content-md-start">
            <NavLink to="/#team">Team</NavLink>
          </Nav.Item>
          <Nav.Item className="d-flex justify-content-end my-auto justify-content-md-start">
            <NavLink to="/gallery">Collection</NavLink>
          </Nav.Item>
          <Nav.Item className="d-flex justify-content-end my-auto justify-content-md-start">
            <Link href="http://discord.com">Discord</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
