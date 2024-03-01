import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");
    const [services, setServices] = useState("");

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

    // services page

    const getServices = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/data/services', {
                method:"GET"
            })

            if(response.ok){
                const data = await response.json();
                setServices(data);
                console.log(services);
            }
        } catch (error) {
            console.error("Error fetching Services");
        }
    }

    useEffect(() => {
        userAuthentication();
        getServices();
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeToken, LogoutUser, user, services }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}