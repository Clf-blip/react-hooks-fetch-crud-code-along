import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} {onDarkModeClick}
      </button>
    </header>
  );
}

export default Header;
