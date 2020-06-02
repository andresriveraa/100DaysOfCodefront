import React from 'react';

class AddNote extends React.Component{
 
  render (){
    return(
      <React.Fragment>
        <div className="addComment">
          <input type="text" name="note" 
          placeholder="Añade una nota"
          value={this.props.formValues.notes}
          onChange={this.props.addNote} id="note"/>
          <button className="sendcoment"
          >Send!</button>
        </div>
      </React.Fragment>
    )
  }
}

export default AddNote;
