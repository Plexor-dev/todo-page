import React from "react";
import {createPortal} from "react-dom";
import './modal.css'

function Modal({children}) {

    

    return createPortal(
        <div className="modal-container">
            {children}
        </div>,
        document.getElementById('modal-root')
    )
}

export { Modal };