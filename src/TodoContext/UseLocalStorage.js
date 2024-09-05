import React from 'react';

function UseLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
          try {
            const getLocalStorage = localStorage.getItem(itemName);
      
            let parsedItem;
            
            if(!getLocalStorage) { 
              localStorage.setItem(itemName, JSON.stringify(initialValue))
              parsedItem = initialValue;
            } else {
              parsedItem = JSON.parse(getLocalStorage);
            }
      
            setLoading(false)
            setItem(parsedItem)
          } catch (e) {
            setLoading(false);
            setError(true);
          }
        }, 2000)
    },[itemName, initialValue])
  
    const saveItem = (newTodos) => {
      localStorage.setItem(itemName, JSON.stringify(newTodos))
      setItem(newTodos);
    };
  
  
    return {item, saveItem, loading, error}
  }


export { UseLocalStorage };