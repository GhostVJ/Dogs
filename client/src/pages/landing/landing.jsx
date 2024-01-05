import React from 'react';
import { useHistory } from 'react-router-dom';
import "./landing.css";

const LandingPage = () => {
  const history = useHistory();

  const handleEnterClick = () => {
    history.push('/Home');
  };

  return (
    <div>
      <img src="./images/landing/fondo.png" alt="Heppy Dogs" /><br/>
      <button onClick={handleEnterClick} className="bounce-top">Ingresar</button>
    </div>
  );
};

export default LandingPage;