import { useEffect, useState, useContext } from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";


function TodoCounter() {
  const [randomClass, setRandomClass] = useState('');
  const {allCompleted, completedTodos, totalTodos} = useContext(TodoContext);
  useEffect(() => {
  // Definir las clases disponibles
  const classes = ['todoCount1', 'todoCount2', 'todoCount3'];

  // Seleccionar una clase al azar
  const randomIndex = Math.floor(Math.random() * classes.length);
  const selectedClass = classes[randomIndex];

  // Establecer la clase seleccionada en el estado
  setRandomClass(selectedClass);
}, [randomClass]);

    return ( 
<div className="todoCountContainer">
    {!totalTodos? (<h1 className={randomClass}>No hay Todos</h1>) : !!allCompleted ? (<h1 className={randomClass}>¡Completaste todas las tareas!</h1>) : (<h1 className={randomClass}>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas</h1>
)}
</div>
)}

export { TodoCounter };