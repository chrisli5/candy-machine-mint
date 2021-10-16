import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { BiHomeAlt } from "react-icons/bi";
import "./NavLink.css";

const NavLink = ({ to, children }) => (
  <NavHashLink to={to} className="nav-link">
    {children}
  </NavHashLink>
);

const Link = ({ href, children }) => (
  <a rel="noopener noreferrer" href={href} target="_blank" className="link">
    {children}
  </a>
);

const NavIcon = ({ to, icon, children }) => (
  <NavHashLink to={to} className="nav-icon" activeClassName="nav-icon--active">
    {icon}
    <p>{children}</p>
  </NavHashLink>
);

export { NavLink, Link, NavIcon };
