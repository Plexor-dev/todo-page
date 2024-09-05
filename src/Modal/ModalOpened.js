import React from "react";
import { TodoContext } from "../TodoContext";
import './modal.css'

function ModalOpened() {
    const {setOpenModal} = React.useContext(TodoContext)

    const closeModal = () => setOpenModal(prevS => !prevS)

    return (
        <div className="modal-opened-container">
            <button onClick={closeModal} className="close-modal">X</button>
        <form name="modal">
            <label htmlFor='modal-input' name='modal'> Escribe tu nuevo ToDo..
            </label>
                <textarea id="modal-input" name='modal'placeholder='Escribe aqui..' className="modal-textarea"/> 
                <div className="button-container"> 
                    <button className='add-todo'>Añadir</button>
                    <button onClick={closeModal} className='close-todo'>Cancelar</button>
                </div>

        </form>
        </div>
    )
 }

 export { ModalOpened }