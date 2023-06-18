import { useAuth } from "../components/AuthProvider";
import { Helmet } from "react-helmet-async";

export default function Login() {
    const {login} = useAuth();
    
    return (
        <>
        <Helmet>
            <title>Login</title>
        </Helmet>
        <h1>Login</h1>
        <button onClick={login}>Login</button>
        </>
    );
}