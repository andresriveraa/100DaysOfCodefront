import React from 'react';

import AddNote from '../components/addNote'

class Fyman extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      notes : {},
    }
  }
  AddTitle = (e) => {
    console.log(e.target.value);    
  }

  AddComment = (e) => {
    console.log(e.target.value)
  }
  addNote = (e) => {
    let comment = 0;
    this.setState({
      notes: {
        ...this.state.notes,
        [`${comment}`] : e.target.value,
      }
    })
    console.log(e.target.value)
    comment+=1
  }

  render(){
    return(
      <React.Fragment>
        <h1>
          <input type="text"
          name="TitleClass"
          onChange={this.AddTitle}
          id="TitleClass"/>
        </h1>
        <AddNote addNote={this.addNote}
        formValues={this.state.notes} />
      </React.Fragment>
    )
  }
}

export default Fyman;
