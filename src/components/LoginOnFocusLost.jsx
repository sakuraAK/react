import { useRef, useState } from "react";
import * as validation from "../utils/validation.js";

export default function Login() {

 
  const email = useRef();
  const password = useRef();


  const [dirty, setDirty] = useState({
    email: false,
    password: false,
  });


  function handleSubmitEvent(event) {
      event.preventDefault();
      console.log("User email: " + email.current.value);
      console.log("User password: " + password.current.value);
  }


  function handleResetClick(event) {
    event.preventDefault();
    email.current.value = "";
    password.current.value = "";
  }
  


  function handleOnBlur(identifier) {
    setDirty(prev => ({...prev, [identifier]: true}));
  }

  const emailIsInvalid = dirty.email && !validation.isEmail(email.current.value);
  const passwordIsInvalid = dirty.password && (!validation.hasMinLength(password.current.value, 8) || !validation.isNotEmpty(password.current.value));

  return (
    <form onSubmit={handleSubmitEvent}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input onBlur={() => handleOnBlur('email')} id="email" type="email" name="email" ref={email}/>
          { emailIsInvalid && <div className="control-error"><p>Enter valid email address!</p></div>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input onBlur={() => handleOnBlur('password')} id="password" type="password" name="password" ref={password}/>
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
