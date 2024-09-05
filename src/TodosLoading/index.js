import React from "react";
import './TodosLoading.css'

function TodosLoading(){
    return (
        <div className="loader">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    )
}

export { TodosLoading };