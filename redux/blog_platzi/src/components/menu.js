import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return(
    <div id="menu">
      <nav>
        <Link to="/">Home </Link>
        <Link to="/User">Ususarios</Link>
        <Link to="/task">Task</Link>
        <Link to="/posts">Posts</Link>
      </nav>
    </div>
  )
}

export default Menu;
