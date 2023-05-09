import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Landing() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEnterClick = () => {
    // Dispara una acción de Redux para cambiar el estado de la aplicación
    dispatch({ type: 'ENTER_APP' });
    // Redirige al usuario a la home page
    history.push('/home');
  };

  return (
    <div className="landing-page">
      <img src="url-de-la-imagen" alt="Imagen representativa del proyecto" />
      <button onClick={handleEnterClick}>Ingresar</button>
    </div>
  );
}

export default Landing;
