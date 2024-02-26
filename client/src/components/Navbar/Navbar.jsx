import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <h2 className='colorText'>Pritam Kumar</h2>

                <div className="pages">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/login">Log In</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar