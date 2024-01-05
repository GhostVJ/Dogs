
import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { getByName, getDogs } from '../../redux/actions';

import Cards from '../../components/cards/cards';
import Navbar from '../../components/navbar/navbar';


import './home.css';

function Home() {
    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.allDogs);
    const [searchString, setSearchString] = useState("");

    function handleChange(e) {
      e.preventDefault();
      setSearchString(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();
      dispatch(getByName(searchString))
    }


useEffect(()=>{
    dispatch(getDogs())
},[dispatch])

  return (
    <div className="App">
      <img src="./images/home/fondo.jpg" className='image-foreground' alt='HeppyDogs'/>
      <img src="./images/logo.png" alt='HeppyDogs'/>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Cards allDogs={allDogs}/>
    </div>
  );
}

export default Home;