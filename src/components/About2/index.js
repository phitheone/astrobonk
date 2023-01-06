import React from "react";
import "./About2.css";

import foto from "../../images/head.png";

const About2 = () => {
  return (
    <div className="A2Super" id="about2">
      <div className="A2Container">
        <div className="A2Left">
          <img src={foto} />
        </div>
        <div className="A2Right">
          <h1>AstroDoge</h1>
          <h2>The first Astronaut on the DogeChain</h2>
          <p>
            Missed <span>LadyDoge</span>? Join <span>AstroDoge</span>!
            <br />
            <br />
            Fairlaunch 17th August | 20:00 UTC
            <br />
            🟢 8% Tax
            <br />
            🟢 Experienced team
            <br />
            🟢 Liquidity locked
            <br />
            🟢 Long term vision
            <br />
            <br />
            Astro doge is the token that <span>will carry you</span> to the moon
            on the new and super hyped <span>DogeChain</span>. Latest projects
            on the DogeChain were mooning and had a lot of exposure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;
