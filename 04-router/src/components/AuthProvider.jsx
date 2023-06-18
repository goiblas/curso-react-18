import {createContext, useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext({
    login: () => {},
    logout: () => {},
    user: null,
    isLoading: false
});

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const localUser = window.localStorage.getItem("user");
            if (localUser) {
                setUser(JSON.parse(localUser));
            }
            setIsLoading(false);
        }, 1000);
    }, []);

    const login = () => {
        const user = {
            name: "John Doe",
            email: ""
        }
        window.localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
    };

    const logout = () => {
        window.localStorage.removeItem("user");
        setUser(null);
    };

    return (
    <AuthContext.Provider value={{ login, logout, isLoading, user}}>
        {children}
    </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export function useAuth() {
    return useContext(AuthContext);
}