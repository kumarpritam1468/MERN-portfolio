import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <>
            <div className="error">
                <div className="errorBox">
                    <h2>404</h2>
                    <h1>Page note found</h1>
                    <p>Oops! It seems like the page you're trying to access doesn't exist. If you believe there's an issue, feel free to report it, and we'll look into it.</p>
                    <Link className="btn1" to="/" >
                        Home
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Error