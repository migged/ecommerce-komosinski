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
              to={`/category/categoryId1`}
              className={({ isActive }) => (isActive ? "menuActive" : "menu")}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/category/categoryId2`}
              className={({ isActive }) => (isActive ? "menuActive" : "menu")}
            >
              collection
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/category/categoryId3`}
              className={({ isActive }) => (isActive ? "menuActive" : "menu")}
            >
              {" "}
              market
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/category/categoryId4`}
              className={({ isActive }) => (isActive ? "menuActive" : "menu")}
            >
              profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </div>
  );
};

export default NavBar;
