import React from 'react';

function error (){
  // const [query, setQuery] = React.useState('');
  return(
    <React.Fragment>
      <p>pagina no encontrada</p>
      <input type="text" name="" id=""
      value=""
      onChange={(e) => {
        console.log(e.target.value);        
      }}
      />
    </React.Fragment>
  )
}

export default error;
