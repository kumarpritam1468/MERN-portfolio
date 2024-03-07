import React, { useState } from 'react';
import { useAuth } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// It uses the same css as Login and Register Page

const Contact = () => {
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [userData, setUserData] = useState(true);

    const { user } = useAuth();

    if (user && userData) {
        setContact({
            name: user.name,
            email: user.email,
            message: " "
        });

        setUserData(false);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...user,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://pritam-mern.onrender.com/api/form/contact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contact)
            })

            if (response.ok) {
                setContact({
                    message: ""
                });
                toast.success("Message Sent Successfully");
                navigate("/");
            }
        } catch (error) {
            console.error("Contact form error : ", error);
        }
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
                        <button type="submit" className="btn1">
                            Send
                        </button>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Contact