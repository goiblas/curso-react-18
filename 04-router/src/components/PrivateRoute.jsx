import { useAuth } from "./AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "./Loading";
import Layout from "./Layout";

export default function PrivateRoute() {
    const { isLoading, user } = useAuth();

    if (isLoading) {
        return <Loading />;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return<Layout><Outlet /></Layout>;
}