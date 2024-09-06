import React from "react";
import { TodoContext } from "../TodoContext";
import './modal.css'

function ModalOpened() {
    const {setOpenModal, addTodo} = React.useContext(TodoContext);

    const [newTodo, setNewTodo] = React.useState('');

    const closeModal = () => setOpenModal(false);

    const onChangeValue = (event) => {
        setNewTodo(event.target.value)
    }

    const onSubmitForm = (event) => {
        if(newTodo === ''){
            closeModal();
        } else {
        event.preventDefault();
        addTodo(newTodo) 
        closeModal(); }
    }

    return (
        <div className="modal-opened-container">
            <button onClick={closeModal} className="close-modal">X</button>
        <form onSubmit={onSubmitForm} name="modal">
            <label htmlFor='modal-input' name='modal' className="label-container"> Escribe tus tareas pendientes..
            </label>
                <textarea value={newTodo} onChange={onChangeValue} id="modal-input" name='modal'placeholder='Escribe aqui..' className="modal-textarea"/> 
                <div className="button-container"> 
                    <button type="submit" className='add-todo'>Añadir</button>
                    <button onClick={closeModal} className='close-todo'>Cancelar</button>
                </div>

        </form>
        </div>
    )
 }

 export { ModalOpened }