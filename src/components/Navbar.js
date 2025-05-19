import "../styles/Navbar.scss";
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/assets/website-logo.png" alt="Kyowa Kirin" className="website-logo" /> 
        <span className="header">HUB</span>
        <ul className="navbar-links">
          <li><a href="/therapy-areas">Therapy Areas</a></li>
          <li><a href="/products">Our Products</a></li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="search">
          <input type="text" placeholder="Search" />
          <button aria-label="Search">
            <FaSearch />
          </button>
        </div>
        <div className="user">
          <span>Mary</span>
          <FaUserCircle size={24} />
        </div>
      </div>
    </nav>
  );
};
  
export default Navbar;
