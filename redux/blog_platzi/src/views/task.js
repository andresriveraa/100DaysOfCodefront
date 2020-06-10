import React from 'react';

class Task extends React.Component {
  constructor(){
    super()
  }

  componentDidMount(){
    // hacer peticiones api
  }

  componentDidUpdate(prePros, preState){
    // aqui hacemos peticiones y 
    // podemos actualizar directamente el state
  }

  componentWillUnmount(){
    // ultimo componente en salir
  }
  
  render(){
    return(
      <p>hello task</p>
    )
  }
}

export default Task;
