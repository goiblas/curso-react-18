import { useState, useEffect } from "react";

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


const getUsers = async () => {
    await sleep(5000);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return users;
}
export default function Demo() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users);
            setLoading(false);
        });
    }, []);

    if(loading) {
        return <p>Loading...</p>
    }
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}