import { useEffect} from 'react';
import { useLocation, Outlet } from "react-router-dom";
import { useAuth } from './AuthProvider';

export default function TrackingProvider() {
    const { pathname } = useLocation();
    const { user } = useAuth();

    useEffect(() => {
        console.log(`Visit: ${location.pathname}`);
    }, [pathname]);

    useEffect(() => {
        if(user) {
            console.log(`User ${user.name} is logged in.`);
        }
    }, [user]);

    return (
        <Outlet />
    );
}