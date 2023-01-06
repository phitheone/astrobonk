import React from "react";
import "./Hero.css";

import dc from "../../images/head.png";

const Hero = () => {
  return (
    <div className="HeroSuper" id="hero">
      <div className="Herocontainer">
        <h1>
          Astro Doge
          <br />
          DogeChain Network
        </h1>

        <p>
          Astro doge is getting ready to travel to the moon!
          <br />
          Well known devs, this project is aiming to be one of the safest
          choices to invest on the new chain, with an active marketing campaing
          and a larger shilling team.
        </p>
        <div className="HeroBtnContainer">
          <a href="https://dogeswap.org/#" target="_blank">
            <div className="HeroBtn">
              <img src={dc} /> BUY ON DOGESWAP
            </div>
          </a>
          <a
            href="https://pandasale.finance/launchpad/0xB1bE4B70DCa1884b82F781d709a2FE0985EAd0b9?chain=DOGECHAIN"
            target="_blank"
          >
            <div className="HeroBtn">
              <img src={dc} /> FAIRLAUNCH
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
