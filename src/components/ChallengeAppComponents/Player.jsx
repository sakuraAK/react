import {useRef, useState} from "react";

export default function Player() {

  const [playerName, updatePlayerName] = useState("Player");
  const inputField = useRef();

  function onClickHandler() {
      updatePlayerName(inputField.current.value);
      inputField.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={inputField} type="text" />
        <button onClick={onClickHandler}>Set Name</button>
      </p>
    </section>
  );
}
