import { TodoContext } from '../TodoContext';
import './createTodoButton.css';
import React, { useContext, useEffect, useState } from 'react';




function CreateTodoButton(){
  const {setOpenModal} = useContext(TodoContext);

  function openButton(){
    setOpenModal(estadoPrevio => !estadoPrevio)
    }
    

    const [randomClass, setRandomClass] = useState('');
    useEffect(() => {
    // Definir las clases disponibles
    const classes = ['todoButton1', 'todoButton2', 'todoButton3'];

    // Seleccionar una clase al azar
    const randomIndex = Math.floor(Math.random() * classes.length);
    const selectedClass = classes[randomIndex];

    // Establecer la clase seleccionada en el estado
    setRandomClass(selectedClass);

  }, [randomClass]);

    return (
        <button onClick={openButton} className={randomClass}>+</button>
    )
}

export { CreateTodoButton };