import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useState } from 'react';
import './form.css';

import { postDogs } from '../../redux/actions';

function Form() {


  const[input,setImput] = useState({
    name:"",
    weith:"",
    height:"",
    lifespam:"",
    image:"",
    temperament:"",
  });

  const[error,setError] = useState({
    name:"",
    weith:"",
    height:"",
    lifespam:"",
    image:"",
    temperament:"",
  });

  const validate=(input)=>{
    if (!/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/.test(input.name)){
       setError({...error,name:"Formato nombre invalido"})
       return
    }

    setError({...error,name:""})
  }

  const handleSubmit = async(e) => {
    e.preventDefault(); // Evitar el comportamiento de envío predeterminado

  
  };


function handlerChange(e) {
  setImput({
    ...input,
    [e.target.name]:e.target.value}
    );
  setImput({
    ...input,
    [e.target.image]:e.target.value}
    );




    validate({
      ...input,
      [e.target.name]:e.target.value
    })

    
}

  return (

    <div className="Form">
      <img src="./images/form/fondo.png" className='image-foreground' alt='lalala'/>
      <img src="./images/logo.png" alt='HeppyDogs'/>
      <h1>Agrega una nueva raza de perro:</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <span>{error.name}</span>
          <label>Nombre</label>
          <input name="name" value={input.value} onChange={handlerChange}/>
        </div>
        <div>
          <label>Peso</label>
          <input name="width"  value={input.value} onChange={handlerChange}/> 
        </div>
        <div>
          <label>Altura</label>
          <input name="height"  value={input.value} onChange={handlerChange}/>
        </div>
        <div>
          <label>Años de vida</label>
          <input name="lifespam" value={input.value} onChange={handlerChange}/>
        </div>
        <div>
          <label>URl Imagen:</label>
          <input name="image" value={input.value} onChange={handlerChange}/>
        </div>
        <span>{error.name}</span>
        {error.name ? null:<button type="submit">Agregar nueva raza</button>}
        <br/><Link to="/home"><button>Volver</button></Link>
      </form>
    </div>
  );
}

export default Form;