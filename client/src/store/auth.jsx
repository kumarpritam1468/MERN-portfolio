import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");

    const storeToken = (serverToken) => {
        return localStorage.setItem('token', serverToken);
    }

    let isLoggedIn = !!token;

    const LogoutUser = () => {
        setToken('');
        return localStorage.removeItem('token');
    }

    // jwt authentication

    const userAuthentication = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/user', {
                method : "GET",
                headers : {
                    Authorization: `Bearer ${token}`
                }
            });

            if(response.ok){
                const data = await response.json();
                setUser(data.userData);
            }
        } catch (error) {
            console.error("Error fetching userData");
        }
    }

    useEffect(() => {
        userAuthentication();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeToken, LogoutUser, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}