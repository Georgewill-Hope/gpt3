import React from "react";
import "./Navbar.css";
import { useState } from "react";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#whgpt3">What is GPT3?</a>
    </li>
    <li>
      <a href="#possibility">Open AI</a>
    </li>
    <li>
      <a href="#features">Case Studies</a>
    </li>
    <li>
      <a href="#blog">Library</a>
    </li>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="gpt3__navbar" id="navbar">
      <div className="gpt3__navbar--links">
        <div className="gpt3__navbar--links__logo">
          <h1>
            <a href="navbar">GPT-3</a>
          </h1>
        </div>
        <ul className="gpt3__navbar--links__container">
          <Menu />
        </ul>
        <div className="gpt3__navbar-sign">
          <li>Sign in</li>
          <button type="button">Sign up</button>
        </div>
        <div className="gpt3__navbar-menu" style={{ cursor: "pointer" }}>
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={23}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={23}
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gtp3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <li>Sign in</li>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
