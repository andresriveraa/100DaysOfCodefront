import React from 'react';
import Add from '../components/addproject';       
import ProjectsContainer from '../components/projectContainer';       

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
      <React.Fragment>      
        <Add load="50" addName={this.addName}
        formValues={this.state.form} />
        <p>hello projects page</p>
        <ul>
          {this.state.forProof.map((num) => {
            return(
              <li key={num.toString()}>
                {num}
              </li>
            )
          })}
        </ul>
        <Link to="/">load</Link>
        <ProjectsContainer 
        name="Manager Projcts"
        img="https://images.unsplash.com/photo-1588615419966-0c0f3bb797b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        description="este es un projecto de prueba"
        />
      </React.Fragment>
    )
  }
}

export default Projects;
