import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">SNEAKER DAILY</div>

      <nav className="menu">
        <ul>
          <li>
            <a href="index.html">home</a>
          </li>
          <li>
            <a href="index.html">collection</a>
          </li>
          <li>
            <a href="index.html">market</a>
          </li>
          <li>
            <a href="index.html">profile</a>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </div>
  );
};

export default NavBar;
