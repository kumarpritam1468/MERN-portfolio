import React, { useState } from 'react';
import './Register.css';

const Register = () => {

    const [user, setUser] = useState({
        name:"",
        email:"",
        phone:"",
        password:""
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <>
            <div className="register">
                <div className="image">
                    <img src="./images/register.png" alt="" />
                </div>

                <div className="registerForm">
                    <h1 className="main-heading mb-3">Registration form</h1>
                    <br />
                    <form onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={user.name}
                                onChange={handleInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="email"
                                value={user.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="number"
                                name="phone"
                                value={user.phone}
                                onChange={handleInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                value={user.password}
                                onChange={handleInput}
                            />
                        </div>
                        <br />
                        <div type="submit" className="btn1">
                            Register Now
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Register