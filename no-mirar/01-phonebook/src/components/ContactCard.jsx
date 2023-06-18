import { useState } from 'react'
import Avatar from './Avatar'
import FavButton from './FavButton'

export default function ContactCard({ avatar, name, phone, email }) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="contact-card">
      <Avatar url={avatar} name={name} />
      <div className="contact-card__info">
        <h2 className="contact-card__name">{name}</h2>
        <ul className="contact-card__details">
          <li>{phone}</li>
          {email && <li>{email}</li>}
        </ul>
      </div>
      <div className="contact-card__actions">
            <FavButton active={isFavorite} onToggle={() => setIsFavorite(!isFavorite)} />
        </div>
    </div>
  )
}
