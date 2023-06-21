import { Navigate, Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function PublicRoute() {
    const { user } = useUser()

    if (user) {
        return <Navigate to="/dashboard" />;
    }

    return <Outlet />;
}