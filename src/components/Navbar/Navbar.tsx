import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLinkIcon from "../Link/NavLinkIcon";
import { BiHomeAlt, BiMapAlt, BiCoinStack, BiImageAlt } from "react-icons/bi";
import "./Navbar.css";

const Navibar = (): JSX.Element => {
  return (
    <Navbar className="navibar" fixed="bottom">
      <Nav className="navibar__nav">
        <Nav.Item className="navibar__item">
          <NavLinkIcon to="/#introduction" icon={<BiHomeAlt />}>
            Home
          </NavLinkIcon>
        </Nav.Item>
        <Nav.Item className="navibar__item">
          <NavLinkIcon to="/#purchase" icon={<BiCoinStack />}>
            Purchase
          </NavLinkIcon>
        </Nav.Item>
        <Nav.Item className="navibar__item">
          <NavLinkIcon to="/#roadmap" icon={<BiMapAlt />}>
            Roadmap
          </NavLinkIcon>
        </Nav.Item>
        <Nav.Item className="navibar__item">
          <NavLinkIcon to="/gallery" icon={<BiImageAlt />}>
            Gallery
          </NavLinkIcon>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Navibar;
