import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>GitHub Explorer</h2>

      <ul>

        <li>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>

        </li>

        <li>

          <NavLink
            to="/repositories"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Repositories
          </NavLink>

        </li>

      </ul>

    </nav>
  );
}

export default Navbar;