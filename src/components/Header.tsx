import { NavLink, Link } from "./NavLink/NavLink";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logoFull from "../images/header-md.png";
import { HeaderButton } from "./Buttons/Buttons";

export default (): JSX.Element => (
  <Navbar
    variant="light"
    fixed="top"
    style={{ backgroundColor: "var(--primary-bg)" }}
  >
    <Container className="ps-2 pe-3" style={{ maxWidth: "75rem" }}>
      <Navbar.Brand>
        <Image src={logoFull} style={{ width: "8rem", height: "3rem" }} />
      </Navbar.Brand>
      <Nav className="d-none d-md-inline-flex me-auto">
        <NavLink to="/#intro">home</NavLink>
        <NavLink to="/gallery">gallery</NavLink>
        <NavLink to="/#purchase">Purchase</NavLink>
        <NavLink to="/#roadmap">roadmap</NavLink>
        <NavLink to="/#team">team</NavLink>
        <Link href="https://discord.gg/HUa4jd2Km5">Discord</Link>
      </Nav>
      <HeaderButton />
    </Container>
  </Navbar>
);
