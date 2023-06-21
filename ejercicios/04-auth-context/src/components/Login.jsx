import { useState } from 'react'

export default function Login({ onLogin }) {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onLogin({ name, lastname })
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