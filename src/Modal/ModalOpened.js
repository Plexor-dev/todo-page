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
            <label htmlFor='modal-input' name='modal'> 
                <input id="modal-input" name='modal' type='text' placeholder='escribe aqui..' className="modal-textarea"/> 
            </label>
        </form>
        </div>
    )
 }

 export { ModalOpened }