import React from 'react';
import { connect } from 'react-redux'

// actions 
import * as postActions from '../actions/postAction'

class Posts extends React.Component {
  componentDidMount(){
    this.props.traerPosts()
  }
  ponerpost = () => this.props.posts.map((post) => (
          <ul key={post.id}>
            <li><p >{post.title}</p></li>
          </ul>
        ))
  
  render(){
    
    return(
      <div className="posts">
        <div className="postTitle">
          {this.ponerpost()}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (reducers) => {
  return reducers.postReducer
}

export default connect(mapStateToProps, postActions)(Posts);
