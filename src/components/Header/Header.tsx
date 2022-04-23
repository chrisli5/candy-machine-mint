import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavLink from "../Link/NavLink";
import Link from "../Link/Link";
import MultiButton from "../Button/MultiButton";
import Image from "react-bootstrap/Image";
import imageBrand from "../../images/brand.png";
import "./Header.css";

const Header = (): JSX.Element => (
  <Navbar variant="light" fixed="top" className="header__navbar">
    <Container className="header__container" fluid>
      <Navbar.Brand>
        <Image src={imageBrand} className="header__image" />
      </Navbar.Brand>
      <Nav className="header__nav">
        <NavLink to="/#introduction">home</NavLink>
        <NavLink to="/#purchase">purchase</NavLink>
        <NavLink to="/#roadmap">roadmap</NavLink>
        <NavLink to="/#team">team</NavLink>
        <NavLink to="/gallery">gallery</NavLink>
        <Link href="https://discord.gg/HUa4jd2Km5">discord</Link>
      </Nav>
      <MultiButton />
    </Container>
  </Navbar>
);

export default Header;
