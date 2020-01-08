import React from 'react';
import List from './List';
import './App.css';

class App extends React.Component {
  render() {
    return(
      <div className='App'>
        <h2>Hello There</h2>
        <List title='ToDo'/>
      </div>
      
    );
  }
}

export default App;
