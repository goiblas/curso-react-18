import { useState } from 'react'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserContext from './contexts/UserContext';

function App() {
  const [user, setUser] = useState(null)

  const hanldeLogout = () => setUser(null)
  const handleLogin = (user) => setUser(user)

  const contextValue = {
    user: user,
    login: handleLogin,
    logout: hanldeLogout,
  }

  return (
    <UserContext.Provider value={contextValue}>
      {!user && <Login onLogin={handleLogin} />}
      {user && <Dashboard />}
    </UserContext.Provider>
  )
}

export default App
