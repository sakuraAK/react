

export default function UserInput({userInput, onInputChange}) {
    return (
        <>
        <section id="user-input">
            <div className="input-group">
                <label>Initial Investment</label>
                <input 
                type="number" 
                onChange={(event) => onInputChange(event, "initialInvestment")} 
                required value={userInput.initialInvestment}/>
                
                <label>Annual Investment</label>
                <input 
                type="number" 
                onChange={(event) => onInputChange(event, "annualInvestment")} 
                required value={userInput.annualInvestment}/>
            </div>

            <div className="input-group">
                <label>Expected Return</label>
                <input 
                type="number"
                onChange={(event) => onInputChange(event, "expectedReturn")}  
                required value={userInput.expectedReturn}/>

                <label>Duration</label>
                <input 
                type="number"
                onChange={(event) => onInputChange(event, "duration")}  
                required value={userInput.duration}/>
            </div>
        </section>
        </>
    );
}