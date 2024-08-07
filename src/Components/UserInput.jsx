import React from "react";
import { useState } from "react";

const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: newValue };
    });
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={() => handleChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            required
            onChange={() => handleChange("annualInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={() => handleChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            value={userInput.duration}
            required
            onChange={() => handleChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
