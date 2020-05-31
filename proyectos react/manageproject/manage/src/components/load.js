import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './layout'
// const Element = React.createElement('p', {}, 'hola soy un children');
class Load extends React.Component {

  // aqui seria el created de vue
  constructor(props) {
    super(props)
    this.state = {
      load : 0,
    }
  }
//  sería el beforemount de vue
  componentDidMount() {
    this.setState({load:this.state.load+15})
    setTimeout(() => {
        this.setState({load:this.state.load+20})
    }, 1000)
    setTimeout(() => {
        this.setState({load:this.state.load+29})
    }, 2000)
    setTimeout(() => {
        this.setState({load:this.state.load+25})
    }, 4000)
    setTimeout(() => {
        this.setState({load:this.state.load+10})
    }, 5000)
  }

  // dismount
  componentWillUnmount(){
    console.log('dismount');
  }
  
  render() {
    return (
      <div className="load">
        <Link to="/projects">projects</Link>
        <Layout>
          <p>hehllo childrn</p>
        </Layout>
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
