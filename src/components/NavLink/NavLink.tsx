import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "./NavLink.css";

const NavLink = ({ to, children }) => (
  <NavHashLink to={to} className="navlink">
    {children}
  </NavHashLink>
);

const Link = ({ href, children }) => (
  <a rel="noopener noreferrer" href={href} target="_blank" className="link">
    {children}
  </a>
);

export { NavLink, Link };
