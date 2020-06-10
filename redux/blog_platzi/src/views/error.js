import React from 'react'
import { Link } from 'react-router-dom';

function Error(){
  return(
    <div id="Error" className="Error">
      <p>upps no encontramos la página</p>
      <Link to="/">Volver inicio</Link>
    </div>
  )
}

export default Error;
