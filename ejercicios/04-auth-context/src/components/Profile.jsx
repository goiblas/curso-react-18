export default function Profile({ user, onLogout }) {
    return (
        <div>
            <h1>Perfil del usuario</h1>
            <p>Usuario: {user.name} {user.lastname}</p>
            <button className="button" onClick={onLogout}>
                Cerrar sesión
            </button>
        </div>
    )
}