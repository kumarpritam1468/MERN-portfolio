import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from '../../store/auth';
import {toast} from 'react-toastify';
import './Form.css';

const Register = () => {
    
    const navigate = useNavigate();
    
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
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://pritam-mern.onrender.com/api/auth/register`, {
                method:'POST',
                headers :{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
            });
            
            const resData = await response.json();
            if(response.ok){
                setUser({
                    name:"",
                    email:"",
                    phone:"",
                    password:""
                });
                toast.success("Registration Successful");
                navigate("/login");
            }
            else{
                toast.error(resData.extraDetails ? resData.extraDetails : resData.message);
            }
            
        } catch (error) {
            console.log("Register", error);
        }
    };
    
    return (
        <>
            <div className="formContainer">
                <div className="image">
                    <img src="./images/register.png" alt="" />
                </div>

                <div className="form">
                    <h1 className="main-heading">Registration form</h1>
                    <br />
                    <form onSubmit={handleSubmit} >
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleInput}
                            />
                        </div>
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
                                value={user.password}
                                onChange={handleInput}
                            />
                        </div>
                        <button type="submit" className="btn1">
                            Register Now
                        </button>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Register