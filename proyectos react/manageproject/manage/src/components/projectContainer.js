import React from 'react';

class ProjectContainer extends React.Component{

  constructor(props){
    super(props);
    this.data = {}
  }

  render(){
    return(
      <React.Fragment>
        <div className="imgproject">
          <figure className="containerImg">
            <img src={this.props.img}
            alt="projectImage"
          />
          </figure>
          <div className="nameProject">
          <h1>{this.props.name}</h1>
          <h6>{this.props.description}</h6>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ProjectContainer;
