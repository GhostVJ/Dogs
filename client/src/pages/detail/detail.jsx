import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { getByID } from '../../redux/actions';


import './detail.css';

function Detail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
 
  //console.log(id);

  const detailDog = useSelector((state) => state.detailDog);  

  useEffect(()=>{
    dispatch(getByID(id));
  },[dispatch,id]);

 

  console.log(detailDog.name)
  return (
    <div className="Detail">
      <Link to="/home"><button>Volver</button></Link><br/>
      <img src={detailDog.image} alt="NO se puede visualizar la imagen"/>
      <div>

      <h1>Detalles</h1>
      <h3>Id: {id}</h3>
      <h3>Nombre:{detailDog.name}</h3>
      <h3>Altura:{detailDog.weight}</h3>
      <h3>Peso:{detailDog.height}</h3>
      <h3>Temperamentos:{detailDog.temperaments}</h3>
      <h3>Años de vida:{detailDog.lifespan}</h3>
      </div>
      <Link to="/home"><button>Volver</button></Link>
    </div>
  );
}

export default Detail;