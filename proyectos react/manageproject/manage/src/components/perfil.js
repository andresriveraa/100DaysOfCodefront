import React, {Component} from 'react';

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      proof: 'Hello, world'
    }
  }
  componentWillMount(){
    // aqui hacemos peticiones a api
  }

  componentDidUpdate(prepProps, prevState){
  //  aqui hacemos la peticion y actualizamos stado
  }
  
  componentWillUnmount(){
    // ultimo componente en salir
  }
  
  render(){
    return(
      <p>{this.state.proof}</p>
    )
  }
}

export default Profile;
