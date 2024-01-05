import { useState } from 'react';
import Card from '../card/card';
import './cards.css';

function Cards({ allDogs }) {
  const [page, setPage] = useState(1); // Define page state here
  const [order, setOrder] = useState("name");

  const dogsList = allDogs?.sort((a, b) => {
    switch (order) {
      case "name":
        return a.name.localeCompare(b.name);
      case "weight":
        return a.weight - b.weight;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const pagedDogsList = dogsList?.slice((page - 1) * 8, page * 8);

  return (
    <div>
      <h2>Razas</h2>
        {/* Botones de paginación */}
        <button onClick={() => setPage(page - 1)}>Anterior</button>
        <button onClick={() => setPage(page + 1)}>Siguiente</button>

        {/* Botón/selector de ordenación */}
        <select value={order} onChange={(event) => setOrder(event.target.value)}>
          <option value="name">Ordenar por nombre</option>
          <option value="weight">Ordenar por peso</option>
        </select>

      <div className="Cards">
        {pagedDogsList?.map((dog) => (<Card dog={dog} />))}

        {/* Botones de paginación */}
        <button onClick={() => setPage(page - 1)}>Anterior</button>
        <button onClick={() => setPage(page + 1)}>Siguiente</button>
        
        {/* Botón/selector de ordenación */}
        <select value={order} onChange={(event) => setOrder(event.target.value)}>
          <option value="name">Ordenar por nombre</option>
          <option value="weight">Ordenar por peso</option>
        </select>
      </div>
    </div>
  );
}


export default Cards;