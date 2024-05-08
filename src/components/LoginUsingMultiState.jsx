import { useState } from "react";

export default function Login() {

  const [email, setUserEmail] = useState("user@email");
  const [password, setUserPassword] = useState("");

  function handleSubmitEvent(event) {
      event.preventDefault();
      console.log('User email: ' + email);
      console.log('User password: ' + password);
  }

  function handleEmailChange(event){
    setUserEmail(event.target.value);
  }

  function handlePasswordChange(event){
    setUserPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmitEvent}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={handleEmailChange} value={email}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={handlePasswordChange} value={password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button">Login</button>
      </p>
    </form>
  );
}