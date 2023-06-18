import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const TODOS = [{
    id: 1,
    name: "Buy milk"
}, {
    id: 2,
    name: "Buy eggs"
}, {
    id: 3,
    name: "Buy bread"
}];

export default function Dashboard() {
    const navigate = useNavigate();
    const [todo, setTodo] = useState(false);

    return (
        <>
        <Helmet>
            <title>Dashboard</title>
        </Helmet>
            <h1>Dashboard</h1>
            <p>This is a protected route.</p>
            <ul>
                {TODOS.map((todo) => (
                    <li key={todo.id}>
                        <Link to={`/app/todo/${todo.id}`} state={{  title: todo.name }}>{todo.name}</Link>
                    </li>
                ))}
            </ul>
            <input type="text" placeholder="To Do" onChange={(e) => setTodo(e.target.value)} />
            <button onClick={() => navigate(`/app/todo/${todo}`)}>Go to To Do</button>
        </>
    );
}