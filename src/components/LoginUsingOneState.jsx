import { useState } from "react";

export default function Login() {

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
 // userInput["email"] <=> userInput.email
  function handleSubmitEvent(event) {
      event.preventDefault();
      console.log(userInput);
  }

  function handleInputChange(identifier, value){
    setUserInput((prevUserInput) => ({...prevUserInput,
      [identifier]: value
    }));
  }

  

  return (
    <form onSubmit={handleSubmitEvent}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event) => handleInputChange('email', event.target.value)} value={userInput.email}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event) => handleInputChange('password', event.target.value)} value={userInput["password"]}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button">Login</button>
      </p>
    </form>
  );
}
