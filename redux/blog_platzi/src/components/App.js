import React from 'react';
import '../index.css';

const App = () => {

  const ponerFilas = () => [
    <tr>
      <td>andres</td>
      <td>andres@gmail.com</td>
      <td>de aquico</td>
    </tr>
  ]
  return (
    <div className="App margen">
      <table className="tabla">
        <thead>
          <th>name</th>
          <th>correo</th>
          <th>enlace</th>
        </thead>
        <tbody>
          {ponerFilas()}
        </tbody>
      </table>
    </div>
  );
}

export default App;
