
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { getDogs } from '../../redux/actions';

import Cards from '../../components/cards/cards';
import Navbar from '../../components/navbar/navbar';


import './home.css';

function Home() {
    const dispatch = useDispatch();
    const allDogs = useSelector((state)=>state.allDogs);

useEffect(()=>{
    dispatch(getDogs())
},[dispatch])

  return (
    <div className="App">
      <h1>Home</h1>
      <Navbar />
      <Cards allDogs={allDogs}/>
    </div>
  );
}

export default Home;