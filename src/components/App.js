import React from 'react';
import List from './List';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {

    const {lists} = this.props;
    console.log(lists);  

    return(
      <div className='App'>
        <h2>Hello There</h2>
        <List title='ToDo'/>
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps) (App);
