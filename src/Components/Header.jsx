import React from "react";
import "../index.css";
import investmentImage from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={investmentImage} alt="Investment Calculator" />
      <h1 className="header">Investment Calculator</h1>
    </header>
  );
};

export default Header;
