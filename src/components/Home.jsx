//this page suppose to be the  login before accessing the site

import React, { useState } from "react";
import { Login } from "./components/Login";
import CreateAccount from "./components/CreateAccount";

function Homepage() {
  const [currentForm, setCurrentForm] = useState("Login");

  const currentFormtoggle = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="Homepage">
      {currentForm === "Login" ? (
        <Login onFormSwitch={currentFormtoggle} />
      ) : (
        <CreateAccount onFormSwitch={currentFormtoggle} />
      )}
    </div>
  );
}

export default Homepage;
