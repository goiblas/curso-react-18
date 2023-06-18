import { useState } from "react";

export default function Demo() {
    const [person, setPerson] = useState({
        firstName: "",
        lastName: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        const newPerson = {
            ...person,
            [name]: value
        }
        setPerson(newPerson);
    }

    // const handleChangeWithMutation = (event) => {
    //     const { name, value } = event.target;
    //     person[name] = value;

    //     setPerson(person);
    // }

    return (
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <input
                type="text"
                name="firstName"
                value={person.firstName}
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastName"
                value={person.lastName}
                onChange={handleChange}
            />
        </div>
    );
}