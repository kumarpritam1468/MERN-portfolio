import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../../store/auth'
// It uses same css as register page so it has same names
import './Form.css';
import {toast} from 'react-toastify';

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const {storeToken} = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://pritam-mern.onrender.com/api/auth/login`, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            })

            if(response.ok){
                const resData = await response.json();
                storeToken(resData.token);
                setUser({
                    email:"",
                    password:""
                })
                toast.success("Login Successful");
                navigate("/");
            }
            else{
                toast.error("Invalid credentials");
            }
        } catch (error) {
            toast.error("Invalid Credentials!");
        }
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
                        <button type="submit" className="btn1">
                            Login
                        </button>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Login