import { Link, useLocation } from "react-router-dom";

import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className={`header ${pathname !== "/" ? "with-background" : ""}`}>
      <div />
      <Link to="/" className="logo">
        <p>La vita è bella</p>
        <img src={logo} alt="No content" />
      </Link>
    </div>
  );
};

export default Header;
