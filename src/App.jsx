import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import CreateAccount from "./components/CreateAccount";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <>
      <div className="App">
        <h1>Stranger's Things</h1>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<h1>Home</h1>} /> */}
          <Route path="/Post" element={<Post />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
