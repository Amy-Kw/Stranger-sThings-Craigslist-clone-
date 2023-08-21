import { useState } from "react";
import React from "react";

export const loginform = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlfor="username">Username</label>
        <input
          value={username}
          type="username"
          placeholder="Going-cray-cray"
          id="username"
          name="username"
        />

        <label htmlfor="password">Password</label>
        <input
          value={password}
          type="password"
          placeholder="****"
          id="password"
          name="password"
        />

        <button type="submit"> Login</button>
      </form>
      ;<button>Don't have an account? Create one here!</button>
    </>
  );
};

// const loginform = () => {
//   const [action, setAction] = useState("");
//   // const [username, setUsername] = useState("");
//   return <div></div>;
// };

// const createAccount = async () => {
//     try{
//         const response = await fetch (`${API_URL}/users/login`, {
//             method:"POST"
//             headers: headers,
//                 "Contact type"

//                 const response = await fetch(`${BASE_URL}/posts`, {
//                     //       method: "POST",
//                     //       headers: headers,
//                     //       body: JSON.stringify({
//                     //         post: {
//             }
//         }

//         )
//     }
// }
