import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Menu from '../menu';
import * as usuarioActions from '../../actions/userAction'

class Users extends Component{
  
componentDidMount(){
  //   await fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((res) => res.json())
  //   .then( myJson => {
  //     this.setState(
  //       {
  //         users: myJson
  //       }
  //     )
  //   })
    this.props.traerTodos()
  }

  render() {
    // console.log(this.props);
    
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
              {this.props.users.map((usr)=> (
                <tr key={usr.id}>
                  <td>{usr.name}</td>
                  <td>{usr.username}</td>
                  <td>{usr.email}</td>
                </tr>))}             
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.userReducer
}

export default connect(mapStateToProps, usuarioActions)(Users);
