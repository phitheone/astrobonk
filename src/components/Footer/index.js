import React from "react";
import "./Footer.css";
import logoD from "../../images/logotelegram.png";
import logoT from "../../images/twitter.svg";
import logoZ from "../../images/head.png";

const Footer = () => {
  return (
    <div className="FooterSuper">
      <div className="FooterContainer">
        <div className="FooterLogo">
          <img src={logoZ} height="150" />
        </div>
        <div className="FooterSocials">
          <a href="https://twitter.com/Astro_Doge_Coin" target="_blank">
            <img src={logoT} height="40" />
          </a>
          <a href="https://t.me/astrodogechain" target="_blank">
            <img src={logoD} height="40" />
          </a>
        </div>
        <div className="FooterCR">
          <p>2022 &#169; Astro Doge Productions, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
