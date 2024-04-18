import { useState } from "react";
import Review from "./components/Review";

const userFeedback = {
    userName: "Your Name",
    userFeedbackText: "Your feedback here...",
}

function App() {

    const [feedback, updateFeedback] = useState(userFeedback);

    const [saveClicked, updateSaveClicked] = useState(false);

    function onTextAreaChangeHandler(event) {
        updateFeedback((previousValue) => ({...previousValue,
            userFeedbackText: event.target.value}))
    }

    function onInputChangeEventHandler(event) {
        updateFeedback((previousValue) => ({...previousValue,
            userName: event.target.value}))
    }

    function onSaveHandler() {
        updateSaveClicked(true);
    }



    return (
      <>
        <section id="feedback">
          <h2>Please share some feedback</h2>
          <p>
            <label>Your Feedback</label>
            <textarea value={feedback.userFeedbackText} onChange={onTextAreaChangeHandler}/>
          </p>
          <p>
            <label>Your Name</label>
            <input type="text" value={feedback.userName} onChange={onInputChangeEventHandler}/>
          </p>
        </section>
        <section id="draft">
          <h2>Your feedback</h2>
  
           { saveClicked && <Review feedback={feedback} />} 
           {/* { saveClicked ?  <Review feedback={feedback}/> : <></> } */}
          <p>
            <button onClick={onSaveHandler}>Save</button>
          </p>
        </section>
      </>
    );
  }
  
  export default App;