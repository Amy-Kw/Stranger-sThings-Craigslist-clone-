import { useState } from "react";
import React from "react";
import { fetchAllPosts } from "../API/index";

//how the form pg will look like

export default function CreateAccountForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password, confirmpassword);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === "firstName") {
      setUsername(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setconfirmPassword(value);
    }
  };

  return (
    <div className="Sign up form">
      <div className="form-body">
        <div className="text"></div>

        <div className="username">
          <label for="userName">User Name </label>
          <input
            type="text"
            value={username}
            name="userName"
            id="userName"
            placeholder="hummas"
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>

        <div className="password">
          <label for="password">Password </label>
          <input
            type="password"
            name="password"
            value={password}
            id="password"
            placeholder="****"
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>

        <div className="confirm-password">
          <label for="confirmPassword">Confirm Password </label>
          <input
            type="confirmpassword"
            name="confirmpassword"
            value={confirmpassword}
            id="confirmPassword"
            placeholder="*****"
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
      </div>

      <div class="footer">
        <button onClick={() => handleSubmit()} type="submit" class="btn">
          Register
        </button>
      </div>
    </div>
  );
}
