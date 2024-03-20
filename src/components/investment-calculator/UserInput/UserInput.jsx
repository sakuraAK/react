import { useState } from "react";

export default function UserInput() {

    const [userInput, updateUserInput] = useState({
        initialInvestment: 15000,
        annualInvestment: 1000,
        expectedReturn: 6,
        duration: 10
    });

    return (
        <>
        <section id="user-input">
            <div>
                <label>Initial Investment</label>
                <input type="number" required value={userInput.initialInvestment}/>
                <label>Annual Investment</label>
                <input type="number" required value={userInput.annualInvestment}/>
                <label>Expected Return(%)</label>
                <input type="number" required value={userInput.expectedReturn}/>
                <label>Duration(years)</label>
                <input type="number" required value={userInput.duration}/>
            </div>
        </section>
        </>
    );
}