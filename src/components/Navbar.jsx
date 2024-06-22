import "../styles/Navbar.css";
import { logo } from "../constant/index";
import { arrowIcon } from "../constant/index";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>Feature</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
        </select>
        <button>
          Sign Up <img src={arrowIcon} alt="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
