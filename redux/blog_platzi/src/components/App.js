import React from 'react';
import '../index.css';

function App() {
  return (
    <div className="App margen">
      <table className="tabla">
        <thead>
          <th>name</th>
          <th>correo</th>
          <th>enlace</th>
        </thead>
        <tbody>
          <tr>
            <td>andres</td>
            <td>andres@gmail.com</td>
            <td>de aquico</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
