import "../index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-bar fixed top-0 w-full z-50">
      <ul className="nav-ul text-black ">
        <li>
          <Link to="/" className="nav-link " style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="nav-link"
            style={{ textDecoration: "none" }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="nav-link"
            style={{ textDecoration: "none" }}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="nav-link"
            style={{ textDecoration: "none" }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
