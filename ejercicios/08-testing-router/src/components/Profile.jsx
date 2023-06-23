import useUser from '../hooks/useUser'
import { Helmet } from "react-helmet-async"

export default function Profile() {
    const { logout, user } = useUser()
    return (
        <>
        <Helmet>
            <title>Perfil del usuario</title>
        </Helmet>
        <div>
            <h1>Perfil del usuario</h1>
            <p>Usuario: {user.name} {user.lastname}</p>
            <button className="button" onClick={logout}>
                Cerrar sesión
            </button>
        </div>
        </>
    )
}