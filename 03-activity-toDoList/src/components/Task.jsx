import React from "react";

export default function Task({task, index, deleteTask}){
    return (
        <li>
            {task.text}
            <button onClick={() => deleteTask(index)}>Eliminar</button>
        </li>
    );
}