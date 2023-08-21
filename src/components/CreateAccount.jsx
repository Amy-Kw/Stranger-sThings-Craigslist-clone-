import { useState } from "react";

//how the form pg will look like

export default function CreateAccountForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  // const [error, setError] = useState(null);

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log("Hello peeps");

  //   try {
  //     const response = await fetch(`${BASE_URL}/CreateAccount`, { //something here might be wrong
  //       method: "POST",
  //       body: JSON.stringify({ username }, { password }, { confirmpassword }),
  //     });
  //     const result = await response.json();
  //     console.log(result.token);
  //     setToken(result.token);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }
  // handleSubmit();

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {
    console.log(userName, password, confirmpassword);
  };

  return (
    <div className="Sign up form">
      <div className="form-body">
        <div className="text">{action}</div>

        <div className="username">
          <label for="userName">User Name </label>
          <input
            type="text"
            id="userName"
            placeholder="username"
            value={username}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>

        <div className="password">
          <label for="password">Password </label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>

        <div className="confirm-password">
          <label for="confirmPassword">Confirm Password </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="confirmpassword"
            value={confirmpassword}
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
