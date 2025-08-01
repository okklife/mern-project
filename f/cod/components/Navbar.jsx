import { NavLink } from "react-router-dom"
import "../Style/Navbar.css"
import { useAuth } from "../store/auth";

const Navabar = () => {
    const {isloggedin} = useAuth()
    return (
      <>
        <div className="navbar">
          <div className="navlogo">
            <h1>Coder Site</h1>
          </div>
          <div className="navlinks">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              {isloggedin ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </>
    );
}

export default Navabar