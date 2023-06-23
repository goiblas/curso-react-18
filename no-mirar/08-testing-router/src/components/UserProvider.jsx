import UserContext from "../contexts/UserContext";
import { useState } from "react";

export default function UserProvider({ children }) {
    const [user, setUser] = useState(() => {
      const user = localStorage.getItem("user")
      return user ? JSON.parse(user) : null
    })

    const hanldeLogout = () => {
      setUser(null)
      localStorage.removeItem("user")
    }
    
    const handleLogin = (user) => {
      setUser(user)
      localStorage.setItem("user", JSON.stringify(user))
    }
  
    const contextValue = {
      user: user,
      login: handleLogin,
      logout: hanldeLogout,
    }
  
    return (
      <UserContext.Provider value={contextValue}>
        {children}
      </UserContext.Provider>
    )
}