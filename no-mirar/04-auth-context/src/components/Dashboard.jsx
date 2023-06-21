import { useState } from 'react'
import Profile from './Profile';

const TABS = {
    ROOT: 'root',
    PROFILE: 'profile',
    REPORTS: 'reports',
}

export default function Dashboard() {
    const [tab, setTab] = useState(TABS.ROOT)
    return (
        <div className='dashboard'>
            <header className='header'>
                <h1 className='header__title'>Dashboard</h1>
                <div className='tabs'>
                    <button onClick={() => setTab(TABS.ROOT)} className={`tab ${tab === TABS.ROOT ? "tab--actived": ""}`}>Dashboard</button>
                    <button onClick={() => setTab(TABS.REPORTS)} className={`tab ${tab === TABS.REPORTS ? "tab--actived": ""}`}>Informes</button>
                    <button onClick={() => setTab(TABS.PROFILE)} className={`tab ${tab === TABS.PROFILE ? "tab--actived": ""}`}>Perfil</button>
                </div>
            </header>
            <div className='content'>
                {tab === TABS.ROOT && <h1>Root</h1>}
                {tab === TABS.REPORTS && <h1>Reports</h1>}
                {tab === TABS.PROFILE && <Profile />}
            </div>
        </div>
    )
}