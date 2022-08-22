import React, { useEffect, useState } from "react";
import "./App.css";
const Navbar =()=>{
    const [theme,setTheme]=useState("light-theme")
    const toggleTheme=()=>{
        theme ==="dark-theme"
        ?setTheme("light-theme")
        :setTheme("dark-theme");
    };

    useEffect(()=>{
        document.body.className =theme;
    },[theme]);

    //  theme==="darktheme"?"dark":"light"
    return(
        
        <nav>
        <div className="left">
            <h2>RAVEN</h2>
        </div>
        <div className="right">
            <h3>{theme}</h3>
            <label htmlFor="checkbox" className="toggler">
              <input type="checkbox" id="checkbox" onClick={()=>toggleTheme()}></input>
              <span className="ball"></span>
              <i className="large sun icon"></i>
              <i className="large moon icon"></i>
            </label>
        </div>
      </nav>
        
    )
};

export default Navbar;