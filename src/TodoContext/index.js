import React from "react";
import { UseLocalStorage } from "./UseLocalStorage";

const TodoContext = React.createContext();


function TodoProvider({children}){

  const [ openModal, setOpenModal ]= React.useState(!false);

    const {item: todos, 
        saveItem: saveTodos,
        loading,
        error,
        } = UseLocalStorage('TODOS_V1', []);
    const [ searchValue, setSearchValue ] = React.useState('');
  //console.log(searchValue)
  
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => !!todo.completed).length;

  const allCompleted = completedTodos === totalTodos;
  

   const searchedTodos = todos.filter(todo => { return todo.text.toLowerCase().includes(searchValue.toLowerCase())});


  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false
    })
    saveTodos(newTodos)
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex(todo => todo.text === text)
    newTodos[indexTodo].completed = !newTodos[indexTodo].completed;
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex(todo => todo.text === text)
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos)
  }

  

  const emptyTask = !loading && searchedTodos.length === 0 && !error;

    return (
        <TodoContext.Provider value={{
            addTodo,  
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