import "./Header.scss";
import { ArrowRight, Menu } from "lucide-react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar__logo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>

          <button className="navbar__hamburger">
            <Menu size={28} />
          </button>

          <ul className="navbar__collection">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">
                Book a call <ArrowRight />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
