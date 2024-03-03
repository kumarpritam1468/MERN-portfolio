import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import './Navbar.css';

const Navbar = () => {
    const { isLoggedIn } = useAuth();
    const location = useLocation();
    console.log(location.pathname);
    return (
        <>
                <div className={`${(location.pathname === '/admin') || (location.pathname === '/admin/messages') || (location.pathname === '/admin/services') ? 'navbar hidden' : 'navbar'}`}>
                <h2 className='colorText'>Pritam Kumar</h2>

                <div className="pages">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/services">Services</NavLink>

                    {isLoggedIn ?
                        (<NavLink to="/logout">Log Out</NavLink>) :
                        (<>
                            <NavLink to="/login">Log In</NavLink>
                            <NavLink to="/register">Register</NavLink>
                        </>)
                    }


                </div>
            </div>
        </>
    )
}

export default Navbar