import React from "react";
import { UseLocalStorage } from "./UseLocalStorage";

const TodoContext = React.createContext();


function TodoProvider({children}){

  const [ openModal, setOpenModal ]= React.useState(false);

    const {item: countTodos, 
        saveItem: setCountTodos,
        loading,
        error,
        } = UseLocalStorage('TODOS_V1', []);
    const [ searchValue, setSearchValue ] = React.useState('');
  //console.log(searchValue)
  
  const totalTodos = countTodos.length;
  const completedTodos = countTodos.filter(todo => !!todo.completed).length;

  const allCompleted = completedTodos === totalTodos;
  

   const searchedTodos = countTodos.filter(todo => { return todo.text.toLowerCase().includes(searchValue.toLowerCase())});


  const completeTodo = (text) => {
    const newTodos = [...countTodos];
    const indexTodo = newTodos.findIndex(todo => todo.text === text)
    newTodos[indexTodo].completed = !newTodos[indexTodo].completed;
    setCountTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...countTodos];
    const indexTodo = newTodos.findIndex(todo => todo.text === text)
    newTodos.splice(indexTodo, 1);
    setCountTodos(newTodos)
  }

  

  const emptyTask = !loading && searchedTodos.length === 0 && !error;

    return (
        <TodoContext.Provider value={{  
            emptyTask,  
            loading,
            error,
            completedTodos,
            totalTodos,
            allCompleted,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
            }}>
            {children}    
        </TodoContext.Provider >
    )
}

export { TodoContext, TodoProvider };