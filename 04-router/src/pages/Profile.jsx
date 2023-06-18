import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";
import { Helmet } from "react-helmet-async";

export default function Profile() {
    const { user, logout } = useAuth();
    return (
        <>
        <Helmet>
            <title>Profile</title>
        </Helmet>
        
        <h1>Profile, {user.name}</h1>
        <p>This is a protected route.</p>
        <Link to="/app/dashboard">Dashboard</Link>

        <hr />

        <button onClick={logout}>Logout</button>
        </>
    );
}