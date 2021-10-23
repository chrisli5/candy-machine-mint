import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavIcon } from "./NavLink/NavLink";
import { BiHomeAlt, BiMapAlt, BiCoinStack, BiImageAlt } from "react-icons/bi";

const NavBottom = (): JSX.Element => {
  return (
    <Navbar
      className="p-1 d-md-none"
      fixed="bottom"
      style={{
        borderTop: "1px solid rgb(231, 227, 235)",
        backgroundColor: "#fff",
      }}
    >
      <Nav fill justify className="w-100">
        <Nav.Item className="d-flex justify-content-center m-1">
          <NavIcon to="/#home" icon={<BiHomeAlt />}>
            Home
          </NavIcon>
        </Nav.Item>
        <Nav.Item className="d-flex justify-content-center m-1">
          <NavIcon to="/gallery" icon={<BiImageAlt />}>
            Gallery
          </NavIcon>
        </Nav.Item>
        <Nav.Item className="d-flex justify-content-center m-1">
          <NavIcon to="/#buy" icon={<BiCoinStack />}>
            Buy
          </NavIcon>
        </Nav.Item>
        <Nav.Item className="d-flex justify-content-center m-1">
          <NavIcon to="/#roadmap" icon={<BiMapAlt />}>
            Roadmap
          </NavIcon>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavBottom;
