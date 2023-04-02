import React from 'react'
import  './navbarStyle.css'
import {Link} from 'react-router-dom'
export default function 
() {
  return (
    <div>
        <div className="nav">
            <input type="checkbox" id="nav-check"/>
            <div className="nav-header">
                <div className="nav-title">
                Nabadisha
                </div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                <span></span>
                <span></span>
                <span></span>
                </label>
            </div>
            
            <div className="nav-links">
                <Link to="//github.io/jo_geek" >Home</Link>
                <Link to="http://stackoverflow.com/users/4084003/">About</Link>
                <Link to="https://in.linkedin.com/in/jonesvinothjoseph" >Gallery</Link>
                <Link to="/login" >login </Link>
                <Link to="/sign_up">Signup</Link>
            </div>
        </div>
    </div>
  )
}

