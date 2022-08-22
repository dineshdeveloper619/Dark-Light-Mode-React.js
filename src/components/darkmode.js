import React from "react";
import Navbar from "./navbar";
import Card from "./card";
import "./App.css"
const DarkMode =()=>{
    return(
        <>
        <Navbar/>
        <div className="container">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        </>
    )
};

export default DarkMode;