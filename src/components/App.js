import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode); 
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}> }
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList />
    </div>
  );
}

export default App;
