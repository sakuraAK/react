import { useRef, useState } from "react";
import * as validation from "../utils/validation.js";

export default function Login() {

 
  const email = useRef();
  const password = useRef();

  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [passwordIsInvalid, setPasswordIsInvalid] = useState(false);


    function handleSubmitEvent(event) {
        event.preventDefault();

        console.log("User email: " + email.current.value);
        console.log("User password: " + password.current.value);

        //validation logic
        const emailStr = email.current.value;
        setEmailIsInvalid(!emailStr.includes("@"));

        const passwordStr = password.current.value;
        setPasswordIsInvalid(passwordStr.length < 6);


  }


  function handleResetClick(event) {
    event.preventDefault();
 
    email.current.value = "";
    password.current.value = "";
  }
  


  let emailValidationHtml = emailIsInvalid ? 
  (<div className="control-error"><p>Enter valid email address!</p></div>) :
  "";

  return (
    <form onSubmit={handleSubmitEvent}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" ref={email}/>
          { emailValidationHtml}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input  id="password"  name="password" ref={password}/>
          { passwordIsInvalid && <div className="control-error"><p>Enter valid password!</p></div>}
        </div>
      </div>

      <p className="form-actions">
        <button onClick={handleResetClick} className="button button-flat">Reset</button>
        <button  className="button">Login</button>
      </p>
    </form>
  );
}
