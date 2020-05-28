import React from 'react';
// import logo from './logo.svg';
import './Styles/main.scss';
import Load from './components/load';
import Add from './components/addproject';
import Projects from './pages/projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Load load="50"/>
        <Add load="50"/>
        <Projects />
      </header>
    </div>
  );
}

export default App;
