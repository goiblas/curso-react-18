import { useReducer, useRef } from 'react';

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Comprar café', done: true },
  { id: 1, text: 'aprender react', done: false },
];

// const addTaskAction = (tasks, payload) => {
//   const newTask = {
//     id: payload.id,
//     text: payload.text,
//     done: false
//   };

//   tasks.push(newTask);

//   return tasks;
// }

function tasksReducer(tasks, payload) {
  switch (payload.type) {
    case 'added': {
      return addTaskAction(tasks, payload)
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === payload.task.id) {
          return payload.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== payload.id);
    }
    default: {
        return tasks;
    }
  }
}

export default function TaskApp() {
    const inputRef = useRef(null);
        
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    function handleChangeTask(task) {
        dispatch({
            type: 'changed',
            task: task
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'deleted',
            id: taskId
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const entries = Object.fromEntries(new FormData(e.target));
        if (!entries.text) return;
        
        dispatch({
            type: 'added',
            id: nextId++,
            text: entries.text,
        });

        inputRef.current.value = '';
    }

  return (
    <>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' name='text' ref={inputRef} />
            <button type='submit'>Add task</button>
        </form>  

        <ul style={{ padding:"20px 0", margin: 0, listStyle: "none"}}>
            {tasks.map(task => (
                <li key={task.id} style={{ display: "flex", gap: 6, padding: "4px 0" }}>
                    <input
                        type='checkbox'
                        checked={task.done}
                        onChange={() => handleChangeTask({
                            ...task,
                            done: !task.done
                        })}
                    />
                    <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                        {task.text}
                    </span>
                    <button type='button' onClick={() => handleDeleteTask(task.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    </>
  );
}
