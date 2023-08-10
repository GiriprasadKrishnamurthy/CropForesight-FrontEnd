import React, { useEffect, useState } from "react";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import menu from "../assets/menu-icon.webp";
import "./nav.css";

const NAV = ({ mode, setmode }) => {
  // console.log(mode,setmode);
  const [showMenu, setShowMenu] = useState(false);
  function changlemode() {
    setmode(mode === 'light' ? 'dark' : 'light');
  }
  function closeMenu() {
    setShowMenu(false)
  }

  const [token, setToken] = useState('');
  useEffect(() => {
    setToken(localStorage.getItem('AccessToken'));
  }, [token]);

  return (
    <>
      <nav>
        <div >
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              style={{ width: "200px", height: "45px", marginTop: "7px" }}
            />
          </Link>
        </div>
        <div className="visibility-desktop">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
            <li>
              <Link to="/Weather">Weather</Link>
            </li>
            <li>
              <Link to="/contributors">Contributors</Link>
            </li>
            <li>
              <Link to="/ExampleCrop">Example</Link>
            </li>
            <li>
              {token !== null ? <Link to="/profile">Profile</Link> : <Link to="/Login">Login</Link>}
            </li>
            <li>
              <button className="modebtn" onClick={changlemode}>
                {mode === 'dark' ? <BsMoonFill className="h-6 w-6" /> : <BsSun className="h-6 w-6" />}
              </button>
            </li>
          </ul>
        </div>
        <div
          className="visibility-mobile"
          onClick={() => { setShowMenu(prev => !prev) }}
        >
          <img src={menu} alt="" />
        </div>
      </nav>
      {showMenu && (
        <>
          <div className="mobile-nav">
            <ul>
              <li onClick={closeMenu}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/about">About</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/contact">Contact</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/faq">FAQs</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/Weather">Weather</Link>
              </li>
              <li onClick={closeMenu}>
                <Link to="/contributors">Contributors</Link>
              </li>
              <li onClick={closeMenu}>
                {token !== null ? <Link to="/profile">Profile</Link> : <Link to="/Login">Login</Link>}
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default NAV;
