import React from 'react';
import './Css/NavBar.css'
import { NavLink } from 'react-router-dom';

function NavBar() {


    return (
        
        <div className="navbar">

            <button className="nav"><NavLink to="/" id='nav'> Home </NavLink></button>
            <button className='nav'><NavLink to="/about" id='nav'>About</NavLink></button>
            <button className="nav"><NavLink to="/shop" id='nav'>Store</NavLink></button>
            <button className='nav'><NavLink to="/cart" id='nav'>Cart</NavLink></button>

        </div>
    );
};

export default NavBar;