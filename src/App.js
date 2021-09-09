import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const handleOnChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(message);
  };

  return (
    <div className="App">
      <h1>Basic React Form</h1>
      <p>Your input is here: {message}</p>
      <form onSubmit={handleSubmit}>
        input: <input onChange={handleOnChange} value={message} />
        <button type="submit">submit </button>
      </form>
    </div>
  );
}
