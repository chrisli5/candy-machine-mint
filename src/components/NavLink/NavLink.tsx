import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "./NavLink.css";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

interface NavLinkProps {
  to: string;
  children: string;
}

const NavLink = (props: NavLinkProps): JSX.Element => (
  <NavHashLink
    smooth
    to={props.to}
    className="navlink px-2 px-lg-3"
    activeClassName="navlink--active"
    scroll={(el) => scrollWithOffset(el)}
  >
    {props.children}
  </NavHashLink>
);

interface LinkProps {
  href: string;
  children: string;
}

const Link = (props: LinkProps): JSX.Element => (
  <a
    rel="noopener noreferrer"
    href={props.href}
    target="_blank"
    className="link px-2 px-lg-3"
  >
    {props.children}
  </a>
);

interface NavIconProps {
  to: string;
  icon: JSX.Element;
  children: string;
}

const NavIcon = (props: NavIconProps): JSX.Element => (
  <NavHashLink
    smooth
    to={props.to}
    className="nav-icon"
    activeClassName="nav-icon--active"
    scroll={(el) => scrollWithOffset(el)}
  >
    {props.icon}
    <p>{props.children}</p>
  </NavHashLink>
);

export { NavLink, Link, NavIcon };
