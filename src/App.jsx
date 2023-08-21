import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import signup from "./components/sighnup";
import Navbar from "./components/Navbar";
import CreateAccount from "./components/CreateAccount";
// import login from "./components/login"

function App() {
  return (
    <>
      <div className="App">
        <h1>Stranger's Things</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          {/* <Route path="/Log in" element={<h1>Log in</h1>} /> */}
          <Route path="/CreateAccount" element={<CreateAccount />} />
          {/* <Route path="/CreateAccount" element={<h1>Create Account</h1>} /> */}
          <Route path="/Post" element={<h1>Post</h1>} />
          <Route path="/Message" element={<h1>Message</h1>} />
          <Route path="/Log Out" element={<h1>Log Out</h1>} />

          {/* <Route path="/:id" element={<Something />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
