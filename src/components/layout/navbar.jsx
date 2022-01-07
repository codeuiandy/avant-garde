import React from "react";
import { ArrowBottom, BellIcon, Logo, SearchIcon } from "../../assets/svg";
import DemoUser from "../../assets/demo-user.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Navbar() {
  let location = useLocation();
  return (
    <div className="navbar-ch-con">
      <div className="navbarChild">
        <div className="navbar-logo" style={{ cursor: "pointer" }}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <ul className="right-links">
          <li
            className={`${location.pathname == "/menu" ? "activeNvaLink" : ""}`}
          >
            <Link to="/menu">Menu</Link>
          </li>
          <li
            className={`${
              location.pathname == "/contact" ? "activeNvaLink" : ""
            }`}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
