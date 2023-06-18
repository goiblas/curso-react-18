import { Outlet, NavLink, ScrollRestoration } from "react-router-dom";

export default function Layout() {
    return (
        <div className="global">
            <ScrollRestoration />
            
            <header className="header">
                <nav className="nav">
                    <NavLink to="/app/dashboard">Dashboard</NavLink>
                    <NavLink to="/app/Profile">Profile</NavLink>
                </nav>
            </header>
            <main className="main">
                <Outlet />
            </main>
        </div>
    );
}