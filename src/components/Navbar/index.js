import React, { useState } from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

import logoM from "../../images/logoh.png";
import logoD from "../../images/logotelegram.png";
import logoT from "../../images/twitter.svg";
import hamburger from "../../images/hamburger.png";
import close from "../../images/close-button.png";
import dc from "../../images/head.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuImg, setMenuImg] = useState(hamburger);
  let navigate = useNavigate();

  function openMenu() {
    if (isMenuOpen) {
      setMenuImg(hamburger);
    } else {
      setMenuImg(close);
    }

    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="NavSuper">
      <div className="NavContainer">
        <div className="Logo">
          <Link
            to="hero"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-74}
          >
            <img src={logoM} />
          </Link>
        </div>
        <div className="Links">
          <div className="NavLink">
            <Link
              to="about1"
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-74}
            >
              <p>Tokenomics</p>
            </Link>
          </div>
          <div className="NavLink">
            <Link
              to="about2"
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-74}
            >
              <p>About Us</p>
            </Link>
          </div>
          <div className="NavLink">
            <Link
              to="faq"
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-74}
            >
              <p>Roadmap</p>
            </Link>
          </div>
        </div>
        <div className="NavButtons">
          <a href="https://dogeswap.org/#" target="_blank">
            <div className="NavBuyBtn">
              <img src={dc} /> BUY ON DOGESWAP
            </div>
          </a>
          <a
            href="https://pandasale.finance/launchpad/0xB1bE4B70DCa1884b82F781d709a2FE0985EAd0b9?chain=DOGECHAIN"
            target="_blank"
          >
            <div className="NavBuyBtn">
              <img src={dc} /> FAIRLAUNCH
            </div>
          </a>
        </div>
        {/* <div
          className="UBtn"
          target="_blank"
          onClick={() => {
            navigate("/utilities");
          }}
        >
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p>UTILITIES</p>
          </a>
        </div> */}
        <div className="Wide Socials">
          <a href="https://twitter.com/Astro_Doge_Coin" target="_blank">
            <img src={logoT} />
          </a>
          <a href="https://t.me/astrodogechain" target="_blank">
            <img src={logoD} />
          </a>
          {/* <div className="MintBtn">
            <a href="https://dqw4w9wgxcq.projectzora.xyz/">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <p>MINT</p>
            </a>
          </div> */}
        </div>
        <div className="Movil">
          <button className="NavBtn" onClick={() => openMenu()}>
            <img src={menuImg} height="25" />
          </button>
        </div>
      </div>
      <div className={"NavPanel-" + (isMenuOpen ? "Open" : "Closed")}>
        <div className="PanelLinks">
          <Link
            to="about1"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-74}
            onClick={() => openMenu()}
          >
            <p>Tokenomics</p>
          </Link>
          <Link
            to="about2"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-74}
            onClick={() => openMenu()}
          >
            <p>About Us</p>
          </Link>
          <Link
            to="faq"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-74}
            onClick={() => openMenu()}
          >
            <p>Roadmap</p>
          </Link>
        </div>
        <div className="PanelSocials">
          <a
            href="https://twitter.com/Astro_Doge_Coin"
            target="_blank"
            onClick={() => openMenu()}
          >
            <img src={logoT} height="40" />
          </a>
          <a
            href="https://t.me/astrodogechain"
            target="_blank"
            onClick={() => openMenu()}
          >
            <img src={logoD} height="40" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
