import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <div
        className="d-flex justify-content-around py-4 mb-4"
        style={{ backgroundColor: "blueviolet" }}
      >
        <div style={{ color: "white" }}>
          <h1>Programmers University</h1>
        </div>
        <div className="lh-lg">
          <NavLink
            className="text-decoration-none font-weight-bold px-2"
            style={{ fontSize: "22px", color: "white" }}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className="text-decoration-none font-weight-bold px-2"
            style={{ fontSize: "22px", color: "white" }}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="text-decoration-none font-weight-bold px-2"
            style={{ fontSize: "22px", color: "white" }}
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className="text-decoration-none font-weight-bold px-2"
            style={{ fontSize: "22px", color: "white" }}
            to="/apply"
          >
            Apply
          </NavLink>
        </div>
      </div>
    );
};

export default Header;