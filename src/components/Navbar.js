import React from "react";   // React.Fragment , React.createElement in jsx
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        <div className="my_navbar">
           <Link to="/" style={{textDecoration: "none"}}><h1 style={{color: '#4064AC'}}>MoviesApp</h1></Link> 
           <Link to="/favourites" style={{textDecoration: "none"}}><span style={{color: '#4064AC',fontSize:'1.5rem',marginLeft:'100px',fontWeight:'bold' }}>Favourites</span></Link>
        </div>
    );
}

export default Navbar;