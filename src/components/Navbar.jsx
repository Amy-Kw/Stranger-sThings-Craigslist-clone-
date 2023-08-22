import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="Navbar">
      <Link to="/Home">HOME</Link>
      <Link to="/CreateAccount">Create an account</Link>
      <Link to="/Post">Posts</Link>
      <Link to="/Message">Message</Link>
      <Link to="/LogOut">Log Out</Link>
      <Link to="/Login">Log in</Link>
    </div>
  );
}
