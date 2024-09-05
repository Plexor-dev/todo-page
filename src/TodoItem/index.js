import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoItem.css';

function TodoItem({text, completed, onComplete, deleteTodo}){
    const colorCompleted = completed ? ["colorGreen", "text-line-through"] : ["colorYellow"];

    return (
      <li className='item-container'>
        <button onClick={onComplete} className={`check-button ${colorCompleted[0]}`}><CompleteIcon completed={completed} /></button>
        
        <p className={`${colorCompleted[1]}`}>{text}</p>
        <button onClick={deleteTodo} className='delete-button'><DeleteIcon size="1.5em"/></button>
        
      </li>
    );
  }

export { TodoItem };