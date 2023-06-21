import { Outlet } from 'react-router-dom';
import { NavLink, Navigate } from 'react-router-dom';

import useUser from '../hooks/useUser';

export default function Dashboard() {
    const { user } = useUser();

    if(!user) {
        return <Navigate to="/login" />
    }
    
    return (
        <div className='dashboard'>
            <header className='header'>
                <h1 className='header__title'>Dashboard</h1>
                <div className='tabs'>
                    <NavLink to="/dashboard" className={({isActive}) => `tab ${isActive ? "tab--actived": ""}`} end>Dashboard</NavLink>
                    <NavLink to="/dashboard/reports" className={({isActive}) => `tab ${isActive ? "tab--actived": ""}`}>Informes</NavLink>
                    <NavLink to="/dashboard/profile" className={({isActive}) => `tab ${isActive ? "tab--actived": ""}`}>Perfil</NavLink>
                </div>
            </header>
            <div className='content'>
                <Outlet />
            </div>
        </div>
    )
}