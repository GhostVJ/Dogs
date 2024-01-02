import './card.css';

function Card({dog}) {
   const {reference_image_id, name, temperament, weight} = dog
  return (
    <div className="Card">
    <h4>Imagen:{reference_image_id}</h4><hr/>
    <h4>Nombre:{name}</h4>
    <h4>Temperamentos:{temperament}</h4>
    <h4>Peso:{weight}</h4>



    </div>
  );
}

export default Card;