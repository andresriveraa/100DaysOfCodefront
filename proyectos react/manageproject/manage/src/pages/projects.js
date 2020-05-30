import React from 'react';
import Add from '../components/addproject';       

import { Link } from 'react-router-dom';

class Projects extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      form: {
        projectname:'',
        url: '',
      },
      forProof: [
        1, 2, 3,
      ]
    }
  }

  addName = e => { 
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  render(){
    return(
      <div className="projects">      
        <Add load="50" addName={this.addName}
        formValues={this.state.form} />
        <p>hello projects page</p>
        <ul>
          {this.state.forProof.map((num) => {
            return(
              <li>
                {num}
              </li>
            )
          })}
        </ul>
        <Link to="/">load</Link>
      </div>
    )
  }
}

export default Projects;
