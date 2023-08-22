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

// export default function CreateAccountForm(props) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmpassword, setconfirmPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(username, password, confirmpassword);
//   };

//   const handleInputChange = (event) => {
//     const { id, value } = event.target;
//     if (id === "firstName") {
//       setUsername(value);
//     }
//     if (id === "password") {
//       setPassword(value);
//     }
//     if (id === "confirmPassword") {
//       setconfirmPassword(value);
//     }
//   };

//   return (
//     <div className="Sign up form">
//       <div className="form-body">
//         <div className="text"></div>

//         <div className="username">
//           <label for="userName">User Name </label>
//           <input
//             type="text"
//             value={username}
//             name="userName"
//             id="userName"
//             placeholder="hummas"
//             onChange={(e) => handleInputChange(e.target.value)}
//           />
//         </div>

//         <div className="password">
//           <label for="password">Password </label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             id="password"
//             placeholder="****"
//             onChange={(e) => handleInputChange(e.target.value)}
//           />
//         </div>

//         <div className="confirm-password">
//           <label for="confirmPassword">Confirm Password </label>
//           <input
//             type="confirmpassword"
//             name="confirmpassword"
//             value={confirmpassword}
//             id="confirmPassword"
//             placeholder="*****"
//             onChange={(e) => handleInputChange(e.target.value)}
//           />
//         </div>
//       </div>

//       <div class="footer">
//         <button
//           onClick={() => props.handleSubmit("Login")}
//           type="submit"
//           class="btn"
//         >
//           Register
//         </button>
//       </div>
//     </div>
//   );
// }
