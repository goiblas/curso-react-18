import useUser from '../hooks/useUser'

export default function Profile() {
    const { logout, user } = useUser()
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