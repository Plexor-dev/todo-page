import React from 'react';
import { AppUI } from './AppUI'
import { TodoProvider } from '../TodoContext';



function App() {

  return (
    
    <TodoProvider>
      <AppUI 
      // loading={loading}
      // error={error}
      // completedTodos={completedTodos}
      // totalTodos={totalTodos}
      // allCompleted={allCompleted}
      // zeroTodos={zeroTodos}
      // searchValue={searchValue}
      // setSearchValue={setSearchValue}
      // searchedTodos={searchedTodos}
      // completeTodo ={completeTodo}
      // deleteTodo={deleteTodo}
      />
    </TodoProvider>
  )
}

export default App;
