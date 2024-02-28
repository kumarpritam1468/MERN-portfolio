import React, { useState } from 'react';
import { useAuth } from '../../store/auth';

// It uses the same css as Login and Register Page

const Contact = () => {

    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [userData, setUserData] = useState(true);

    const {user} = useAuth();

    if(user && userData){
        setContact({
            name: user.name,
            email: user.email,
            message: ""
        });

        setUserData(false);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]:value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <div className="formContainer">
                <div className="image">
                    <img src="./images/support.png" alt="" />
                </div>

                <div className="form">
                    <h1 className="main-heading">Contact Us!</h1>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={contact.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                value={contact.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea
                                type="text"
                                name="message"
                                cols="50"
                                rows="7"
                                value={contact.message}
                                onChange={handleChange}
                            />
                        </div>
                        <div type="submit" className="btn1">
                            Send
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Contact