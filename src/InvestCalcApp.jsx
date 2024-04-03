import Header from "./components/investment-calculator/Header/Header.jsx";
import UserInput from "./components/investment-calculator/UserInput/UserInput.jsx";
import Results from "./components/investment-calculator/Results/Results.jsx";
import { useState } from "react";
import { calculateInvestmentResults } from "./utils/investement.js";

export default function InvestCalcApp() {
    
    const [userInput, updateUserInput] = useState({
        initialInvestment: 15000,
        annualInvestment: 1000,
        expectedReturn: 6,
        duration: 10
    });

    function onInputChange(event, fieldName) {
        let val = event.target.value;        
        updateUserInput({...userInput,
            [fieldName]: +val});
        
    }
    
    return (
        <>
            <Header/>
            <UserInput userInput={userInput} onInputChange={onInputChange}/>
            {
                userInput.duration > 0 ? (<Results results={calculateInvestmentResults(userInput)}/>) :
                <p>Duration should be greater than 0</p>
            }
          
        </>
    );
}