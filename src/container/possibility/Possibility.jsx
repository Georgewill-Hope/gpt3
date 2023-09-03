import React from "react";
import "./Possibility.css";
import possibilityImage from "../../assets/virtual1.jpg"

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img
          src={possibilityImage}
          alt="possibility"
          // width={500}
        />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early access to get started</h4>
        <h1 className="gradient__text">
          The possibilities are beyound our imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis harum
          vel ad laboriosam optio facilis dolorum dignissimos eaque impedit
          unde?
        </p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
