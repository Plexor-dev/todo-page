import React from 'react';

function UseMockApi(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const apiUrl = `https://66db1f4ef47a05d55be72212.mockapi.io/todos/todos`; //mirar bien el itemName para hacer diferentes endpoints en caso de quererlo

  React.useEffect(() => {
    setTimeout(() => {
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error al obtener los datos');
          }
          return response.json();
        })
        .then(data => {
          if (data.length === 0) {
            // Si la API no tiene datos, los inicializamos
            setItem(initialValue);
          } else {
            setItem(data);
          }
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    }, 2000); //un settimeout para esperar un poco y ver la animacion
  }, [itemName, initialValue, apiUrl]);

  const saveItem = (newTodos) => {
    // Simula actualizar la lista de todos en MockAPI
    Promise.all(
      newTodos.map(todo =>
        todo.id
          ? // Si el todo tiene un id, actualizamos
            fetch(`${apiUrl}/${todo.id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(todo),
            }).then(response => response.json())
          : // Si no tiene id, creamos un nuevo todo
            fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(todo),
            }).then(response => response.json())
      )
    )
      .then(updatedTodos => {
        setItem(updatedTodos);
      })
      .catch(() => {
        setError(true);
      });
  };

  return { item, saveItem, loading, error };
}

export { UseMockApi };
