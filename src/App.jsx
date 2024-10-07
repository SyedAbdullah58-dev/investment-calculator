import { useState } from "react";
import Header from "./Components/header"
import Results from "./Components/Results"
import UserInput from "./Components/UserInput"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn:7,
    duration:10,
        });
        const inputIsValid=userInput.duration>=1;
        function handleInputChange(inputIdentifier,newValue){
          setUserInput(prevValue=>{
          return {
              ...prevValue,
              [inputIdentifier]:+newValue
          }

          })

              }
  return (
    <>
    <Header></Header>
    <UserInput UserInput={userInput} handleInputChange={handleInputChange}></UserInput>
    {!inputIsValid &&<p className="center">Please input valid data</p>}
    {inputIsValid && <Results userInput={userInput}></Results>}
    </>
  )
}

export default App
