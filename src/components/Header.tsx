import { NavLink, Link } from "./NavLink/NavLink";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logoFull from "../images/bayc-logo-z.png";
import logo from "../images/bayc-logo-z-cr.png";
import { HeaderButton } from "./Buttons/Buttons";

export default (): JSX.Element => (
  <Navbar
    variant="light"
    fixed="top"
    style={{
      backgroundColor: "#fff",
      borderBottom: "1px solid #ddd",
    }}
  >
    <Container className="px-md-3" style={{ maxWidth: "1200px" }}>
      <Navbar.Brand>
        <Image
          src={logo}
          className="d-md-none"
          style={{ width: "32px", height: "32px" }}
        />
        <Image
          src={logoFull}
          className="d-none d-md-inline"
          style={{ width: "156px", height: "60px" }}
        />
      </Navbar.Brand>
      <Nav className="d-none d-md-inline-flex me-auto">
        <NavLink to="/#home">home</NavLink>
        <NavLink to="/gallery">gallery</NavLink>
        <NavLink to="/#buy">buy</NavLink>
        <NavLink to="/#roadmap">roadmap</NavLink>
        <NavLink to="/#team">team</NavLink>
        <Link href="https://discord.gg/HUa4jd2Km5">Discord</Link>
      </Nav>
      <HeaderButton />
    </Container>
  </Navbar>
);
