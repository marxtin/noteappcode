import React from "react";

const Header = ({ handleToggleDarkMode, darkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button onClick={() => handleToggleDarkMode((prev)=>!prev)} className="toggleModeButton">
        <span className="sunMoon">{darkMode ? '🌝' : '🌞' }</span>
      </button>
    </div>
  );
};

export default Header;
