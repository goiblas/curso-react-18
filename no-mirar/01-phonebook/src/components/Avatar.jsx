import stringToColor from 'string-to-color'

function getInitials(name) {
  const [firstName, lastName = ""] = name.split(' ')
  return `${firstName.charAt(0)}${lastName.charAt(0)}`
}

export default function Avatar({ url, name }) {
  if(!url) {
    const initials = getInitials(name)
    const color = stringToColor(name)

    return <div className="avatar avatar--initials" style={{ backgroundColor: color}}>{initials}</div>
  }

  return (
    <img className="avatar" src={url} alt={name} width="100" height="100" />
  )
}