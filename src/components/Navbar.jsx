import { Routes, Route, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="Navbar">
      <Link to="/">HOME</Link>
      {/* <Link to="/Log in">HOME</Link> */}
      <Link to="/Create Account">Create an account</Link>
      <Link to="/Post">Post</Link>
      <Link to="/Message">Message</Link>
      <Link to="/Log Out">Log Out</Link>
    </div>
  );
}
