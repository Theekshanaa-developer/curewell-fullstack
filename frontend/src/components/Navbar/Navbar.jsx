import React from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo">CureWell</h1>

      <div className="nav-links">
        
        <Link to="/">Home</Link>
        <Link to="/doctors" >View Doctors</Link>
        <Link to="/specializations">View Specializations</Link>
       
        <Link to="/todaysurgeries">View Today's Surgery</Link>
        

        <Link to="/adddoctor">Add Doctor</Link>
      </div>
      
    </div>
  );
}

export default Navbar;