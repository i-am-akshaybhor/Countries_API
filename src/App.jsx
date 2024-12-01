import React, { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import './App.css'


function App() {
  const [isDark,setisDark] = useState(JSON.parse(localStorage.getItem("isDarkMode")))

  return (
    <ThemeContext.Provider value={[isDark,setisDark]}>
      <Header/>
      <Outlet/>
     
    </ThemeContext.Provider>
  );
}

export default App;
