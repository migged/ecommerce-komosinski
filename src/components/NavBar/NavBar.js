import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={`/`} className="link">
          SNEAKER DAILY
        </Link>
      </div>

      <nav className="menu">
        <ul>
          <li>
            <NavLink
              to={`/`}
              className={({ isActive }) => (isActive ? "menuActive" : "menu")}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/category/NEW`}
              className={({ isActive }) => (isActive ? "menuActive" : "menu")}
            >
              new-collection
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/category/SALE`}
              className={({ isActive }) => (isActive ? "menuActive" : "menu")}
            >
              {" "}
              sale
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </div>
  );
};

export default NavBar;
