import React from "react";
import logo from "../../../assets/logo-bg.png";
import Classes from "../../../styles/nav.module.css";
import Account from "./Account";

const Nav = () => {
  return (
    <nav className={Classes.nav}>
      <ul>
        <li>
          <a href="./index.html" className={Classes.brand}>
            <img src={logo} alt="learn with sumit" />
            <h3>Learn with sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
