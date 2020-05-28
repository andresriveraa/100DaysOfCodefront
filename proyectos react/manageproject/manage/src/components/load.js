import React from 'react';

// const Element = React.createElement('p', {}, 'hola soy un children');
class Load extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      load : 0,
    }
  }
 

  componentDidMount() {
    this.setState({load:this.state.load+15})
    // setTimeout(() => {
    //     this.setState({load:this.state.load+20})
    // }, 1000)
    // setTimeout(() => {
    //     this.setState({load:this.state.load+29})
    // }, 2000)
    // setTimeout(() => {
    //     this.setState({load:this.state.load+25})
    // }, 4000)
    // setTimeout(() => {
    //     this.setState({load:this.state.load+10})
    // }, 5000)
  }
  
  render() {
    return (
      <div className="load">
        <p className="load--text">Cargando proyectos</p>
        <p className="load--number">{this.state.load}%</p>  
        <div className="bar-load">
          <div className="bar--bakground"></div>
          <div className="bar__progress"></div>
        </div>
      </div>
    )
  }
}
export default Load;
