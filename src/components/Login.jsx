import { useState } from "react";
import React from "react";

//how the log inform will look like

export default function loginform(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <div className="loginformcss">
      <form className="loginformcss" onSubmit={handleSubmit}>
        <label for="username">Username</label>
        <input
          className="insideplaceholder"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          type="username"
          placeholder="Going-cray-cray"
          id="username"
          name="username"
        />

        <label for="password">Password</label>
        <input
          className="insideplaceholder"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="****"
          id="password"
          name="password"
        />

        <button className="buttoncolor" type="submit">
          Login
        </button>
      </form>

      {/* <button
        className="buttoncolor"
        onClick={() => props.onFormSwitch("CreateAccount")}
      >
        Don't have an account? Create one here!
      </button> */}
    </div>
  );
}
