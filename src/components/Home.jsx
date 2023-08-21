import { useState } from "react";
import React from "react";
import Login from "./components/Login";
import CreateAccount from "./CreateAccount";

function Homepage() {
  const [currentForm, setCurrentForm] = useState("login");

  return (
    <div className="Homepage">
      {currentForm === "login" ? <Login /> : <CreateAccount />}
    </div>
  );
}

export default Homepage;
