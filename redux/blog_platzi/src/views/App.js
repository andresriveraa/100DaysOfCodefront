import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import '../index.css';

import Menu from '../components/menu';
import User from '../components/usuarios/index'
import Error from './error'
import Task from './task'
import Posts from './posts'

const App = () => {
  return(
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Menu />
          <Switch className="rutas">
            <Route exact path="/" component={User} />
            <Route exact path="/user" component={User} />
            <Route exact path="/task" component={ Task } />
            <Route exact path="/posts" component={ Posts } />
            {/*<Route exact path="/feyman" component={metodoFyman} />
            <Route exact path="/" component={Load} />*/}
            <Route component={Error} />             
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  )
}


export default App;
