import React from 'react';
// import logo from './logo.svg';
import './Styles/main.scss';
import Load from './components/load';
import Error from './components/Error';
import Projects from './pages/projects';
import metodoFyman from './pages/metodoFyman';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Load load="50"/> */}
        {/* <Projects /> */}
        <BrowserRouter>
          <Switch className="rutas">
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/feyman" component={metodoFyman} />
            <Route exact path="/" component={Load} />
            <Route component={Error} />            
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
