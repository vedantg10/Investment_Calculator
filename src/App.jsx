import { Fragment } from "react";
import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import { useState } from "react";
import Results from "./Components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +newValue };
    });
  }
  return (
    <Fragment>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a valid duration (1 year or more)</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </Fragment>
  );
}

export default App;
