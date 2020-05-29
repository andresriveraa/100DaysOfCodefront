import React from  'react';

class NewProject extends React.Component{
  
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  // addName = e => { 
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   })
  // }

  render(){
    return (
    <div className="addProject">
      <label htmlFor="projectName">what is the project name?</label>
      {/* <p>{this.state.projectname}</p> */}
      <input type="text"
      id="projectName"
      onChange={this.props.addName}
      name="projectname"
      value={this.props.formValues.projectname}
      />
      <label htmlFor="urlProject">what is the project url?</label>
      {/* <p>{this.state.url}</p> */}
      <input type="url"
      id="urlProject"
      onChange={this.props.addName}
      name="url"
      value={this.props.formValues.url}
      />
    </div>
    )
  }
}

export default NewProject;
