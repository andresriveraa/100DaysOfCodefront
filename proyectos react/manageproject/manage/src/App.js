import React from 'react';
import logo from './logo.svg';
import './Styles/main.scss';
import Load from './components/load';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Load load="50"/>
      </header>
    </div>
  );
}

export default App;
