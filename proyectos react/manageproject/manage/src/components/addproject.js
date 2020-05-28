import React from  'react';

class NewProject extends React.Component{

  constructor(props) {
    super(props)
    this.state = {}
  }

  addName = e => { 
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  // addName = e => {
  //   console.log(e.target.value);    
  // }
  render(){
    return ( <div className="addProject">
      <p>{this.state.projectname}</p>
      <input type="text"
      onChange={this.addName}
      name="projectname"
      value={this.state.name}
      />
      <p>{this.state.url}</p>
      <input type="url"
      onChange={this.addName}
      name="url"
      value={this.state.name}
      />
    </div>
    )
  }
}

export default NewProject;
