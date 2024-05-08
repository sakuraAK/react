import { useRef, useState } from "react";

export default function Login() {

 
  const email = useRef();
  const password = useRef();

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
  

  return (
    <form onSubmit={handleSubmitEvent}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password}/>
        </div>
      </div>

      <p className="form-actions">
        <button onClick={handleResetClick} className="button button-flat">Reset</button>
        <button  className="button">Login</button>
      </p>
    </form>
  );
}
