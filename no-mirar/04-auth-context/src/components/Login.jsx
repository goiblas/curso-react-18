import { useState, useContext } from 'react'
import UserContext from '../contexts/UserContext'

export default function Login() {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const { login } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        login({ name, lastname })
    }

    return (
        <div className='login-page'>
            <form onSubmit={handleSubmit} className='form'>
                <div className='fieldform'>
                    <label className='fieldform__label'>Nombre</label>
                    <input className='fieldform__input' type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className='fieldform mb-2'>
                    <label className='fieldform__label'>Apellidos</label>
                    <input className='fieldform__input' type="text" value={lastname} onChange={e => setLastname(e.target.value)} />
                </div>
                <button type='submit' className='button'>Iniciar sesión</button>
            </form>
        </div>
    )
}