import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoItem } from '../TodoItem';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { ModalOpened } from '../Modal/ModalOpened';
import React from 'react';


function AppUI(){
    const { 
      loading,
      error,
      // completedTodos,
      // totalTodos,
      // allCompleted,
      // zeroTodos,
      // searchValue,
      // setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      emptyTask,
      openModal,
          } = React.useContext(TodoContext);
    return (
      <>
        <TodoCounter /*
          completed={completedTodos}
          total={totalTodos}
          allCompleted={allCompleted()}
          zeroTodos={zeroTodos()}
        *//>
        <TodoSearch /*searchValue={searchValue} setSearchValue={setSearchValue}*/ />
          {
            <TodoList>
              {loading && !error && <TodosLoading />}
              {error && <TodosError />}
              {emptyTask && (
                <EmptyTodos />
              )}

              {searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  deleteTodo={() => deleteTodo(todo.text)}
                />
              ))}
        {!loading && <CreateTodoButton />}
            </TodoList>
          }
          {openModal && (<Modal>
            <ModalOpened />
          </Modal>)}
        
      </>
    );
}

export { AppUI };