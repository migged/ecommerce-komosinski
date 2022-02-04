import "./NavBar.css";

const NavBar = () => {
  return (
      <div className="navbar" >

      
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

        <div className="logo" > SNEAKERS DAILY </div>

    </div>
  );
};

export default NavBar;