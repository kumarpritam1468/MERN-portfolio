import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import { MdClose } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";
import './Navbar.css';

const Navbar = () => {
    const { isLoggedIn, user } = useAuth();
    const location = useLocation();
    const [clicked, setClicked] = useState(false);

    const isAdminPath = location.pathname.startsWith('/admin');
    return (
        <>
            <div className={`${(!isAdminPath) ? 'navbar' : 'navbar hidden'}`}>
                <div className="logo">
                    <img src="./images/logomy.png" alt="" />
                    <h2 className='colorText'>Pritam Kumar</h2>
                </div>

                <div className={clicked ? 'pages pagesActive' : 'pages'} onClick={() => setClicked(!clicked)}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    {user.isAdmin ? (<NavLink to="/admin">Admin</NavLink>) : (<></>)}
                    <NavLink to="/services">Services</NavLink>

                    {isLoggedIn ?
                        (<NavLink to="/logout">Log Out</NavLink>) :
                        (<>
                            <NavLink to="/login">Log In</NavLink>
                            <NavLink to="/register">Register</NavLink>
                        </>)
                    }


                </div>

                <div className="icon" onClick={() => setClicked(!clicked)}>
                    {clicked ? <MdClose /> : <RiMenu4Line />}
                </div>
            </div>
        </>
    )
}

export default Navbar