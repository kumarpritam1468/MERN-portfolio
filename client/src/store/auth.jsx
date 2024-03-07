import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");
    const [services, setServices] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    
    const storeToken = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem('token', serverToken);
    }
    
    let isLoggedIn = !!token;
    
    const authorizationToken = `Bearer ${token}`;
    const LogoutUser = () => {
        setToken('');
        window.location.reload(false);
        return localStorage.removeItem('token');
    }
    
    // jwt authentication
    
    const userAuthentication = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/user', {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
                // setIsLoading(false);
            }
            else {
                console.error("Error fetching user data");
                // setIsLoading(false);
            }
        } catch (error) {
            // setIsLoading(false);
            console.error(error);
        }
    }

    // services page

    const getServices = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/data/services', {
                method: "GET"
            })

            if (response.ok) {
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
    }, [token]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeToken, LogoutUser, user, services, authorizationToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}