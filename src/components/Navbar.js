import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Navbar = ({ theme, switchTheme, getRandomQuote }) => {
  const { theme: themeColor } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar navbar-expand-lg ${themeColor.navbarColor} bg-transparent py-4`}
    >
      <div className="container-fluid">
        <a className="navbar-brand">Programming Quotes</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a onClick={getRandomQuote} className="nav-link">
                New Quote
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{ cursor: "point" }}
                onClick={switchTheme}
                className="nav-link"
              >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
