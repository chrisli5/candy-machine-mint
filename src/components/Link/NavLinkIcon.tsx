import { NavHashLink } from "react-router-hash-link";
import "./NavLinkIcon.css";

interface NavLinkIconProps {
  to: string;
  icon: JSX.Element;
  children: string;
}

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const NavLinkIcon = (props: NavLinkIconProps): JSX.Element => (
  <NavHashLink
    className="navlinkicon"
    activeClassName="navlinkicon--active"
    smooth
    to={props.to}
    scroll={(el) => scrollWithOffset(el)}
  >
    <div className="navlinkicon__icon">{props.icon}</div>
    <p className="navlinkicon__text">{props.children}</p>
  </NavHashLink>
);

export default NavLinkIcon;
