import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function useUser() {
    const contextValue = useContext(UserContext);
    
    if (!contextValue) {
        throw new Error("useUser debe estar dentro de un UserProvider");
    }

    return contextValue;
}