import React, { useState } from 'react';

// It uses same css as register page so it has same names
import './Form.css';

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <div className="formContainer">
                <div className="image">
                    <img src="./images/login.png" alt="" />
                </div>

                <div className="form">
                    <h1 className="main-heading">Login form</h1>
                    <br />
                    <form onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                value={user.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleInput}
                            />
                        </div>
                        <div type="submit" className="btn1">
                            Login
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Login