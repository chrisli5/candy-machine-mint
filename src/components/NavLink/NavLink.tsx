import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "./NavLink.css";

const NavLink = ({ to, children }) => (
  <NavHashLink to={to} className="navlink" activeClassName="navlink--active">
    {children}
  </NavHashLink>
);

export default NavLink;
