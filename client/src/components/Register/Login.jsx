import React, {useState} from 'react';

// It uses same css as register page so it has same names
import './Register.css';

const Login = () => {

    const [user, setUser] = useState({
        email:"",
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
                    <img src="./images/login.png" alt="" />
                </div>

                <div className="registerForm">
                    <h1 className="main-heading mb-3">Login form</h1>
                    <br />
                    <form onSubmit={handleSubmit} >
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
                        <button type="submit" className="btn btn-submit">
                            Login
                        </button>
                    </form>
                </div>
            </div >
    </>
  )
}

export default Login