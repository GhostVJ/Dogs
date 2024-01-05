import { Link } from "react-router-dom";
import './card.css';

function Card({dog}) {

  //console.log(dog);

   const {image, name, temperaments, weight, id} = dog
  return (
    <div className="Card">
    <img src={image} /><hr/>
    <h3>{name}</h3>
    <h5>{temperaments}</h5>
    <h5>{weight} kg</h5>
    <Link to={`home/${id}`}>Detalles</Link>



    </div>
  );
}

export default Card;