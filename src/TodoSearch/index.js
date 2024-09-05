import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch(){
    const {searchValue, setSearchValue} = useContext(TodoContext);

    return(
        <div className='inputSearchContainer'>
        <input type='search'
        className="todoSearch" 
        placeholder="Buscar ToDo... " 
        value={searchValue}
        onChange={(event) => {
            //console.log('esto es todo SEArch')
            //console.log(event)
            setSearchValue(event.target.value)
        }}/>
        </div>
    )
}


export { TodoSearch };