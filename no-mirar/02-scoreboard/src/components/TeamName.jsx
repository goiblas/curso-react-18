import { useEffect, useState } from "react"

export default function TeamName({  name: initialName, onChange }) {
    const [name, setName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setName(initialName);
    }, [initialName]);

    const handleSave = () => {
        setIsEditing(false);
        onChange(name);
    }

    const handleCancel = () => {
        setIsEditing(false);
        setName(initialName);
    }

    if(isEditing) {
        return (
            <div className="edit-form">
                <input className="textfield" type="text" autoFocus value={name} onChange={ev => setName(ev.target.value)} />
                <button type="submit" onClick={handleSave}>Save</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
        )
    }

    return (
        <div className="name">
            {name}
            <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
        </div>
    )
}