import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
// import '../style.css'
// import '../country.css'

function Header() {
  const [isDark,setisDark] = useContext(ThemeContext);
  // if(isDark){
  //   document.body.classList.add('dark')
  // }
  // else{
  //   document.body.classList.remove('dark')
  // }

  return (
    <>
        <header className={`header-container ${isDark ? 'dark': ''}`}>
        <div className="header-content">
            <h2 className="title"><a href="/" className="header-text">Where in the World?</a></h2>
            <p className="theme-changer" onClick={()=> {
                setisDark(!isDark)
                localStorage.setItem('isDarkMode', !isDark)
              }}>
                <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp;<span className="theme-text">{isDark ? "Light" : "Dark"} Mode</span></p>
        
        </div>
        </header>
    </>
  )
}

export default Header