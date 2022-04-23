import { NavHashLink } from "react-router-hash-link";
import "./NavLink.css";

interface NavLinkProps {
  to: string;
  children: string;
}

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const NavLink = (props: NavLinkProps): JSX.Element => (
  <NavHashLink
    className="navlink"
    activeClassName="navlink--active"
    smooth
    to={props.to}
    scroll={(el) => scrollWithOffset(el)}
  >
    {props.children}
  </NavHashLink>
);

export default NavLink;
