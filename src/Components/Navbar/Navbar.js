import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Navbar = () => {
    return (
        <div>
          <nav>
            <div className="logo">
                <h1>Front-end Quiz</h1>
            </div>
            <div className="links">
                <NavLink className={({isActive})=> isActive? 'active' :undefined} to='/home'>Home</NavLink>
                <NavLink  to='/statice'>Statitice</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>          
          </nav>
        </div>
    );
};

export default Navbar;