import React from "react";

const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <nav className="navbar">
      <h2 className="logo">
        <span className="logo-name">Shubham</span>{" "}
        <span className="logo-highlight">Portfolio</span>
      </h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="theme-btn" onClick={toggleTheme}>
        {darkMode ? "☀" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;