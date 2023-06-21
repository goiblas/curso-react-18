import { useState } from 'react'
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(null)

  const hanldeLogout = () => setUser(null)
  const handleLogin = (user) => setUser(user)

  return (
    <>
      {!user && <Login onLogin={handleLogin} />}
      {user && <Dashboard user={user} onLogout={hanldeLogout} />}
    </>
  )
}

export default App
