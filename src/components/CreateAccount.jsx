import { useState } from "react";
import React from "react";

//how the form pg will look like

export default function creataccountform(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password, confirmpassword);
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

        <label for="confirmpassword">Confirm Password</label>
        <input
          className="insideplaceholder"
          value={confirmpassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          type="confirmpassword"
          placeholder="****"
          id="confirmpassword"
          name="confirmpassword"
        />

        <button className="buttoncolor" type="submit">
          Create{" "}
        </button>
      </form>

      {/* <button
        className="buttoncolor"
        onClick={() => props.onFormSwitch("Login")}
      >
        Have an account? Login here!
      </button> */}
    </div>
  );
}
