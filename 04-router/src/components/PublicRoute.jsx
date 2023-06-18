import { useAuth } from "./AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "./Loading";

export default function PublicRoute() {
    const { isLoading, user } = useAuth();

    if (isLoading) {
        return <Loading />;
    }

    if (user) {
        return <Navigate to="/app/dashboard" />;
    }

    return <Outlet />;
}