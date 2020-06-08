import React, {Component} from 'react';
import '../index.css';

import axios from 'axios';

import user from '../data/data'

// const App = () => {
class App extends Component{

  constructor(){
    super();
    this.state = {
      ponerFilas:[]
    } 
  }
  
  async componentDidMount(){
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then( myJson => {
      this.setState(
        {
          ponerFilas: myJson
        }
      )
    })
  }

  render() {
    return (
      <div className="App margen">
        <table className="tabla">
          <thead>
            <tr>
              <th>name</th>
              <th>correo</th>
              <th>enlace</th>
            </tr>
          </thead>
          <tbody>
              {this.state.ponerFilas.map((usr)=> (
                <tr>
                  <td key={usr.uid}>{usr.name}</td>
                  <td key={usr.ids}>{usr.username}</td>
                  <td key={usr.iid}>{usr.email}</td>
                </tr>))}             
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
