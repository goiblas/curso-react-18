import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

export default function Profile() {
    const { logout, user } = useContext(UserContext)
    return (
        <div>
            <h1>Perfil del usuario</h1>
            <p>Usuario: {user.name} {user.lastname}</p>
            <button className="button" onClick={logout}>
                Cerrar sesión
            </button>
        </div>
    )
}