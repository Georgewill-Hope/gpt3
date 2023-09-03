import React from "react";
import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/logo1.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI{" "}
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ad
          adipisci illum omnis minima, non sapiente fuga. Eius distinctio
          provident exercitationem? Cupiditate consequatur esse sed aliquam
          excepturi eius dolor a?
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access to visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
