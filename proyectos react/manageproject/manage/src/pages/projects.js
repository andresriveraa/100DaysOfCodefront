import React from 'react';
import Add from '../components/addproject';       

class Projects extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      form: {
        projectname:'',
        url: '',
      },
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
      </div>
    )
  }
}

export default Projects;
