import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const user = true;
  return (
    <div className="nav">
      <div className="first">
        <p>BrainlyBits</p>
      </div>
      <div className="second">
        <ul className="navlist">
          <li className="navitem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="navitem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="navitem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="navitem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="navitem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="third">
        <i className="navicon  fa-brands fa-github"></i>
        <i className="navicon  fa-brands fa-linkedin"></i>
      </div>

      <div className="fourth">
        {user ? (
          <img className="navimg" src="./Images/govind.jpg" alt="profilepic" />
        ) : (
          <ul className="navlist">
            <li className="navitem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navitem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
            
          </ul>
        )}
        <i class=" navsearchicon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
