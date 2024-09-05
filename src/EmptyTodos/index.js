import React, { useContext } from "react";
import './EmptyTodos.css'
import { TodoContext } from "../TodoContext";

function EmptyTodos(){
    const {emptyTask, totalTodos} = useContext(TodoContext)

    const task = emptyTask && totalTodos > 0 ? 'No se encontraron tareas' : 'Escribe tu primer tarea';
    
    return (
        <div className="emptyTodos">
            <h3>{task}</h3>
        </div>
    )

}

export { EmptyTodos };